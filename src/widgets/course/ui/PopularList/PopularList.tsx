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

  return (
    <ul className={styles['popular-list']}>
      {isPopularPending ? (
        <CatalogListSkeleton />
      ) : coursesPopular?.length ? (
        coursesPopular?.map((course) => <CatalogItem key={course.id} item={course} />)
      ) : (
        <>Ничего не найдено</>
      )}
    </ul>
  );
};
