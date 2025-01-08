import { useQuery } from '@tanstack/react-query';

import { profileService } from '../../api/profileService';

export const useProfile = () => {
  const { data: profile, isPending } = useQuery({
    queryKey: ['user'],
    queryFn: () => profileService.getProfile(),
    select: ({ data }) => data,
  });

  return { profile, isPending };
};
