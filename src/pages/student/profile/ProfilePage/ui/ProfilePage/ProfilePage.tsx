import { SquarePen } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';

import { useProfile } from '@entities/profile';

import { I18Namespace } from '@shared/config/i18n';
import i18n from '@shared/config/i18n/i18n';
import { EProfile, ETranslation } from '@shared/config/i18n/i18nTranslations';
import { ROUTES } from '@shared/config/router';
import { Breadcrumbs } from '@shared/ui/Breadcrumbs';
import { IBreadcrumbItem } from '@shared/ui/Breadcrumbs/model/breadcrumbsTypes';

import { ProfileUserInfo } from '../ProfileUserInfo/ProfileUserInfo';

import styles from './ProfilePage.module.scss';

const ProfilePage = () => {
  const { profile, isLoading } = useProfile();

  const { t } = useTranslation(I18Namespace.profile);

  const links: IBreadcrumbItem[] = [
    { title: i18n.t(ETranslation.CRUMBS_KODPLUS), link: '/' },
    {
      title: i18n.t(ETranslation.CRUMBS_PROFILE),
      link: ROUTES.student.my_profile.page,
      isCurrent: true,
    },
  ];

  return (
    <section className={styles.profile}>
      <Breadcrumbs links={links} />
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
