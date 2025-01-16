import clsx from 'clsx';

import avatarIcon from '@shared/assets/icons/avatar.svg';
import { Skeleton } from '@shared/ui/Skeleton';

import styles from './UserInfo.module.scss';

interface UserInfoProps {
  firstName?: string;
  avatarPath?: string | null;
  isLoading: boolean;
  isCollapsed: boolean;
}

export const UserInfo = ({ firstName, avatarPath, isLoading, isCollapsed }: UserInfoProps) => {
  return (
    <div className={clsx(styles['user-info'], { [styles['is-collapsed']]: isCollapsed })}>
      {isLoading ? (
        <div className={styles.skeleton}>
          <Skeleton
            count={1}
            width={72}
            height={72}
            borderRadius={'50%'}
            className={styles.avatar}
          />
          <Skeleton count={1} width={70} height={20} className={styles.text} />
        </div>
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
