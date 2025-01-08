import { Skeleton } from '@shared/ui/Skeleton';

export const UserPreferencesSkeleton = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <Skeleton count={1} width={24} height={24} borderRadius={50} />
      <Skeleton count={1} width={100} height={20} borderRadius={5} />
    </div>
  );
};
