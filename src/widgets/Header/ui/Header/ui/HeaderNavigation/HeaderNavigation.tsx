import { useHeaderMenuData } from '@widgets/Header/model/data/headerData';
import { INavigation } from '@widgets/Header/model/types/headerTypes';

import { HeaderCourseMenu } from '../HeaderCourseMenu/HeaderCourseMenu';
import { HeaderNavigationItem } from '../HeaderNavigationItem/HeaderNavigationItem';

import styles from './HeaderNavigation.module.scss';

interface HeaderNavigationProps {
  menu: INavigation[];
}

export const HeaderNavigation = ({ menu }: HeaderNavigationProps) => {
  const { headerCourseMenuData } = useHeaderMenuData();

  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <HeaderCourseMenu menu={headerCourseMenuData} />

        {menu.map((item) => (
          <HeaderNavigationItem item={item} key={item.title} />
        ))}
      </ul>
    </nav>
  );
};
