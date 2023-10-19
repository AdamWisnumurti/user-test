import { useCallback, useEffect, useState } from 'react';

export const usePagination = (
  service: (params: {
    page: number; // halaman
    per_page: number; // limit perhalaman
  }) => any,
  defaultPage?: number,
  defaultLimit?: number,
) => {
  const [data, setData] = useState<any>();
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(defaultPage || 0);
  const [limit, setLimit] = useState(defaultLimit || 5);
  const [pageCount, setPageCount] = useState(0);
  const [dataCount, setDataCount] = useState(0);

  const fetch = useCallback(async () => {
    const response = await service({
      page,
      per_page: limit,
    });
    if (!response) {
      return;
    }
    // eslint-disable-next-line consistent-return
    return response;
  }, [service, page, limit]);

  useEffect(() => {
    setIsLoading(true);

    fetch()
      .then((json) => {
        if (json) {
          setData(() => json.data);
          setPageCount(() => json.data?.total_pages);
          setDataCount(() => json.data?.total);
        }
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        return e;
      });
  }, [page, limit]);

  const reload = useCallback(() => {
    setPage(1);
    setLimit(5);
  }, [setPage, setLimit]);

  return {
    reload,
    data,
    isLoading,
    page,
    setPage,
    limit,
    setLimit,
    pageCount,
    dataCount,
  };
};
