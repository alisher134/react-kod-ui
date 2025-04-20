import { IUserProgress } from '@entities/course/types/courseTypes';

export interface ILesson {
  id: string;
  createdAt: string;
  title: string;
  slug: string;
  description: string;
  position: 1;
  lessonUrl: string;
  courseId: string;
  course: {
    id: string;
    createdAt: string;
    title: string;
    slug: string;
    description: string;
    views: number;
  };
  userProgress: IUserProgress[];
}

export interface ILessonComplete {
  isCompleted: boolean;
  lessonId: string;
}
