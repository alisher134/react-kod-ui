import clsx from 'clsx';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

import { useHeaderMenuData } from '@widgets/Header/model/data/headerData';
import { Logo } from '@widgets/Logo';

import { BurgerCourseMenuItem } from '../BurgerCourseMenuItem/BurgerCourseMenuItem';
import { BurgerMenuItem } from '../BurgerMenuItem/BurgerMenuItem';
import { BurgerUserPreferences } from '../BurgerUserPreferences/BurgerUserPreferences';

import styles from './BurgerMenu.module.scss';

export const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { navMenuData, headerCourseMenuData } = useHeaderMenuData();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  const handleIsOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <button onClick={handleIsOpen} className={styles['open-button']}>
        <Menu />
      </button>
      <div className={clsx(styles.menu, { [styles['is-open']]: isOpen })}>
        <div className={styles.header}>
          <Logo />

          <button onClick={handleIsOpen} className={styles['close-button']}>
            <X />
          </button>
        </div>

        <div className={styles.content}>
          <nav className={styles.nav}>
            <ul className={styles.list}>
              <BurgerCourseMenuItem item={headerCourseMenuData} />

              {navMenuData.map((menu) => (
                <BurgerMenuItem item={menu} key={menu.title} />
              ))}

              <BurgerUserPreferences />
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};
