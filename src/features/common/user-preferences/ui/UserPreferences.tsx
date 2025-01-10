import clsx from 'clsx';
import { CircleUser } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';

import { useAuth } from '@entities/auth';
import { useProfile } from '@entities/profile';

import { I18Namespace } from '@shared/config/i18n';
import { Translation } from '@shared/config/i18n/i18nTranslations';
import { ROUTES } from '@shared/config/router';

import styles from './UserPreferences.module.scss';
import { UserPreferencesSkeleton } from './UserPreferences.skeleton';

interface UserPreferencesProps {
  className?: string;
}

export const UserPreferences = ({ className }: UserPreferencesProps) => {
  const { logout, isLoggedIn } = useAuth();
  const { profile, isLoading } = useProfile();

  const { t } = useTranslation(I18Namespace.landing);

  const onLogout = async () => {
    await logout();
  };

  if (isLoading) return <UserPreferencesSkeleton />;

  return (
    <div className={clsx(styles.preferences, className)}>
      <div className={styles['avatar-container']}>
        <>
          <CircleUser />
          <span>{isLoggedIn ? profile?.firstName : t(Translation.LOGIN)}</span>
        </>
      </div>
      <ul className={styles.dropdown}>
        <li className={styles.item}>
          <Link to={ROUTES.student.courses.page} className={styles.link}>
            {t(Translation.EDUCATION)}
          </Link>
        </li>
        {isLoggedIn && (
          <li className={styles.item}>
            <Link to={ROUTES.student.my_profile.page} className={styles.link}>
              {t(Translation.PROFILE)}
            </Link>
          </li>
        )}
        <li className={styles.item}>
          {isLoggedIn ? (
            <button onClick={onLogout} className={styles.button}>
              {t(Translation.LOGOUT)}
            </button>
          ) : (
            <Link to={ROUTES.auth.login.page} className={styles.link}>
              {t(Translation.SIGNIN)}
            </Link>
          )}
        </li>
      </ul>
    </div>
  );
};
