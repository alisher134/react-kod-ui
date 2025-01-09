import { SquarePen } from 'lucide-react';
import { Link } from 'react-router';

import { useProfile } from '@entities/profile';

import { ROUTES } from '@shared/config/router';

import { ProfileUserInfo } from '../ProfileUserInfo/ProfileUserInfo';

import styles from './ProfilePage.module.scss';

const ProfilePage = () => {
  const { profile, isLoading } = useProfile();

  return (
    <section className={styles.profile}>
      <div className={styles.container}>
        <h1 className={styles.title}>Мой профиль</h1>

        <ProfileUserInfo profile={profile} isLoading={isLoading} />

        <Link to={ROUTES.student.my_profile.edit.page} className={styles['edit-link']}>
          <SquarePen className={styles.icon} />
          <span className={styles.name}>Редактировать профиль</span>
        </Link>
      </div>
    </section>
  );
};

export default ProfilePage;
