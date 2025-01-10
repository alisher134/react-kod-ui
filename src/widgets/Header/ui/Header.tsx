import { Menu } from 'lucide-react';

import { Logo } from '@widgets/Logo';

import { UserPreferences } from '@features/common/user-preferences';
import { LanguageSwitcher } from '@features/switch-language';

import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.wrapper}>
      <div className={styles.container}>
        <Logo />

        <nav className={styles.nav}>
          <ul className={styles.list}>
            <li>Курсы</li>
            <li>Карьерные пути</li>
            <li>Бесплатно</li>
            <li>
              <Menu />
            </li>
          </ul>
        </nav>

        <LanguageSwitcher />

        <UserPreferences />
      </div>
    </header>
  );
};
