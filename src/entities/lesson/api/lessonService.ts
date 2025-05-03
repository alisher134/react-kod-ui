import { ICourseLesson } from '@entities/course/types/courseTypes';

import { axiosInstance, axiosPublic } from '@shared/api';
import { API_CONFIG } from '@shared/config/api';

import { IComment, ICommentBody, ILesson, ILessonComplete } from '../types/lessonTypes';

export const lessonService = {
  async getBySlug(slug: string) {
    return await axiosPublic.get<ILesson>(API_CONFIG.lesson.DEFAULT + `/${slug}`);
  },

  async getLessonsByCourseId(courseId: string) {
    return await axiosPublic.get<ICourseLesson[]>(
      API_CONFIG.course.DEFAULT + `/${courseId}/lessons`,
    );
  },

  async complete(data: ILessonComplete) {
    return await axiosInstance.put(API_CONFIG.progress.DEFAULT, data);
  },

  async leaveComment(data: ICommentBody, lessonId: string) {
    return await axiosInstance.post<IComment>(API_CONFIG.comment.DEFAULT + `/${lessonId}`, data);
  },
};
