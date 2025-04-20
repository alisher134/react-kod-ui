import { Link } from 'react-router';

import { ICourse } from '@entities/course/types/courseTypes';

import { ROUTES } from '@shared/config/router';

import styles from './CatalogItem.module.scss';

export const CatalogItem = ({ item }: { item: ICourse }) => {
  return (
    <li className={styles.item}>
      <Link to={ROUTES.course.page + `/${item.slug}`} className={styles.link}>
        <div className={styles.thumbnail}>
          <img src={item.thumbnail} alt={item.slug} />
        </div>
        <div className={styles.info}>
          <h3 className={styles.title}>{item.title}</h3>
          <p className={styles.description}>{item.description}</p>
        </div>
        <span className={styles.badge}>{item.lessons.length} урока</span>
      </Link>
    </li>
  );
};
