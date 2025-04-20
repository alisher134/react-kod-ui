import { Skeleton } from '@shared/ui/Skeleton';

export const MyCourseListSkeleton = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px' }}>
      <Skeleton count={1} width={650} height={345} borderRadius={10} />
      <Skeleton count={1} width={650} height={345} borderRadius={10} />
      <Skeleton count={1} width={650} height={345} borderRadius={10} />
      <Skeleton count={1} width={650} height={345} borderRadius={10} />
    </div>
  );
};
