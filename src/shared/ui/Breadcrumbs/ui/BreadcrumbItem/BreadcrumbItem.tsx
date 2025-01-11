import { Link } from 'react-router';

import { IBreadcrumbItem } from '../../model/breadcrumbsTypes';

import styles from './BreadcrumbItem.module.scss';

export const BreadcrumbItem = ({ item }: { item: IBreadcrumbItem }) => {
  return item.isCurrent ? (
    <span className={styles.current}>{item.title}</span>
  ) : (
    <Link to={item.link || '#'} className={styles.link}>
      {item.title}
    </Link>
  );
};
