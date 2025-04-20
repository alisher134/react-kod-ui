export interface ICourse {
  id: string;
  slug: string;
  title: string;
  description: string;
  thumbnail: string;
  lessons: ICourseLesson[];
  views: number;
}

export interface ICourseLesson {
  title: string;
  slug: string;
  description: string;
  position: number;
  lessonUrl: string;
  userProgress: IUserProgress[];
}

export interface IProgress {
  totalLessons: number;
  completedLessons: number;
  progress: number;
}

export interface IUserProgress {
  isCompleted: true;
}
