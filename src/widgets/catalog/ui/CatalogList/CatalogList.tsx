import { useCourse } from '@entities/course/hooks/useCourse';

import { CatalogItem } from '../CatalogItem/CatalogItem';

import styles from './CatalogList.module.scss';
import { CatalogListSkeleton } from './CatalogList.skeleton';

export const CatalogList = () => {
  const { courses, isCoursesPending } = useCourse();

  return (
    <ul className={styles['catalog-list']}>
      {isCoursesPending ? (
        <CatalogListSkeleton />
      ) : courses?.length ? (
        courses?.map((course) => <CatalogItem key={course.id} item={course} />)
      ) : (
        <>Ничего не найдено</>
      )}
    </ul>
  );
};
