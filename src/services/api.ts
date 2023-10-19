import type { AxiosInstance, AxiosRequestConfig } from 'axios';
import axios from 'axios';
// Middleware Axios
interface ApiAxios extends AxiosRequestConfig {
  headersType?: string;
}
const api = (props: ApiAxios): AxiosInstance => {
  const accessToken =
    typeof window !== 'undefined' ? localStorage.getItem('access-token') : '';
  const instance = axios.create({
    baseURL: props.baseURL,
    headers: {
      'Content-Type': props.headersType || 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });

  // Interceptor for response errors
  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response?.status === 401) {
        window.location.href = '/';
      }
      return Promise.reject(error);
    },
  );
  return instance;
};

export default api;
