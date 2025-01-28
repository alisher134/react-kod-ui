import { Link } from 'react-router';

import { INavigation } from '@widgets/Header/model/types/headerTypes';

import styles from './HeaderNavigationItem.module.scss';

interface HeaderNavigationItemProps {
  item: INavigation;
}

export const HeaderNavigationItem = ({ item }: HeaderNavigationItemProps) => {
  return (
    <li className={styles.item}>
      <span>{item.title}</span>
      <ul className={styles.dropdown}>
        {item.items.map((subItem) => (
          <li key={subItem.title} className={styles['sub-item']}>
            <Link to={subItem.link} className={styles.link}>
              {subItem.title}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
};
