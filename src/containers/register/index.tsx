import React, { useCallback, useState } from 'react';
import Link from 'next/link';
import { Button, InputLabel, ModalError } from '@component/ui';
import { isValidEmail } from '@util';
import { AuthServices } from '@service';
import styles from './register.module.scss';

export const Register = () => {
  const { authRegister } = AuthServices();
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  const [modal, setModal] = useState({
    isOpen: false,
    message: '',
    success: true,
  });
  const [isLoading, setIsLoading] = useState(false);

  const toggleClose = useCallback(() => {
    setModal((curr) => ({ ...curr, isOpen: false }));
  }, []);

  const postRegister = useCallback(async () => {
    setIsLoading(true);
    try {
      const res = await authRegister({
        email: data.email,
        password: data.password,
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [data, authRegister]);

  return (
    <section className={styles.container_content}>
      <div className={styles.col_left} />
      <div className={styles.content}>
        <h1 className={styles.header}>Daftar Akun</h1>
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
          onClick={postRegister}
          isLoading={isLoading}
          disabled={!isValidEmail(data.email) || !data.password}
        >
          Daftar
        </Button>
        <p className={styles.register}>Sudah Punya Akun?</p>
        <Link className={styles.link_register} href="/">
          Masuk Sekarang
        </Link>
      </div>
      <div />
      {modal.isOpen && (
        <ModalError
          isOpen={modal.isOpen}
          message={modal.message}
          toggleClose={toggleClose}
        />
      )}
    </section>
  );
};

export default Register;
