import { SquarePen } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';

import { useProfile } from '@entities/profile';

import { I18Namespace } from '@shared/config/i18n';
import { EProfile } from '@shared/config/i18n/i18nTranslations';
import { ROUTES } from '@shared/config/router';

import { ProfileUserInfo } from '../ProfileUserInfo/ProfileUserInfo';

import styles from './ProfilePage.module.scss';

const ProfilePage = () => {
  const { profile, isLoading } = useProfile();

  const { t } = useTranslation(I18Namespace.profile);

  return (
    <section className={styles.profile}>
      <div className={styles.container}>
        <h1 className={styles.title}>{t(EProfile.TITLE)}</h1>

        <ProfileUserInfo profile={profile} isLoading={isLoading} />

        <Link to={ROUTES.student.my_profile.edit.page} className={styles['edit-link']}>
          <SquarePen className={styles.icon} />
          <span className={styles.name}>{t(EProfile.EDIT_LINK)}</span>
        </Link>
      </div>
    </section>
  );
};

export default ProfilePage;
