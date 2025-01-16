import clsx from 'clsx';
import { Settings, SquarePen } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';

import { useProfile } from '@entities/profile';

import { I18Namespace } from '@shared/config/i18n';
import i18n from '@shared/config/i18n/i18n';
import { EProfile, ETranslation } from '@shared/config/i18n/i18nTranslations';
import { ROUTES } from '@shared/config/router';
import { getFromLS, setToLS } from '@shared/helpers/manageLocalStorage';
import { Breadcrumbs } from '@shared/ui/Breadcrumbs';
import { IBreadcrumbItem } from '@shared/ui/Breadcrumbs/model/breadcrumbsTypes';
import { Button } from '@shared/ui/Button';

import { ProfileSettingsMenu } from '../ProfileSettingsMenu/ProfileSettingsMenu';
import { ProfileUserInfo } from '../ProfileUserInfo/ProfileUserInfo';

import styles from './ProfilePage.module.scss';

const ProfilePage = () => {
  const [isOpen, setIsOpen] = useState(() => {
    const isOpenState = getFromLS('settingsMenu');
    return isOpenState ? isOpenState === 'true' : false;
  });

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

  const handleOpen = () => {
    setIsOpen((prev) => {
      const newState = !prev;
      setToLS('settingsMenu', newState.toString());
      return newState;
    });
  };

  return (
    <section className={clsx(styles.wrapper, { [styles['is-open']]: isOpen })}>
      <div className={styles.profile}>
        <div className={styles.top}>
          <Breadcrumbs links={links} />

          <Button
            size="lg"
            variant="secondary"
            prefix={<Settings />}
            onClick={handleOpen}
            className={styles['settings-button']}
          >
            {t(EProfile.SETTINGS_BUTTON)}
          </Button>
        </div>
        <h1 className={styles.title}>{t(EProfile.TITLE)}</h1>
        <ProfileUserInfo profile={profile} isLoading={isLoading} />
        <Link to={ROUTES.student.my_profile.edit.page} className={styles['edit-link']}>
          <SquarePen className={styles.icon} />
          <span className={styles.name}>{t(EProfile.EDIT_LINK)}</span>
        </Link>
      </div>

      {isOpen && <ProfileSettingsMenu handleOpen={handleOpen} email={profile?.email} />}
    </section>
  );
};

export default ProfilePage;
