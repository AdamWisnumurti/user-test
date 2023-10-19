import React from 'react';
import { Login } from '@container/login';
import { useAuth } from '@hook';

const LoginPage = () => {
  const { login, error, isLoading } = useAuth();
  return <Login login={login} isLoading={isLoading} error={error} />;
};
export default LoginPage;
