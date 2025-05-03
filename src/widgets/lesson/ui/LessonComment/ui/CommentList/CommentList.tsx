import { IComment } from '@entities/lesson/types/lessonTypes';

import { CommentItem } from '../CommentItem/CommentItem';
import { CommentItemSkeleton } from '../CommentItem/CommentItem.skeleton';

import styles from './CommentList.module.scss';

interface CommentListProps {
  list: IComment[];
  isLoading: boolean;
}

export const CommentList = ({ list, isLoading }: CommentListProps) => {
  return (
    <ul className={styles.list}>
      {isLoading ? (
        <CommentItemSkeleton />
      ) : (
        list.map((item) => <CommentItem item={item} key={item.id} />)
      )}
    </ul>
  );
};
