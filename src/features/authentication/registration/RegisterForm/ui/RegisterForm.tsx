import { zodResolver } from '@hookform/resolvers/zod';
import { CircleUserRound, Eye, EyeClosed, KeyRound, Mail } from 'lucide-react';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';

import { IRegisterFormValues, useAuth } from '@entities/auth';

import { I18Namespace } from '@shared/config/i18n';
import { EAuth } from '@shared/config/i18n/i18nTranslations';
import { ROUTES } from '@shared/config/router';
import { Button } from '@shared/ui/Button';
import { Input } from '@shared/ui/Input';

import { RegisterSchema } from '../model/registerSchema';

import styles from './RegisterForm.module.scss';

export const RegisterForm = () => {
  const [isPasswordHidden, setIsPasswordHidden] = useState(false);

  const navigate = useNavigate();
  const { register } = useAuth();
  const { t } = useTranslation(I18Namespace.auth);

  const {
    register: registerInput,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterFormValues>({
    mode: 'onSubmit',
    resolver: zodResolver(RegisterSchema),
  });

  const handleShowPassword = () => {
    setIsPasswordHidden((prev) => !prev);
  };

  const onRegister: SubmitHandler<IRegisterFormValues> = async (data) => {
    await register(data);
    navigate(ROUTES.appRoute);
  };

  return (
    <form onSubmit={handleSubmit(onRegister)} className={styles.wrapper}>
      <span className={styles.title}>{t(EAuth.REGISTER_TITLE)}</span>

      <Input
        {...registerInput('email', { required: 'Email is required!' })}
        size="full"
        placeholder={t(EAuth.FORM_EMAIL_PLACEHOLDER)}
        prefix={<Mail size={22} />}
        error={errors.email}
      />
      <Input
        {...registerInput('firstName', { required: 'FirstName is required!' })}
        size="full"
        placeholder={t(EAuth.FORM_FIRST_NAME_PLACEHOLDER)}
        prefix={<CircleUserRound size={22} />}
        error={errors.firstName}
      />
      <Input
        {...registerInput('lastName', { required: 'LastName is required!' })}
        size="full"
        placeholder={t(EAuth.FORM_LAST_NAME_PLACEHOLDER)}
        prefix={<CircleUserRound size={22} />}
        error={errors.lastName}
      />
      <Input
        {...registerInput('password', { required: 'Password is required!' })}
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

      <Button size="full">{t(EAuth.REGISTER_SUBMIT)}</Button>
    </form>
  );
};
