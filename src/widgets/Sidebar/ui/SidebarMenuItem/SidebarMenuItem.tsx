import clsx from 'clsx';
import { Link, useLocation } from 'react-router';

import { ISidebarMenuItem } from '@widgets/Sidebar/model/types/sidebarTypes';

import styles from './SidebarMenuItem.module.scss';

export const SidebarMenuItem = ({ item }: { item: ISidebarMenuItem }) => {
  const { pathname } = useLocation();

  return (
    <li
      className={clsx(styles.item, {
        [styles.active]: pathname === item.link,
      })}
    >
      <Link to={item.link} className={styles.link}>
        <item.icon className={styles.icon} />
        <span>{item.title}</span>
      </Link>
    </li>
  );
};
