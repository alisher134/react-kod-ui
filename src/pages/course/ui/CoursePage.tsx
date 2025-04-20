import { useEffect } from 'react';

import { CourseLessonsList } from '@widgets/course';

import { useAuth } from '@entities/auth';
import { useCourse } from '@entities/course/hooks/useCourse';

import { ProgressBar } from '@shared/ui/ProgressBar';

import styles from './CoursePage.module.scss';

const CoursePage = () => {
  const { coursesBySlug, courseProgress, courseLessons, viewsMutation } = useCourse();
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    if (coursesBySlug) viewsMutation.mutateAsync(coursesBySlug.id);
  }, [coursesBySlug]);

  return (
    <div className={styles.course}>
      <div className={styles.container}>
        <div className={styles.info}>
          <div className={styles.views}>{coursesBySlug?.views} просмотров</div>
          <h1 className={styles.title}>{coursesBySlug?.title}</h1>
          <p className={styles.description}>{coursesBySlug?.description}</p>
        </div>

        {isLoggedIn ? (
          <>
            <div className={styles.progress}>
              <ProgressBar
                currentCount={courseProgress?.completedLessons ?? 0}
                percentage={courseProgress?.progress ?? 0}
                totalCount={courseProgress?.totalLessons ?? 0}
              />
            </div>

            <div className={styles.bottom}>
              <CourseLessonsList lessons={courseLessons ?? []} />
              <div className={styles.information}>
                <h3 className={styles.title}>Информация</h3>
                <div>
                  <div>
                    <h4 className={styles.label}>Количество уроков</h4>
                    <p className={styles.value}>{courseProgress?.totalLessons} урока</p>
                  </div>
                  <div>
                    <h4 className={styles.label}>Ваш прогресс</h4>
                    <p className={styles.value}>{courseProgress?.progress}% завершено</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className={styles.attention}>
            Для прохождения курса авторизуйтесь или зарегистрируйтесь
          </div>
        )}
      </div>
    </div>
  );
};

export default CoursePage;
