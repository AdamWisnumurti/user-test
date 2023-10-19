import { useCallback, useState } from 'react';

export const useApi = (service: any) => {
  const [data, setData] = useState<any>();
  const [error, setError] = useState<any>({ isError: false, message: '' });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    setError((curr: any) => ({ ...curr, isError: false, message: '' }));
    try {
      const res = await service;
      setData(res?.data);
    } catch (err) {
      setError((curr: any) => ({
        ...curr,
        isError: true,
        message: err || 'Internal server error',
      }));
    } finally {
      setIsLoading(false);
    }
  }, [service]);

  return [data, isLoading, fetchData, error];
};
