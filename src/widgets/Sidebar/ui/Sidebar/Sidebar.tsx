import { LogOut, X } from 'lucide-react';
import { useNavigate } from 'react-router';

import { Logo } from '@widgets/Logo';
import { sidebarMenuData } from '@widgets/Sidebar/model/data/sidebarData';

import { useAuth } from '@entities/auth';
import { useProfile } from '@entities/profile';

import { ROUTES } from '@shared/config/router';

import { SidebarMenuList } from '../SidebarMenuList/SidebarMenuList';
import { UserInfo } from '../UserInfo/UserInfo';

import styles from './Sidebar.module.scss';

export const Sidebar = () => {
  const navigate = useNavigate();
  const { profile, isLoading } = useProfile();
  const { logout } = useAuth();

  const onLogout = async () => {
    await logout();
    navigate(ROUTES.auth.login.page);
  };

  return (
    <aside className={styles.sidebar}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles['toggle-button']}>
            <button className={styles.button}>
              <X size={24} />
            </button>
          </div>

          <UserInfo
            firstName={profile?.firstName}
            avatarPath={profile?.avatarPath}
            isLoading={isLoading}
          />
        </div>

        <SidebarMenuList menu={sidebarMenuData} />

        <div className={styles.bottom}>
          <button onClick={onLogout} className={styles['logout-button']}>
            <LogOut className={styles.icon} />
            <span>Выйти</span>
          </button>

          <Logo size="sm" className={styles.logo} />
        </div>
      </div>
    </aside>
  );
};
