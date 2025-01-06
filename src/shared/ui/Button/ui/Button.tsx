import clsx from 'clsx';
import { ButtonHTMLAttributes } from 'react';

import { TButtonSize, TButtonVariant } from '../model/buttonTypes';

import styles from './Button.module.scss';

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'prefix'> {
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  variant?: TButtonVariant;
  size: TButtonSize;
}

export const Button = ({
  children,
  className,
  prefix,
  suffix,
  size,
  variant = 'primary',
  ...props
}: ButtonProps) => {
  return (
    <button className={clsx(styles.button, className, styles[size], styles[variant])} {...props}>
      {children}
    </button>
  );
};
