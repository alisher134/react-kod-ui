import { zodResolver } from '@hookform/resolvers/zod';
import { Eye, EyeClosed, KeyRound } from 'lucide-react';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate, useSearchParams } from 'react-router';

import { I18Namespace } from '@shared/config/i18n';
import { EAuth } from '@shared/config/i18n/i18nTranslations';
import { ROUTES } from '@shared/config/router';
import { Button } from '@shared/ui/Button';
import { Input } from '@shared/ui/Input';

import { useResetPassword } from '../../model/hooks/useResetPassword';
import { IResetPasswordFormValues } from '../../model/types/resetPasswordTypes';
import { ResetPasswordSchema } from '../../model/validation/resetPasswordSchema';

import styles from './ResetPasswordForm.module.scss';

export const ResetPasswordForm = () => {
  const [isPasswordHidden, setIsPasswordHidden] = useState(false);
  const [isPasswordConfirmHidden, setIsPasswordConfirmHidden] = useState(false);

  const { t } = useTranslation(I18Namespace.auth);

  const { resetPassword } = useResetPassword();

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token') ?? '';

  const {
    register: registerInput,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IResetPasswordFormValues>({
    mode: 'onSubmit',
    resolver: zodResolver(ResetPasswordSchema),
  });

  useEffect(() => {
    if (token) setValue('token', token);
  }, [token, setValue]);

  const handleShowPassword = () => {
    setIsPasswordHidden((prev) => !prev);
  };

  const handleShowPasswordConfirm = () => {
    setIsPasswordConfirmHidden((prev) => !prev);
  };

  const onResetPassword: SubmitHandler<IResetPasswordFormValues> = async (data) => {
    await resetPassword(data);
    navigate(ROUTES.appRoute);
  };

  return (
    <form onSubmit={handleSubmit(onResetPassword)} className={styles.wrapper}>
      <span className={styles.title}>{t(EAuth.RESET_TITLE)}</span>

      <Input
        {...registerInput('password')}
        size="full"
        type={isPasswordHidden ? 'text' : 'password'}
        placeholder={t(EAuth.FORM_PASSWORD_PLACEHOLDER)}
        prefix={<KeyRound size={22} />}
        suffix={
          <button type="button" onClick={handleShowPassword} className={styles.password}>
            {isPasswordHidden ? <Eye size={22} /> : <EyeClosed size={22} />}
          </button>
        }
        error={errors.password}
      />

      <Input
        {...registerInput('passwordConfirm')}
        size="full"
        type={isPasswordConfirmHidden ? 'text' : 'password'}
        placeholder={t(EAuth.FORM_PASSWORD_CONFIRM_PLACEHOLDER)}
        prefix={<KeyRound size={22} />}
        suffix={
          <button type="button" onClick={handleShowPasswordConfirm} className={styles.password}>
            {isPasswordConfirmHidden ? <Eye size={22} /> : <EyeClosed size={22} />}
          </button>
        }
        error={errors.passwordConfirm}
      />

      <Button size="full">{t(EAuth.RESET_SUBMIT)}</Button>
    </form>
  );
};
