import { Suspense } from 'react';
import { Outlet } from 'react-router';

import styles from './AuthLayout.module.scss';

export const AuthLayout = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Suspense>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};
