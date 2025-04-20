import { Suspense } from 'react';
import { Outlet } from 'react-router';

import { LessonSidebar } from '@widgets/lesson';

import styles from './LessonLayout.module.scss';

export const LessonLayout = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <LessonSidebar />

        <main className={styles.main}>
          <Suspense>
            <Outlet />
          </Suspense>
        </main>
      </div>
    </div>
  );
};
