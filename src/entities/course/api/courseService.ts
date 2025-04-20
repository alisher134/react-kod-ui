import { axiosInstance, axiosPublic } from '@shared/api';
import { API_CONFIG } from '@shared/config/api';

import { ICourse, ICourseLesson, IProgress } from '../types/courseTypes';

export const courseService = {
  async getCatalog() {
    return await axiosPublic.get<ICourse[]>(API_CONFIG.course.DEFAULT);
  },

  async getBySlug(slug: string) {
    return await axiosPublic.get<ICourse>(API_CONFIG.course.DEFAULT + `/${slug}`);
  },

  async views(courseId: string) {
    return await axiosPublic.patch(API_CONFIG.course.DEFAULT + `/${courseId}/views`);
  },

  async getLessons(courseId: string) {
    return await axiosPublic.get<ICourseLesson[]>(
      API_CONFIG.course.DEFAULT + `/${courseId}/lessons`,
    );
  },

  async getProgress(courseId: string) {
    return await axiosInstance.get<IProgress>(API_CONFIG.lesson.DEFAULT + `/${courseId}/progress`);
  },
};
