/* eslint-disable @typescript-eslint/no-explicit-any */
import clsx from 'clsx';
import { Image, Upload } from 'lucide-react';
import { ChangeEvent, forwardRef, useCallback } from 'react';
import { FieldError } from 'react-hook-form';

import { useFileUpload } from '@entities/file-upload';

import styles from './ImageUploader.module.scss';

interface ImageUploaderProps {
  className?: string;
  error?: FieldError;
  image?: string | null;
  onChange: (...event: any[]) => void;
}

export const ImageUploader = forwardRef<HTMLInputElement, ImageUploaderProps>(
  ({ className, error, image, onChange }, ref) => {
    const { mutateAsync } = useFileUpload();

    const onUpload = useCallback(
      async (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;

        if (files?.length) {
          const formData = new FormData();
          formData.append('media', files[0]);

          const { data } = await mutateAsync(formData);
          onChange(data?.url);
        }
      },
      [mutateAsync, onChange],
    );

    return (
      <div className={clsx(styles.wrapper, className)}>
        {image ? (
          <img src={image} alt="preview" className={styles.icon} />
        ) : (
          <Image className={styles.icon} />
        )}

        <label className={styles.uploader}>
          <div className={styles.placeholder}>
            <Upload />
            <span>Загрузить</span>
          </div>
          <input accept="image/*" onChange={onUpload} ref={ref} type="file" />
          {error && <span>{error.message}</span>}
        </label>
      </div>
    );
  },
);

ImageUploader.displayName = 'ImageUploader';
