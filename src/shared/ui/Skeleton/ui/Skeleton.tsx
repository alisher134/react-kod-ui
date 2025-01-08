import SkeletonLoader, { SkeletonProps } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export const Skeleton = ({ className, ...props }: SkeletonProps) => {
  return (
    <SkeletonLoader baseColor="#2e2d3d" highlightColor="#4d5064" className={className} {...props} />
  );
};
