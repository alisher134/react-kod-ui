import { useQuery } from '@tanstack/react-query';

import { courseService } from '@entities/course/api/courseService';

import { CatalogItem } from '../CatalogItem/CatalogItem';

import styles from './CatalogList.module.scss';
import { CatalogListSkeleton } from './CatalogList.skeleton';

export const CatalogList = () => {
  const { data: courses, isLoading: isCoursesPending } = useQuery({
    queryKey: ['catalog/course'],
    queryFn: () => courseService.getCatalog(),
    select: ({ data }) => data,
  });

  if (isCoursesPending) {
    return (
      <ul className={styles['catalog-list']}>
        <CatalogListSkeleton />
      </ul>
    );
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
