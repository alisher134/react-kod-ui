import { zodResolver } from '@hookform/resolvers/zod';
import { CircleUserRound } from 'lucide-react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';

import { useProfile } from '@entities/profile';

import { ROUTES } from '@shared/config/router';
import { Button } from '@shared/ui/Button';
import { ImageUploader } from '@shared/ui/ImageUploader';
import { Input } from '@shared/ui/Input';

import { useEditProfile } from '../model/hooks/useEditProfile';
import { EditProfileSchema } from '../model/schema/editProfileSchema';
import { IEditProfileValues } from '../model/types/editProfileTypes';

import styles from './EditProfileForm.module.scss';

export const EditProfileForm = () => {
  const navigate = useNavigate();
  const { profile } = useProfile();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IEditProfileValues>({
    resolver: zodResolver(EditProfileSchema),
    mode: 'onSubmit',
    defaultValues: {
      firstName: profile?.firstName,
      lastName: profile?.lastName,
      description: profile?.description,
      avatarPath: profile?.avatarPath,
    },
  });

  const { mutateAsync } = useEditProfile();

  const onSave: SubmitHandler<IEditProfileValues> = async (data) => {
    await mutateAsync(data);
    navigate(ROUTES.student.my_profile.page);
  };

  const onCancel = () => {
    navigate(ROUTES.student.my_profile.page);
  };

  return (
    <form onSubmit={handleSubmit(onSave)} className={styles.form}>
      <div className={styles.container}>
        <div className={styles.top}>
          <Controller
            name="avatarPath"
            control={control}
            render={({ field: { value, onChange } }) => (
              <ImageUploader
                error={errors.avatarPath}
                onChange={onChange}
                image={value}
                className={styles.upload}
              />
            )}
          />

          <div className={styles.name}>
            <Input
              {...register('firstName', { required: 'firstName is required' })}
              error={errors.firstName}
              placeholder="Имя"
              prefix={<CircleUserRound size={22} />}
              size="full"
              className={styles.firstName}
            />

            <Input
              {...register('lastName', { required: 'lastName is required' })}
              error={errors.lastName}
              prefix={<CircleUserRound size={22} />}
              placeholder="Фамилия"
              size="full"
              className={styles.lastName}
            />
          </div>
        </div>
        {/* TODO:Вместо Input сделать для description Textarea */}
        <Input
          {...register('description', { required: 'description is required' })}
          error={errors.description}
          placeholder="о себе"
          size="full"
          className={styles.description}
        />
      </div>

      <div className={styles.buttons}>
        <Button type="submit">Сохранить</Button>
        <Button type="button" variant="secondary" onClick={onCancel}>
          Отменить
        </Button>
      </div>
    </form>
  );
};
