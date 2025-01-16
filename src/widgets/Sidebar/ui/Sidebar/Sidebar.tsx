import clsx from 'clsx';
import { LogOut, PanelRightClose, PanelRightOpen } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';

import { Logo } from '@widgets/Logo';
import { sidebarMenuData } from '@widgets/Sidebar/model/data/sidebarData';

import { useAuth } from '@entities/auth';
import { useProfile } from '@entities/profile';

import icon from '@shared/assets/images/logoImg.png';
import { ETranslation } from '@shared/config/i18n/i18nTranslations';
import { ROUTES } from '@shared/config/router';
import { getFromLS, setToLS } from '@shared/helpers/manageLocalStorage';

import { SidebarMenuList } from '../SidebarMenuList/SidebarMenuList';
import { UserInfo } from '../UserInfo/UserInfo';

import styles from './Sidebar.module.scss';

export const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(() => {
    const storedState = getFromLS('isCollapsed');
    return storedState ? storedState === 'true' : false;
  });

  const navigate = useNavigate();
  const { profile, isLoading } = useProfile();
  const { t } = useTranslation();
  const { logout } = useAuth();

  const onLogout = async () => {
    await logout();
    navigate(ROUTES.auth.login.page);
  };

  const handleOpen = () => {
    setIsCollapsed((prev) => {
      const newState = !prev;
      setToLS('isCollapsed', newState);
      return newState;
    });
  };

  return (
    <aside className={clsx(styles.sidebar, { [styles['is-collapsed']]: isCollapsed })}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles['toggle-button']}>
            <button onClick={handleOpen} className={styles.button}>
              {isCollapsed ? <PanelRightClose size={24} /> : <PanelRightOpen size={24} />}
            </button>
          </div>

          <UserInfo
            firstName={profile?.firstName}
            avatarPath={profile?.avatarPath}
            isLoading={isLoading}
            isCollapsed={isCollapsed}
          />
        </div>

        <SidebarMenuList menu={sidebarMenuData(t)} isCollapsed={isCollapsed} />

        <div className={styles.bottom}>
          <button onClick={onLogout} className={styles['logout-button']}>
            <LogOut className={styles.icon} />
            <span className={styles.text}>{t(ETranslation.LOGOUT)}</span>
          </button>

          {isCollapsed ? (
            <img width={24} height={24} src={icon} alt="logo" className={styles.logo} />
          ) : (
            <Logo size="sm" className={styles.logo} />
          )}
        </div>
      </div>
    </aside>
  );
};
