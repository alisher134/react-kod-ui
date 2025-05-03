import { SubmitHandler, useForm } from 'react-hook-form';

import { useLesson } from '@entities/lesson/hooks/useLesson';
import { ICommentBody } from '@entities/lesson/types/lessonTypes';

import { Button } from '@shared/ui/Button';
import { Textarea } from '@shared/ui/Textarea';

import styles from './AddComment.module.scss';

export const AddComment = () => {
  const { lessonComment } = useLesson();

  const { register: registerInput, handleSubmit } = useForm<ICommentBody>({ mode: 'onSubmit' });

  const onSubmit: SubmitHandler<ICommentBody> = (data) => {
    lessonComment(data);
  };

  return (
    <div className={styles.comment}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <Textarea {...registerInput('text')} placeholder="Введите сообщение" />

        <div className={styles.button}>
          <Button variant="secondary" size="lg">
            Отправить комментарий
          </Button>
        </div>
      </form>
    </div>
  );
};
