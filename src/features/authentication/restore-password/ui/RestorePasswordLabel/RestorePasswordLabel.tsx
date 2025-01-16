import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';

import { I18Namespace } from '@shared/config/i18n';
import { EAuth } from '@shared/config/i18n/i18nTranslations';
import { ROUTES } from '@shared/config/router';

import styles from './RestorePasswordLabel.module.scss';

export const RestorePasswordLabel = () => {
  const { t } = useTranslation(I18Namespace.auth);

  return (
    <div className={styles.wrapper}>
      <Link to={ROUTES.auth.login.page} className={styles.action}>
        {t(EAuth.RESTORE_SIGN_IN)}
      </Link>
      <Link to={ROUTES.auth.register.page} className={styles.action}>
        {t(EAuth.RESTORE_REGISTRATION)}
      </Link>
    </div>
  );
};
