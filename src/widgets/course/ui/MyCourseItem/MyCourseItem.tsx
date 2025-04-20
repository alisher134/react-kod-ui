import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

import { IProgressResponse } from '@entities/profile/model/types/profileTypes';

import { Button } from '@shared/ui/Button';
import { ProgressBar } from '@shared/ui/ProgressBar';

import styles from './MyCourseItem.module.scss';

export const MyCourseItem = ({ item }: { item: IProgressResponse }) => {
  const formattedDate = format(item.lastAccessed, 'd MMMM yyyy', { locale: ru });

  return (
    <li className={styles.item}>
      <div className={styles.top}>
        <img src={item.thumbnail} alt={item.title} className={styles.image} />
        <h3 className={styles.title}>{item.title}</h3>
      </div>

      <ProgressBar
        totalCount={item.totalLessons}
        currentCount={item.completedLessons}
        percentage={item.progress}
        className={styles.progress}
      />
      <p className={styles['last-active']}>Последний урок просмотрен - {formattedDate}</p>

      <div className={styles.action}>
        {item.lastLesson && (
          <Button href={'/lesson/' + item.lastLesson.slug} isLink>
            Продолжить обучение
          </Button>
        )}
      </div>
    </li>
  );
};
