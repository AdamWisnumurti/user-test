/* eslint-disable prefer-promise-reject-errors */
import type { AxiosError, AxiosResponse } from 'axios';
import api from './api';

const apiClient = api({
  baseURL: process.env.NEXT_PUBLIC_API_URL_REQRES,
});

export const AuthServices = () => {
  const authLogin = (params: { email: string; password: string }) => {
    return apiClient
      .post(`login`, params)
      .then((res: AxiosResponse) => {
        return { data: res.data };
      })
      .catch((err: AxiosError) => {
        return Promise.reject(err);
      });
  };

  const authRegister = (params: { email: string; password: string }) => {
    return apiClient
      .post(`register`, params)
      .then((res: AxiosResponse) => {
        return { data: res.data };
      })
      .catch((err: AxiosError) => {
        return Promise.reject(err);
      });
  };

  return {
    authLogin,
    authRegister,
  };
};

export default AuthServices;
