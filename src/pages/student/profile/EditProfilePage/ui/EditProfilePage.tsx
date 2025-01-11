import { useTranslation } from 'react-i18next';

import { EditProfileForm } from '@features/profile/EditProfileForm';

import { I18Namespace } from '@shared/config/i18n';
import i18n from '@shared/config/i18n/i18n';
import { EProfile, ETranslation } from '@shared/config/i18n/i18nTranslations';
import { ROUTES } from '@shared/config/router';
import { Breadcrumbs } from '@shared/ui/Breadcrumbs';
import { IBreadcrumbItem } from '@shared/ui/Breadcrumbs/model/breadcrumbsTypes';

import styles from './EditProfilePage.module.scss';

const EditProfilePage = () => {
  const { t } = useTranslation(I18Namespace.profile);

  const links: IBreadcrumbItem[] = [
    { title: i18n.t(ETranslation.CRUMBS_KODPLUS), link: '/' },
    { title: i18n.t(ETranslation.CRUMBS_PROFILE), link: ROUTES.student.my_profile.page },
    {
      title: i18n.t(ETranslation.CRUMBS_PROFILE_EDIT),
      link: ROUTES.student.my_profile.page,
      isCurrent: true,
    },
  ];

  return (
    <section className={styles.profile}>
      <Breadcrumbs links={links} />
      <div className={styles.container}>
        <h1 className={styles.title}>{t(EProfile.TITLE)}</h1>

        <EditProfileForm />
      </div>
    </section>
  );
};

export default EditProfilePage;
