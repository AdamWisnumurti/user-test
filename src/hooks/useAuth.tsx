import React, { createContext, useCallback, useContext, useState } from "react";
import { useRouter } from "next/router";
import { AuthServices } from "@service";

interface AuthContextProps {
  token: string | null;
  isLoading: boolean;
  error: { message: string; status: number };
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  guard: () => void;
}

const AUTH_INITIAL_VALUES: AuthContextProps = {
  token: null,
  isLoading: false,
  error: { status: 200, message: "" },
  login: function (_: string, __: string): Promise<void> {
    throw new Error("Function not implemented.");
  },
  logout: function (): void {
    throw new Error("Function not implemented.");
  },
  guard: function (): void {
    throw new Error("Function not implemented.");
  },
};

const AuthContext = createContext(AUTH_INITIAL_VALUES);

export interface AuthProviderProps {
  children: React.ReactNode;
  apiUrl: string;
  cookieName?: string;
}

const AuthProvider = ({ children }:{
  children: React.ReactNode;
}) => {
  const router = useRouter();
  const {  authLogin } = AuthServices();
  const [error, setError] = useState({status:200, message:''});
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [token, setToken] = useState<string | null>(() => {
    if (typeof window !== "undefined") {
      const t = localStorage.getItem("access-token");
      return t;
    }
    return null;
  });

  const login = useCallback(
    async (email: string, password: string): Promise<void> => {
      setIsLoading(true);
      try {
        const res = await authLogin({
          email,
          password,
        });

        setToken(() => res.data.token);

        localStorage.setItem("access-token", res.data.token);

        router.push("/users");
      } catch (error:any) {
        console.log(error.response)
        setError({status:error?.response?.status, message:error?.response?.data?.error})
      } finally {
        setIsLoading(false);
      }
    },
    [authLogin,router]
  );

  const logout = useCallback(() => {
    localStorage.removeItem("access-token");
    router.push('./')
  }, [ router]);


  const guard = useCallback(async () => {
    setIsLoading(true);
    if (!token) {
      router.push("/");
    }
  }, [token]);

  return (
    <AuthContext.Provider
      value={{
        token,
        isLoading,
        error,
        login,
        logout,
        guard,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };

export default useAuth;