import { Outlet } from 'react-router';

import { Footer } from '@widgets/Footer';
import { Header } from '@widgets/Header';

import styles from './MainLayout.module.scss';

export const MainLayout = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
