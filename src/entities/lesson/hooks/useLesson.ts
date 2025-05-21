import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useParams } from 'react-router';

import { courseService } from '@entities/course/api/courseService';

import { lessonService } from '../api/lessonService';
import { ICommentBody, ILessonComplete } from '../types/lessonTypes';

export const useLesson = () => {
  const params = useParams();
  const slug = params.slug ?? '';
  const queryClient = useQueryClient();

  const { data: lessonBySlug, isLoading } = useQuery({
    queryKey: ['course/slug', slug],
    queryFn: () => lessonService.getBySlug(slug),
    select: ({ data }) => data,
    enabled: !!slug,
  });

  const courseId = lessonBySlug?.courseId ?? '';
  const courseTitle = lessonBySlug?.course.title ?? '';

  const { data: courseLessons } = useQuery({
    queryKey: ['course/lessons', courseId],
    queryFn: () => lessonService.getLessonsByCourseId(courseId),
    select: ({ data }) => data,
    enabled: !!courseId,
  });

  const { data: courseProgress } = useQuery({
    queryKey: ['course/progress', courseId],
    queryFn: () => courseService.getProgress(courseId),
    select: ({ data }) => data,
    enabled: !!courseId,
  });

  const { mutateAsync: lessonCompleteMutate } = useMutation({
    mutationKey: ['lesson/progress'],
    mutationFn: (data: ILessonComplete) => lessonService.complete(data),
    onSuccess: () => {
      if (courseId) {
        queryClient.invalidateQueries({ queryKey: ['course/progress', courseId] });
        queryClient.invalidateQueries({ queryKey: ['course/lessons', courseId] });
        queryClient.invalidateQueries({ queryKey: ['course/slug', slug] });
      }
    },
  });

  const { mutateAsync: lessonComment } = useMutation({
    mutationKey: ['lesson/comment'],
    mutationFn: (data: ICommentBody) => lessonService.leaveComment(data, lessonBySlug?.id ?? ''),
    onSuccess() {
      toast.success('Комментарий успешно опубликован');
      queryClient.invalidateQueries({ queryKey: ['course/slug', slug] });
    },
    onError() {
      toast.error(
        'Комментарий успешно опубликованНе удалось отправить комментарий. Попробуй ещё раз.',
      );
    },
  });

  return {
    lessonBySlug,
    courseLessons,
    courseProgress,
    courseTitle,
    lessonCompleteMutate,
    isLoading,
    lessonComment,
  };
};
