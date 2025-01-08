import clsx from 'clsx';
import { Link } from 'react-router';

import icon from '@shared/assets/images/logoImg.png';
import { ROUTES } from '@shared/config/router';
import { APP_NAME } from '@shared/constants';

import styles from './Logo.module.scss';

interface LogoProps {
  className?: string;
  size?: 'md' | 'sm';
}

export const Logo = ({ className, size = 'md' }: LogoProps) => {
  return (
    <Link to={ROUTES.appRoute} className={clsx(styles.logo, className, styles[size])}>
      <img src={icon} alt="logo" className={styles.img} />
      <span className={styles.name}>{APP_NAME}</span>
    </Link>
  );
};
