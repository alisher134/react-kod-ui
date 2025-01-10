import { zodResolver } from '@hookform/resolvers/zod';
import { Eye, EyeClosed, KeyRound, Mail } from 'lucide-react';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';

import { ILoginFormValues, useAuth } from '@entities/auth';

import { I18Namespace } from '@shared/config/i18n';
import { EAuth } from '@shared/config/i18n/i18nTranslations';
import { ROUTES } from '@shared/config/router';
import { Button } from '@shared/ui/Button';
import { Input } from '@shared/ui/Input';

import { LoginSchema } from '../model/loginSchema';

import styles from './LoginForm.module.scss';

export const LoginForm = () => {
  const [isPasswordHidden, setIsPasswordHidden] = useState(false);

  const { login } = useAuth();
  const { t } = useTranslation(I18Namespace.auth);

  const navigate = useNavigate();

  const {
    register: registerInput,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormValues>({
    mode: 'onSubmit',
    resolver: zodResolver(LoginSchema),
  });

  const handleShowPassword = () => {
    setIsPasswordHidden((prev) => !prev);
  };

  const onLogin: SubmitHandler<ILoginFormValues> = async (data) => {
    await login(data);
    navigate(ROUTES.appRoute);
  };

  return (
    <form onSubmit={handleSubmit(onLogin)} className={styles.wrapper}>
      <span className={styles.title}>{t(EAuth.LOGIN_TITLE)}</span>

      <Input
        {...registerInput('email')}
        size="full"
        placeholder={t(EAuth.FORM_EMAIL_PLACEHOLDER)}
        prefix={<Mail size={22} />}
        error={errors.email}
      />

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

      <Button size="full">{t(EAuth.LOGIN_SUBMIT)}</Button>
    </form>
  );
};
