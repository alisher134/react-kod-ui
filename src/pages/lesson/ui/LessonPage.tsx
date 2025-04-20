import KinescopePlayer from '@kinescope/react-kinescope-player';
import { Check, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

import { useLesson } from '@entities/lesson/hooks/useLesson';

import { Button } from '@shared/ui/Button';
import { Player } from '@shared/ui/Player/ui/Player';

import styles from './LessonPage.module.scss';

const LessonPage = () => {
  const { lessonBySlug, lessonCompleteMutate } = useLesson();
  const playerRef = useRef<KinescopePlayer | null>(null);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  useEffect(() => {
    if (lessonBySlug?.userProgress?.[0]) {
      setIsCompleted(lessonBySlug.userProgress[0].isCompleted);
    }
  }, [lessonBySlug]);

  const handleComplete = async () => {
    lessonCompleteMutate({ isCompleted: true, lessonId: lessonBySlug?.id ?? '' });
    setIsCompleted(true);
  };

  const handleCancel = async () => {
    lessonCompleteMutate({ isCompleted: false, lessonId: lessonBySlug?.id ?? '' });
    setIsCompleted(false);
  };

  return (
    <div className={styles.lesson}>
      <div className={styles.info}>
        <div className={styles.action}>
          <h1>{lessonBySlug?.title}</h1>

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
        <p>{lessonBySlug?.description}</p>
      </div>

      <Player height={700} ref={playerRef} videoId={lessonBySlug?.lessonUrl ?? ''} />
    </div>
  );
};

export default LessonPage;
