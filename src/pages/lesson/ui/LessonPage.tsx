import KinescopePlayer from '@kinescope/react-kinescope-player';
import { Check, X } from 'lucide-react';
import { useRef } from 'react';

import { CommentList } from '@widgets/lesson/ui/LessonComment';
import { AddComment } from '@widgets/lesson/ui/LessonComment/ui/AddComment/AddComment';

import { useLesson } from '@entities/lesson/hooks/useLesson';

import { Button } from '@shared/ui/Button';
import { Player } from '@shared/ui/Player/ui/Player';

import styles from './LessonPage.module.scss';

const LessonPage = () => {
  const { lessonBySlug, lessonCompleteMutate, isLoading } = useLesson();

  const playerRef = useRef<KinescopePlayer | null>(null);
  // const [isCompleted, setIsCompleted] = useState<boolean>(false);

  // const isCompleted = lessonBySlug?.userProgress.some((progress) => progress.isCompleted) ?? false;
  if (!lessonBySlug) return null;

  const isCompleted = lessonBySlug?.userProgress?.[0]?.isCompleted ?? false;

  const handleComplete = async () => {
    lessonCompleteMutate({ isCompleted: true, lessonId: lessonBySlug?.id ?? '' });
    // setIsCompleted(true);
  };

  const handleCancel = async () => {
    lessonCompleteMutate({ isCompleted: false, lessonId: lessonBySlug?.id ?? '' });
    // setIsCompleted(false);
  };

  return (
    <div className={styles.lesson}>
      <div className={styles.info}>
        <div className={styles.action}>
          <h1>
            {lessonBySlug?.position}. {lessonBySlug?.title}
          </h1>

          {isCompleted ? (
            <Button variant="secondary" prefix={<X />} onClick={handleCancel}>
              Отменить
            </Button>
          ) : (
            <Button prefix={<Check />} onClick={handleComplete}>
              Просмотрено
            </Button>
          )}
        </div>
      </div>

      <Player height={550} ref={playerRef} videoId={lessonBySlug?.lessonUrl ?? ''} />

      <div>
        <p className={styles.description}>{lessonBySlug?.description}</p>
      </div>

      <div className={styles.comment}>
        <CommentList list={lessonBySlug?.comments ?? []} isLoading={isLoading} />

        <AddComment />
      </div>
    </div>
  );
};

export default LessonPage;
