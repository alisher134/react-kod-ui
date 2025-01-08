import { Outlet } from 'react-router';

import { Sidebar } from '@widgets/Sidebar';

import styles from './StudentLayout.module.scss';

export const StudentLayout = () => {
  return (
    <main className={styles.wrapper}>
      <Sidebar />

      <div className={styles.container}>
        <Outlet />
      </div>
    </main>
  );
};
