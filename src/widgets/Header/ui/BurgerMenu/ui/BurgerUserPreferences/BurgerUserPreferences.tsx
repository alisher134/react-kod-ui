import { ChevronRight, CircleUser } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';

import { UserPreferencesSkeleton } from '@features/common/user-preferences';

import { useAuth } from '@entities/auth';
import { useProfile } from '@entities/profile';

import { I18Namespace } from '@shared/config/i18n';
import { ELanding } from '@shared/config/i18n/i18nTranslations';
import { ROUTES } from '@shared/config/router';

import styles from './BurgerUserPreferences.module.scss';

export const BurgerUserPreferences = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { logout, isLoggedIn } = useAuth();
  const { profile, isLoading } = useProfile();

  const { t } = useTranslation(I18Namespace.landing);

  const handleIsOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const onLogout = async () => {
    await logout();
  };

  if (isLoading) return <UserPreferencesSkeleton />;

  return (
    <div className={styles.preferences}>
      <button onClick={handleIsOpen} className={styles.button}>
        <div className={styles.info}>
          <CircleUser className={styles.icon} />
          <span>{isLoggedIn ? profile?.firstName : t(ELanding.LOGIN)}</span>
        </div>
        <ChevronRight size={18} />
      </button>

      {isOpen && (
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to={ROUTES.student.courses.page} className={styles.link}>
              {t(ELanding.EDUCATION)}
            </Link>
          </li>
          {isLoggedIn && (
            <li className={styles.item}>
              <Link to={ROUTES.student.my_profile.page} className={styles.link}>
                {t(ELanding.PROFILE)}
              </Link>
            </li>
          )}
          <li className={styles.item}>
            {isLoggedIn ? (
              <button onClick={onLogout} className={styles.button}>
                {t(ELanding.LOGOUT)}
              </button>
            ) : (
              <Link to={ROUTES.auth.login.page} className={styles.link}>
                {t(ELanding.SIGNIN)}
              </Link>
            )}
          </li>
        </ul>
      )}
    </div>
  );
};
