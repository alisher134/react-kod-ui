import { SquarePen } from 'lucide-react';
import { Link } from 'react-router';

import { EProfileRole, useProfile } from '@entities/profile';

import avatarIcon from '@shared/assets/icons/avatar.svg';
import { ROUTES } from '@shared/config/router';

import styles from './ProfilePage.module.scss';

const ProfilePage = () => {
  const { profile } = useProfile();

  return (
    <section className={styles.profile}>
      <div className={styles.container}>
        <h1 className={styles.title}>Мой профиль</h1>

        <div className={styles['user-info']}>
          <div className={styles.image}>
            <img src={profile?.avatarPath ?? avatarIcon} alt={profile?.firstName} />
          </div>

          <div className={styles.info}>
            <span className={styles.name}>{profile?.firstName + ' ' + profile?.lastName}</span>
            <span className={styles.email}>Email: {profile?.email}</span>
            <span className={styles.role}>
              {profile?.role === EProfileRole.USER ? 'Ученик' : 'Админ'}
            </span>
          </div>
        </div>

        <Link to={ROUTES.student.my_profile.edit.page} className={styles['edit-link']}>
          <SquarePen className={styles.icon} />
          <span className={styles.name}>Редактировать профиль</span>
        </Link>
      </div>
    </section>
  );
};

export default ProfilePage;
