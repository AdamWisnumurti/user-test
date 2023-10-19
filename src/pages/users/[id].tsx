import type { ReactElement } from 'react';
import React, { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { UserDetail } from '@container/user-detail';
import { LayoutDefault } from '@layout';
import { UserServices } from '@service';
import { LoadingScreen, PageNotFound } from '@component/ui';
import { useAuth } from '@hook';
import type { NextPageWithLayout } from '../_app';

const UserDetailPage: NextPageWithLayout = () => {
  const { getUserById } = UserServices();
  const { guard } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState();
  const router = useRouter();
  const { id } = router.query;

  const fetchUserById = useCallback(
    async (idUser: string) => {
      setIsLoading(true);
      try {
        const res = await getUserById(idUser);
        setData(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    },
    [getUserById],
  );

  useEffect(() => {
    if (id) {
      fetchUserById(id as string);
    }
  }, [id]);

  useEffect(() => {
    guard();
  }, []);

  if (!isLoading && data) {
    return <UserDetail data={data} />;
  }

  if (!isLoading && !data) {
    return <PageNotFound />;
  }

  return <LoadingScreen />;
};

UserDetailPage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutDefault isTransparent={false}>{page}</LayoutDefault>;
};

export default UserDetailPage;
