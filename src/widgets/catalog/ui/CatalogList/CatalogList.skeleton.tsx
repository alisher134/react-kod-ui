import { Skeleton } from '@shared/ui/Skeleton';

export const CatalogListSkeleton = () => {
  return (
    <>
      <Skeleton count={1} width={240} height={290} borderRadius={10} />
      <Skeleton count={1} width={240} height={290} borderRadius={10} />
      <Skeleton count={1} width={240} height={290} borderRadius={10} />
      <Skeleton count={1} width={240} height={290} borderRadius={10} />
    </>
  );
};
