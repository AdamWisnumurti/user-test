import type { AxiosError, AxiosResponse } from 'axios';
import api from './api';

const apiClient = api({ baseURL: process.env.NEXT_PUBLIC_API_URL_REQRES });

export const UserServices = () => {
  const getUserList = (params: any) => {
    return apiClient
      .get('users', { params })
      .then((res: AxiosResponse) => {
        return { data: res.data };
      })
      .catch((err: AxiosError) => {
        return Promise.reject(err);
      });
  };

  const getUserById = (id: string) => {
    return apiClient
      .get(`users/${id}`)
      .then((res: AxiosResponse) => {
        return { data: res.data };
      })
      .catch((err: AxiosError) => {
        return Promise.reject(err);
      });
  };

  return {
    getUserList,
    getUserById,
  };
};

export default UserServices;
