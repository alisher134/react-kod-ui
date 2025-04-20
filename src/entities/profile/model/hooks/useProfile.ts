import { useQuery } from '@tanstack/react-query';

import { ETokens } from '@shared/constants';
import { getFromCookie } from '@shared/helpers/manageCookie';

import { profileService } from '../../api/profileService';

export const useProfile = () => {
  const accessToken = getFromCookie(ETokens.ACCESS_TOKEN);

  const { data: profile, isLoading } = useQuery({
    queryKey: ['profile'],
    queryFn: () => profileService.getProfile(),
    select: ({ data }) => data.profile,
    enabled: !!accessToken,
  });

  const { data: progress, isLoading: isProgressLoading } = useQuery({
    queryKey: ['me/progress'],
    queryFn: () => profileService.meProgress(),
    select: ({ data }) => data,
    enabled: !!accessToken,
  });

  return { profile, isLoading, progress, isProgressLoading };
};
