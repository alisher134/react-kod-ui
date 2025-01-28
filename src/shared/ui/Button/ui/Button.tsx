import clsx from 'clsx';

import { ButtonType, TButtonSize, TButtonVariant } from '../model/buttonTypes';

import styles from './Button.module.scss';

interface ButtonProps extends ButtonType {
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  variant?: TButtonVariant;
  size?: TButtonSize;
  isLink?: boolean;
}

export const Button = ({
  children,
  className,
  prefix,
  suffix,
  size = 'sm',
  variant = 'primary',
  isLink = false,
  ...props
}: ButtonProps) => {
  if (isLink)
    return (
      <a className={clsx(styles.button, styles[size], styles[variant], className)} {...props}>
        {prefix && <span className={styles.icon}>{prefix}</span>}
        {children}
        {suffix && <span className={styles.icon}>{suffix}</span>}
      </a>
    );

  return (
    <button className={clsx(styles.button, styles[size], styles[variant], className)} {...props}>
      {prefix && <span className={styles.icon}>{prefix}</span>}
      {children}
      {suffix && <span className={styles.icon}>{suffix}</span>}
    </button>
  );
};
