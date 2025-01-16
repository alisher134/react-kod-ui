import { ISidebarMenuItem } from '@widgets/Sidebar/model/types/sidebarTypes';

import { SidebarMenuItem } from '../SidebarMenuItem/SidebarMenuItem';

import styles from './SidebarMenuList.module.scss';

export interface ISidebarMenuListProps {
  menu: ISidebarMenuItem[];
  isCollapsed: boolean;
}

export const SidebarMenuList = ({ menu, isCollapsed }: ISidebarMenuListProps) => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {menu.map((item) => (
          <SidebarMenuItem item={item} isCollapsed={isCollapsed} key={item.title} />
        ))}
      </ul>
    </nav>
  );
};
