import clsx from 'clsx';
import { TextareaHTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';

import styles from './Textarea.module.scss';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
  error?: FieldError;
}

export const Textarea = ({ className, error, ...props }: TextareaProps) => {
  return (
    <div className={clsx(styles.wrapper, className)}>
      <textarea className={styles.textarea} {...props}></textarea>
      {error && <span className={styles.error}>{error.message}</span>}
    </div>
  );
};
