import { useTranslation } from 'react-i18next';

import { EditProfileForm } from '@features/profile/EditProfileForm';

import { I18Namespace } from '@shared/config/i18n';
import { EProfile } from '@shared/config/i18n/i18nTranslations';

import styles from './EditProfilePage.module.scss';

const EditProfilePage = () => {
  const { t } = useTranslation(I18Namespace.profile);

  return (
    <section className={styles.profile}>
      <div className={styles.container}>
        <h1 className={styles.title}>{t(EProfile.TITLE)}</h1>

        <EditProfileForm />
      </div>
    </section>
  );
};

export default EditProfilePage;
