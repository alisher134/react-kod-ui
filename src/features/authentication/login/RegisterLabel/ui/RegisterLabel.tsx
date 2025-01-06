import { Link } from 'react-router';

import { ROUTES } from '@shared/config/router';

import styles from './RegisterLabel.module.scss';

export const RegisterLabel = () => {
  return (
    <div className={styles.wrapper}>
      <Link to={ROUTES.auth.restore.page} className={styles.action}>
        Восстановить пароль
      </Link>
      <Link to={ROUTES.auth.register.page} className={styles.action}>
        Регистрация
      </Link>
    </div>
  );
};
