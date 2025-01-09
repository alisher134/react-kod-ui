import { useQuery } from '@tanstack/react-query';

import { profileService } from '../../api/profileService';

export const useProfile = () => {
  const { data: profile, isLoading } = useQuery({
    queryKey: ['profile'],
    queryFn: () => profileService.getProfile(),
    select: ({ data }) => data,
  });

  return { profile, isLoading };
};
