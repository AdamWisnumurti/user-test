import React from 'react';
import Image from 'next/image';
import { FaArrowLeft } from 'react-icons/fa6';
import Link from 'next/link';
import { Button } from '@component/ui';
import styles from './user-detail.module.scss';

export const UserDetail = ({ data }: { data: any }) => {
  const userData = data?.data;

  return (
    <div className={styles.container_content}>
      <div />
      <div>
        <Link href="/users">
          <Button size="sm" variant="primary-text" className="px-0">
            <span className={styles.back_button}>
              <FaArrowLeft size={18} />
              <p className={styles.back_text}>Kembali</p>
            </span>
          </Button>
        </Link>
        <div className={styles.detail_content}>
          <Image
            src={userData?.avatar}
            alt={`avatar-${userData?.first_name}`}
            width={0}
            height={0}
            sizes="fit"
            className={styles.detail_image}
          />
          <p className={styles.detail_name}>{`${userData?.first_name || ''} ${
            userData?.last_name || ''
          }`}</p>
          <p className={styles.detail_email}>{userData?.email || ''}</p>
        </div>
      </div>
      <div />
    </div>
  );
};

export default UserDetail;
