import { useCourse } from '@entities/course/hooks/useCourse';

import { CatalogItem } from '../CatalogItem/CatalogItem';

import styles from './CatalogList.module.scss';
import { CatalogListSkeleton } from './CatalogList.skeleton';

export const CatalogList = () => {
  const { courses, isCoursesPending } = useCourse();

  if (isCoursesPending) {
    return <CatalogListSkeleton />;
  }

  if (!Array.isArray(courses) || courses.length === 0) {
    return <>Ничего не найдено</>;
  }

  return (
    <ul className={styles['catalog-list']}>
      {courses.map((course) => (
        <CatalogItem key={course.id} item={course} />
      ))}
    </ul>
  );
};
