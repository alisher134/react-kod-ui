import { MyCourseList } from '@widgets/course';

import styles from './MainPage.module.scss';

const MainPage = () => {
  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Мои курсы</h1>
      <MyCourseList />
    </div>
  );
};

export default MainPage;
