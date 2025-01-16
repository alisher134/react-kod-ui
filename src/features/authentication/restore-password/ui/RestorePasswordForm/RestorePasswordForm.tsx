import { zodResolver } from '@hookform/resolvers/zod';
import { Mail } from 'lucide-react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { I18Namespace } from '@shared/config/i18n';
import { EAuth } from '@shared/config/i18n/i18nTranslations';
import { Button } from '@shared/ui/Button';
import { Input } from '@shared/ui/Input';

import { useRestorePassword } from '../../model/hooks/useRestorePassword';
import { IRestorePasswordFormValues } from '../../model/types/restorePasswordTypes';
import { RestorePasswordSchema } from '../../model/validation/restorePasswordSchema';

import styles from './RestorePasswordForm.module.scss';

export const RestorePasswordForm = () => {
  const { t } = useTranslation(I18Namespace.auth);

  const { restorePassword } = useRestorePassword();

  const {
    register: registerInput,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IRestorePasswordFormValues>({
    mode: 'onSubmit',
    resolver: zodResolver(RestorePasswordSchema),
  });

  const onRestorePassword: SubmitHandler<IRestorePasswordFormValues> = async (data) => {
    await restorePassword(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onRestorePassword)} className={styles.wrapper}>
      <span className={styles.title}>{t(EAuth.RESTORE_TITLE)}</span>

      <Input
        {...registerInput('email')}
        size="full"
        placeholder={t(EAuth.FORM_EMAIL_PLACEHOLDER)}
        prefix={<Mail size={22} />}
        error={errors.email}
      />

      <Button size="full">{t(EAuth.RESTORE_SUBMIT)}</Button>
    </form>
  );
};
