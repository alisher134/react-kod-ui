import { useHeaderMenuData } from '@widgets/Header/model/data/headerData.ts';
import { Logo } from '@widgets/Logo';

import { UserPreferences } from '@features/common/user-preferences';
import { LanguageSwitcher } from '@features/switch-language';

import { HeaderNavigation } from '../HeaderNavigation/HeaderNavigation';

import styles from './Header.module.scss';

export const Header = () => {
  const { navMenuData } = useHeaderMenuData();

  return (
    <header className={styles.wrapper}>
      <div className={styles.container}>
        <Logo />

        <HeaderNavigation menu={navMenuData} />

        <LanguageSwitcher />

        <UserPreferences />
      </div>
    </header>
  );
};
