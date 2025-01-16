import clsx from 'clsx';
import { Link, useLocation } from 'react-router';

import { ISidebarMenuItem } from '@widgets/Sidebar/model/types/sidebarTypes';

import styles from './SidebarMenuItem.module.scss';

export interface ISidebarMenuItemProps {
  item: ISidebarMenuItem;
  isCollapsed: boolean;
}

export const SidebarMenuItem = ({ item, isCollapsed }: ISidebarMenuItemProps) => {
  const { pathname } = useLocation();

  return (
    <li
      className={clsx(styles.item, {
        [styles.active]: pathname === item.link,
        [styles['is-collapsed']]: isCollapsed,
      })}
    >
      <Link to={item.link} className={styles.link}>
        <item.icon className={styles.icon} />
        <span className={styles.text}>{item.title}</span>
      </Link>
    </li>
  );
};
