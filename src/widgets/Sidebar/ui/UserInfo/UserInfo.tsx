import Skeleton from 'react-loading-skeleton';

import avatarIcon from '@shared/assets/icons/avatar.svg';

import styles from './UserInfo.module.scss';

interface UserInfoProps {
  firstName?: string;
  avatarPath?: string | null;
  isLoading: boolean;
}

export const UserInfo = ({ firstName, avatarPath, isLoading }: UserInfoProps) => {
  return (
    <div className={styles['user-info']}>
      {isLoading ? (
        <>
          <Skeleton count={1} width={72} height={72} borderRadius={'50%'} />
          <Skeleton count={1} width={70} height={20} />
        </>
      ) : (
        <>
          <div className={styles.image}>
            <img src={avatarPath ?? avatarIcon} alt={firstName} className={styles.avatar} />
          </div>
          <div className={styles.name}>{firstName}</div>
        </>
      )}
    </div>
  );
};
