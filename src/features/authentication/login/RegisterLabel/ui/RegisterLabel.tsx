import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';

import { I18Namespace } from '@shared/config/i18n';
import { EAuth } from '@shared/config/i18n/i18nTranslations';
import { ROUTES } from '@shared/config/router';

import styles from './RegisterLabel.module.scss';

export const RegisterLabel = () => {
  const { t } = useTranslation(I18Namespace.auth);

  return (
    <div className={styles.wrapper}>
      <Link to={ROUTES.auth.restore.page} className={styles.action}>
        {t(EAuth.LOGIN_RESTORE)}
      </Link>
      <Link to={ROUTES.auth.register.page} className={styles.action}>
        {t(EAuth.LOGIN_REGISTRATION)}
      </Link>
    </div>
  );
};
