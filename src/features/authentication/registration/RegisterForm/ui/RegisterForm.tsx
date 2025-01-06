import { zodResolver } from '@hookform/resolvers/zod';
import { CircleUserRound, Eye, EyeClosed, KeyRound, Mail } from 'lucide-react';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { Button } from '@shared/ui/Button';
import { Input } from '@shared/ui/Input';

import { RegisterSchema } from '../model/registerSchema';
import { IRegisterFormData } from '../model/registerTypes';

import styles from './RegisterForm.module.scss';

export const RegisterForm = () => {
  const [isPasswordHidden, setIsPasswordHidden] = useState(false);

  const {
    register: registerInput,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterFormData>({
    mode: 'onSubmit',
    resolver: zodResolver(RegisterSchema),
  });

  const handleShowPassword = () => {
    setIsPasswordHidden((prev) => !prev);
  };

  const onRegister: SubmitHandler<IRegisterFormData> = (data) => {
    return data;
  };

  return (
    <form onSubmit={handleSubmit(onRegister)} className={styles.wrapper}>
      <span className={styles.title}>Создание аккаунта</span>

      <Input
        {...registerInput('email', { required: 'Email is required!' })}
        size="full"
        placeholder="Email"
        prefix={<Mail size={22} />}
        error={errors.email}
      />
      <Input
        {...registerInput('firstName', { required: 'FirstName is required!' })}
        size="full"
        placeholder="Имя"
        prefix={<CircleUserRound size={22} />}
        error={errors.firstName}
      />
      <Input
        {...registerInput('lastName', { required: 'LastName is required!' })}
        size="full"
        placeholder="Фамилия"
        prefix={<CircleUserRound size={22} />}
        error={errors.lastName}
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

      <Button size="full">Зарегистрироваться</Button>
    </form>
  );
};
