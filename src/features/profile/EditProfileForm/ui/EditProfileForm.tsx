import { zodResolver } from '@hookform/resolvers/zod';
import { CircleUserRound } from 'lucide-react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';

import { useProfile } from '@entities/profile';

import { I18Namespace } from '@shared/config/i18n';
import { EProfile } from '@shared/config/i18n/i18nTranslations';
import { ROUTES } from '@shared/config/router';
import { Button } from '@shared/ui/Button';
import { ImageUploader } from '@shared/ui/ImageUploader';
import { Input } from '@shared/ui/Input';
import { Textarea } from '@shared/ui/Textarea';

import { useEditProfile } from '../model/hooks/useEditProfile';
import { EditProfileSchema } from '../model/schema/editProfileSchema';
import { IEditProfileValues } from '../model/types/editProfileTypes';

import styles from './EditProfileForm.module.scss';

export const EditProfileForm = () => {
  const navigate = useNavigate();
  const { profile } = useProfile();
  const { t } = useTranslation(I18Namespace.profile);

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
              {...register('firstName')}
              error={errors.firstName}
              placeholder={t(EProfile.FORM_FIRST_NAME_PLACEHOLDER)}
              prefix={<CircleUserRound size={22} />}
              size="full"
              className={styles.firstName}
            />

            <Input
              {...register('lastName')}
              error={errors.lastName}
              prefix={<CircleUserRound size={22} />}
              placeholder={t(EProfile.FORM_LAST_NAME_PLACEHOLDER)}
              size="full"
              className={styles.lastName}
            />
          </div>
        </div>
        <Textarea
          {...register('description')}
          placeholder={t(EProfile.FORM_DESCRIPTION_PLACEHOLDER)}
          error={errors.description}
          className={styles.description}
        />
      </div>

      <div className={styles.buttons}>
        <Button type="submit">{t(EProfile.SUBMIT)}</Button>
        <Button type="button" variant="secondary" onClick={onCancel}>
          {t(EProfile.CANCEL)}
        </Button>
      </div>
    </form>
  );
};
