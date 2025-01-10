import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';

import { I18Namespace } from '@shared/config/i18n';
import { EAuth } from '@shared/config/i18n/i18nTranslations';
import { ROUTES } from '@shared/config/router';

import styles from './LoginLabel.module.scss';

export const LoginLabel = () => {
  const { t } = useTranslation(I18Namespace.auth);

  return (
    <div className={styles.wrapper}>
      <Link to={ROUTES.auth.login.page} className={styles.action}>
        {t(EAuth.REGISTER_HAVE_ACCOUNT)}
      </Link>
    </div>
  );
};
