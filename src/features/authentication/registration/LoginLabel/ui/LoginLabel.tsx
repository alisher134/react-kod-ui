import { Link } from 'react-router';

import { ROUTES } from '@shared/config/router';

import styles from './LoginLabel.module.scss';

export const LoginLabel = () => {
  return (
    <div className={styles.wrapper}>
      <Link to={ROUTES.auth.login.page} className={styles.action}>
        У меня уже есть аккаунт
      </Link>
    </div>
  );
};
