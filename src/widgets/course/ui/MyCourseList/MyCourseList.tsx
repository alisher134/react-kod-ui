import { CatalogList } from '@widgets/catalog';

import { useProfile } from '@entities/profile';

import { MyCourseItem } from '../MyCourseItem/MyCourseItem';

import styles from './MyCourseList.module.scss';
import { MyCourseListSkeleton } from './MyCourseList.skeleton';

export const MyCourseList = () => {
  const { progress, isProgressLoading } = useProfile();

  return (
    <div className={styles.course}>
      <ul className={styles.list}>
        {isProgressLoading ? (
          <MyCourseListSkeleton />
        ) : progress?.length ? (
          progress?.map((item) => <MyCourseItem key={item.id} item={item} />)
        ) : (
          <>Вы еще не начали проходить курсы</>
        )}
      </ul>

      <div className={styles.popular}>
        <h3>Популярные курсы</h3>
        <CatalogList />
      </div>
    </div>
  );
};
