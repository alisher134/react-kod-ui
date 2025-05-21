import clsx from 'clsx';
import { Link, useParams } from 'react-router';

import { Logo } from '@widgets/Logo';

import { useLesson } from '@entities/lesson/hooks/useLesson';

import PlayIcon from '@shared/assets/icons/play.svg';
import { ROUTES } from '@shared/config/router';
import { ProgressBar } from '@shared/ui/ProgressBar';

import styles from './LessonSidebar.module.scss';

export const LessonSidebar = () => {
  const { courseLessons, courseProgress, courseTitle } = useLesson();
  const params = useParams();

  return (
    <aside className={styles.sidebar}>
      <div className={styles.top}>
        <Logo className={styles.logo} />
      </div>

      <div className={styles.info}>
        <h3 className={styles.title}>{courseTitle}</h3>
        <ProgressBar
          totalCount={courseProgress?.totalLessons ?? 0}
          currentCount={courseProgress?.completedLessons ?? 0}
          percentage={courseProgress?.progress ?? 0}
          className={styles.progress}
        />
      </div>

      <div className={styles.lessons}>
        <ul className={styles.list}>
          {courseLessons?.map((lesson) => (
            <li
              key={lesson.slug}
              className={clsx(styles.item, {
                [styles.active]: params.slug === lesson.slug,
                [styles.complete]: lesson?.userProgress?.[0]?.isCompleted,
              })}
            >
              <Link to={ROUTES.lesson.page + `/${lesson.slug}`} className={styles.link}>
                <img src={PlayIcon} alt="play" />
                <span>{lesson.position}.</span>
                {lesson.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};
