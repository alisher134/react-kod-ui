import { useHeaderMenuData } from '@widgets/Header/model/data/headerData.ts';
import { Logo } from '@widgets/Logo';

import { UserPreferences } from '@features/common/user-preferences';
import { LanguageSwitcher } from '@features/switch-language';

import { useScreenSize } from '@shared/hooks/useScreenSize';

import { BurgerMenu } from '../../../BurgerMenu';
import { HeaderNavigation } from '../HeaderNavigation/HeaderNavigation';

import styles from './Header.module.scss';

export const Header = () => {
  const { navMenuData } = useHeaderMenuData();
  const { isMobile, isMobileS, isTablet } = useScreenSize();

  const isMobileOrTablet = isTablet || isMobile || isMobileS;

  return (
    <header className={styles.wrapper}>
      <div className={styles.container}>
        <Logo />

        {isMobileOrTablet ? (
          <BurgerMenu />
        ) : (
          <>
            <HeaderNavigation menu={navMenuData} />

            <LanguageSwitcher />

            <UserPreferences />
          </>
        )}
      </div>
    </header>
  );
};
