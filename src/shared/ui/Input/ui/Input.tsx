import clsx from 'clsx';
import React, { InputHTMLAttributes, forwardRef } from 'react';
import { FieldError } from 'react-hook-form';

import { TInputSize } from '../model/inputType';

import styles from './Input.module.scss';

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'prefix' | 'size'> {
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  error: FieldError | undefined;
  size: TInputSize;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, prefix, suffix, size, error, ...props }, ref) => {
    return (
      <div
        className={clsx(styles.wrapper, className, {
          [styles.full]: size === 'full',
        })}
      >
        {prefix && <span className={styles.prefix}>{prefix}</span>}

        <input type="text" ref={ref} className={styles.input} {...props} />
        {error && <span className={styles.error}>{error.message}</span>}

        {suffix && <span className={styles.suffix}>{suffix}</span>}
      </div>
    );
  },
);

Input.displayName = 'Input';
