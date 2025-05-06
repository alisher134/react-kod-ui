import { useQuery } from '@tanstack/react-query';

import { CatalogItem } from '@widgets/catalog/ui/CatalogItem/CatalogItem';
import { CatalogListSkeleton } from '@widgets/catalog/ui/CatalogList/CatalogList.skeleton';

import { courseService } from '@entities/course/api/courseService';

import styles from './PopularList.module.scss';

export const PopularList = () => {
  const { data: coursesPopular, isLoading: isPopularPending } = useQuery({
    queryKey: ['course/popular'],
    queryFn: () => courseService.getPopular(),
    select: ({ data }) => data,
  });

  if (isPopularPending) {
    return (
      <ul className={styles['popular-list']}>
        <CatalogListSkeleton />
      </ul>
    );
  }

  if (!Array.isArray(coursesPopular) || coursesPopular.length === 0) {
    return <>Ничего не найдено</>;
  }

  return (
    <ul className={styles['popular-list']}>
      {coursesPopular?.map((course) => <CatalogItem key={course.id} item={course} />)}
    </ul>
  );
};
