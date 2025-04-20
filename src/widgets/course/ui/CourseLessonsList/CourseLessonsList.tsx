import { Link } from 'react-router';

import { ICourseLesson } from '@entities/course/types/courseTypes';

import CheckIcon from '@shared/assets/icons/check.svg';
import { ROUTES } from '@shared/config/router';

import styles from './CourseLessonsList.module.scss';

export const CourseLessonsList = ({ lessons }: { lessons: ICourseLesson[] }) => {
  return (
    <div className={styles.lessons}>
      <div>
        <h3 className={styles.heading}>Уроки</h3>
      </div>

      <ul className={styles.list}>
        {lessons.map((lesson) => (
          <li className={styles.item}>
            <Link to={ROUTES.lesson.page + `/${lesson.slug}`} className={styles.link}>
              {lesson.userProgress.length ? (
                <img src={CheckIcon} />
              ) : (
                <span className={styles.badge}>{lesson.position}</span>
              )}
              <div className={styles.info}>
                <h3 className={styles.title}>{lesson.title}</h3>
                <p className={styles.description}>{lesson.description}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
