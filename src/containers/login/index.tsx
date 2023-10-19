import React, { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { Button, InputLabel, ModalError } from '@component/ui';
import { isValidEmail } from '@util';
import styles from './login.module.scss';

export const Login = ({
  login,
  error,
  isLoading,
}: {
  login: (_: string, __: string) => void;
  error: { status: number; message: string };
  isLoading: boolean;
}) => {
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  const [modal, setModal] = useState({
    isOpen: false,
    message: '',
    success: true,
  });

  const toggleClose = useCallback(() => {
    setModal((curr) => ({ ...curr, isOpen: false }));
  }, []);

  useEffect(() => {
    if (error?.message) {
      setModal((curr) => ({
        ...curr,
        isOpen: true,
        message: error?.message,
        success: false,
      }));
    }
  }, [error]);

  return (
    <section className={styles.container_content}>
      <div className={styles.col_left} />
      <div className={styles.content}>
        <h1 className={styles.header}>Selamat Datang</h1>
        <p className={styles.desc}>Masukan Email dan Kata Sandi</p>
        <InputLabel
          label="Email"
          placeholder="Masukan Email"
          isError={!isValidEmail(data.email)}
          errorMessage="Email tidak valid"
          value={data.email}
          filled={data.email}
          onChange={(e) =>
            setData((curr) => ({ ...curr, email: e.target.value }))
          }
          classNameWrapper={styles.mb_input}
        />
        <InputLabel
          label="Password"
          placeholder="Masukan Kata Sandi"
          type="password"
          value={data.password}
          filled={data.password}
          onChange={(e) =>
            setData((curr) => ({ ...curr, password: e.target.value }))
          }
          classNameWrapper={styles.mb_input}
        />
        <Button
          onClick={() => login(data.email, data.password)}
          isLoading={isLoading}
          disabled={!isValidEmail(data.email) || !data.password}
        >
          Masuk
        </Button>
        <p className={styles.register}>Belum Punya Akun?</p>
        <Link className={styles.link_register} href="/register">
          Daftar Sekarang
        </Link>
      </div>
      <div />
      {error.message && (
        <ModalError
          isOpen={modal.isOpen}
          message={modal.message}
          toggleClose={toggleClose}
        />
      )}
    </section>
  );
};

export default Login;
