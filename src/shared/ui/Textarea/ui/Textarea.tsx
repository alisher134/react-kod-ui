import clsx from 'clsx';
import { TextareaHTMLAttributes, forwardRef } from 'react';
import { FieldError } from 'react-hook-form';

import styles from './Textarea.module.scss';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
  error?: FieldError;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, value, ...props }, ref) => {
    return (
      <div className={clsx(styles.wrapper, className)}>
        <textarea ref={ref} className={styles.textarea} {...props}></textarea>
        {error && <span className={styles.error}>{error.message}</span>}
      </div>
    );
  },
);

Textarea.displayName = 'Textarea';
