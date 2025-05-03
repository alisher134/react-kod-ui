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
  comments: IComment[];
  userProgress: IUserProgress[];
}

export interface IComment {
  id: string;
  createdAt: string;
  text: string;
  user: ICommentUser;
}

export interface ICommentBody {
  text: string;
}

export interface ICommentUser {
  id: string;
  avatarPath: string;
  firstName: string;
  lastName: string;
}

export interface ILessonComplete {
  isCompleted: boolean;
  lessonId: string;
}
