import { zodResolver } from '@hookform/resolvers/zod';
import { Eye, EyeClosed, KeyRound, Mail } from 'lucide-react';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';

import { ILoginFormValues, useAuth } from '@entities/auth';

import { ROUTES } from '@shared/config/router';
import { Button } from '@shared/ui/Button';
import { Input } from '@shared/ui/Input';

import { LoginSchema } from '../model/loginSchema';

import styles from './LoginForm.module.scss';

export const LoginForm = () => {
  const [isPasswordHidden, setIsPasswordHidden] = useState(false);

  const { login } = useAuth();
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
      <span className={styles.title}>Вход</span>

      <Input
        {...registerInput('email', { required: 'Email is required!' })}
        size="full"
        placeholder="Email"
        prefix={<Mail size={22} />}
        error={errors.email}
      />

      <Input
        {...registerInput('password', { required: 'Password is required!' })}
        size="full"
        type={isPasswordHidden ? 'text' : 'password'}
        placeholder="Пароль"
        prefix={<KeyRound size={22} />}
        suffix={
          <button type="button" onClick={handleShowPassword} className={styles.password}>
            {isPasswordHidden ? <Eye size={22} /> : <EyeClosed size={22} />}
          </button>
        }
        error={errors.password}
      />

      <Button size="full">Войти</Button>
    </form>
  );
};
