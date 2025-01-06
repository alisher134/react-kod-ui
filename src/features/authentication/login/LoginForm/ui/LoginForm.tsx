import { zodResolver } from '@hookform/resolvers/zod';
import { Eye, EyeClosed, KeyRound, Mail } from 'lucide-react';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { Button } from '@shared/ui/Button';
import { Input } from '@shared/ui/Input';

import { LoginSchema } from '../model/loginSchema';
import { ILoginFormData } from '../model/loginTypes';

import styles from './LoginForm.module.scss';

export const LoginForm = () => {
  const [isPasswordHidden, setIsPasswordHidden] = useState(false);

  const {
    register: registerInput,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormData>({
    mode: 'onSubmit',
    resolver: zodResolver(LoginSchema),
  });

  const handleShowPassword = () => {
    setIsPasswordHidden((prev) => !prev);
  };

  const onLogin: SubmitHandler<ILoginFormData> = (data) => {
    return data;
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
