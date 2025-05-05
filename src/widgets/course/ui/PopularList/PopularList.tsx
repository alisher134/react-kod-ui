import { CatalogItem } from '@widgets/catalog/ui/CatalogItem/CatalogItem';
import { CatalogListSkeleton } from '@widgets/catalog/ui/CatalogList/CatalogList.skeleton';

import { useCourse } from '@entities/course/hooks/useCourse';

import styles from './PopularList.module.scss';

export const PopularList = () => {
  const { coursesPopular, isPopularPending } = useCourse();

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
