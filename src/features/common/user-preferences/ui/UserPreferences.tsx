import clsx from 'clsx';
import { CircleUser } from 'lucide-react';
import { Link } from 'react-router';

import { useAuth } from '@entities/auth';
import { useProfile } from '@entities/profile';

import { ROUTES } from '@shared/config/router';

import styles from './UserPreferences.module.scss';
import { UserPreferencesSkeleton } from './UserPreferences.skeleton';

interface UserPreferencesProps {
  className?: string;
}

export const UserPreferences = ({ className }: UserPreferencesProps) => {
  const { logout, isLoggedIn } = useAuth();
  const { profile, isPending } = useProfile();

  const onLogout = async () => {
    await logout();
  };

  if (isPending) return <UserPreferencesSkeleton />;

  return (
    <div className={clsx(styles.preferences, className)}>
      <div className={styles['avatar-container']}>
        <>
          <CircleUser />
          <span>{isLoggedIn ? profile?.firstName : 'Вход'}</span>
        </>
      </div>
      <ul className={styles.dropdown}>
        <li className={styles.item}>
          <Link to={ROUTES.auth.login.page} className={styles.link}>
            Обучение
          </Link>
        </li>
        {isLoggedIn && (
          <li className={styles.item}>
            <Link to={ROUTES.auth.login.page} className={styles.link}>
              Профиль
            </Link>
          </li>
        )}
        <li className={styles.item}>
          {isLoggedIn ? (
            <button onClick={onLogout} className={styles.button}>
              Выйти
            </button>
          ) : (
            <Link to={ROUTES.auth.login.page} className={styles.link}>
              Войти
            </Link>
          )}
        </li>
      </ul>
    </div>
  );
};
