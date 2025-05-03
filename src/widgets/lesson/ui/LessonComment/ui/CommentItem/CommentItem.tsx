import { IComment } from '@entities/lesson/types/lessonTypes';

import styles from './CommentItem.module.scss';

export const CommentItem = ({ item }: { item: IComment }) => {
  const commentDate = new Date(item.createdAt);
  const formattedDate = commentDate.toLocaleDateString('ru-RU');

  return (
    <li className={styles.item}>
      <img src={item.user.avatarPath} alt={item.user.firstName} className={styles.avatar} />

      <div className={styles.container}>
        <div className={styles.info}>
          <p className={styles.name}>
            {item.user?.firstName} {item.user?.lastName}
          </p>
          <span className={styles.date}>{formattedDate}</span>
        </div>
        <p className={styles.text}>{item.text}</p>
      </div>
    </li>
  );
};
