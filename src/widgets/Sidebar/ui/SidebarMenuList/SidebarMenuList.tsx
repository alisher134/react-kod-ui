import { ISidebarMenuItem } from '@widgets/Sidebar/model/types/sidebarTypes';

import { SidebarMenuItem } from '../SidebarMenuItem/SidebarMenuItem';

import styles from './SidebarMenuList.module.scss';

export const SidebarMenuList = ({ menu }: { menu: ISidebarMenuItem[] }) => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {menu.map((item) => (
          <SidebarMenuItem item={item} key={item.title} />
        ))}
      </ul>
    </nav>
  );
};
