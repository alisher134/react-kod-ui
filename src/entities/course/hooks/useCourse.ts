import { useMutation, useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';

import { courseService } from '../api/courseService';

export const useCourse = () => {
  const params = useParams();
  const slug = params.slug ?? '';

  const { data: courses, isLoading: isCoursesPending } = useQuery({
    queryKey: ['catalog/course'],
    queryFn: () => courseService.getCatalog(),
    select: ({ data }) => data,
  });

  const { data: coursesPopular, isLoading: isPopularPending } = useQuery({
    queryKey: ['course/popular'],
    queryFn: () => courseService.getPopular(),
    select: ({ data }) => data,
  });

  const { data: coursesBySlug } = useQuery({
    queryKey: ['course/slug'],
    queryFn: () => courseService.getBySlug(slug),
    select: ({ data }) => data,
    enabled: !!slug,
  });

  const { data: courseLessons } = useQuery({
    queryKey: ['course/lessons'],
    queryFn: () => courseService.getLessons(coursesBySlug?.id ?? ''),
    select: ({ data }) => data,
    enabled: !!coursesBySlug?.id,
  });

  const { data: courseProgress } = useQuery({
    queryKey: ['course/progress'],
    queryFn: () => courseService.getProgress(coursesBySlug?.id ?? ''),
    select: ({ data }) => data,
    enabled: !!coursesBySlug?.id,
  });

  const viewsMutation = useMutation({
    mutationKey: ['course/views'],
    mutationFn: (courseId: string) => courseService.views(courseId),
  });

  return {
    courses,
    isCoursesPending,
    coursesBySlug,
    courseProgress,
    courseLessons,
    viewsMutation,
    coursesPopular,
    isPopularPending,
  };
};
