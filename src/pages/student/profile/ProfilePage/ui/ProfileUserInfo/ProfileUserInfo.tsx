import { EProfileRole, IProfile } from '@entities/profile';

import avatarIcon from '@shared/assets/icons/avatar.svg';
import { Skeleton } from '@shared/ui/Skeleton';

import styles from './ProfileUserInfo.module.scss';

interface ProfileUserInfoProps {
  profile?: IProfile;
  isLoading: boolean;
}

export const ProfileUserInfo = ({ profile, isLoading }: ProfileUserInfoProps) => {
  return isLoading ? (
    <>
      <div className={styles.skeleton}>
        <Skeleton count={1} width={112} height={112} borderRadius={'50%'} />
        <Skeleton count={3} width={300} height={20} className={styles.item} />
      </div>
      <Skeleton count={1} width={400} height={20} style={{ marginBottom: '12px' }} />
    </>
  ) : (
    <>
      <div className={styles['user-info']}>
        <div className={styles.image}>
          <img
            src={profile?.avatarPath ?? avatarIcon}
            alt={profile?.firstName}
            className={styles.avatar}
          />
        </div>

        <div className={styles.info}>
          <span className={styles.name}>{profile?.firstName + ' ' + profile?.lastName}</span>
          <span className={styles.email}>Email: {profile?.email}</span>
          <span className={styles.role}>
            {profile?.role === EProfileRole.STUDENT ? 'Ученик' : 'Админ'}
          </span>
        </div>
      </div>
      <p className={styles.description}>{profile?.description}</p>
    </>
  );
};
