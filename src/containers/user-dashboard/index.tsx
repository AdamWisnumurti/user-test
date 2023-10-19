'use-client';

import React from 'react';
import { LuRefreshCw } from 'react-icons/lu';
import {
  Pagination,
  Select,
  SubHeader,
  CardUser,
  LoadingScreen,
  Button,
} from '@component/ui';
import { usePagination } from '@hook';
import { UserServices } from '@service';
import styles from './user-dashboard.module.scss';

export const UserDashboard = () => {
  const { getUserList } = UserServices();
  const { data, reload, page, setPage, limit, setLimit, pageCount, isLoading } =
    usePagination(getUserList, 1, 5);
  const listLimit = [
    { label: 5, value: 5 },
    { label: 10, value: 10 },
    { label: 15, value: 15 },
    { label: 20, value: 20 },
  ];
  return (
    <>
      {/* Cara pengajuan rumah section */}
      <section className={styles.container_content}>
        <div className={styles.header_content}>
          <SubHeader text="User Dashboard" />
          <div className={styles.header}>
            <div className={styles.header_limit}>
              <p>Limit</p>
              <div className={styles.select_limit}>
                <Select
                  selected={String(limit)}
                  selectedLabel={String(limit)}
                  setSelected={(e: any) => setLimit(e)}
                  listOptions={listLimit}
                />
              </div>
            </div>
            <Button variant="primary-text" onClick={reload}>
              <div className={styles.reload}>
                <LuRefreshCw size={16} />
                <p>Reload</p>
              </div>
            </Button>
          </div>
        </div>
        <div className={styles.card_content}>
          {data?.data?.map((item: any, key: number) => {
            return <CardUser item={item} key={key} />;
          })}
        </div>
        {isLoading && <LoadingScreen />}
        {data && (
          <Pagination
            pageIndex={page}
            pageCount={pageCount}
            setPageIndex={setPage}
          />
        )}
      </section>
    </>
  );
};

export default UserDashboard;
