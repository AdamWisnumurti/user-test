import type { ReactElement } from 'react';
import React, { useEffect } from 'react';
import { UserDashboard } from '@container/user-dashboard';
import { LayoutDefault } from '@layout';
import { useAuth } from '@hook';
import type { NextPageWithLayout } from '../_app';

const UserDashboardPage: NextPageWithLayout = () => {
  const { guard } = useAuth();

  useEffect(() => {
    guard();
  }, []);
  return <UserDashboard />;
};

UserDashboardPage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutDefault isTransparent={false}>{page}</LayoutDefault>;
};

export default UserDashboardPage;
