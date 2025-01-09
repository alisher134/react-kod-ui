import { QueryClient, useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import { errorHandler } from '@shared/utils';

import { editProfileService } from '../../api/editProfileService';
import { IEditProfileValues } from '../types/editProfileTypes';

export const useEditProfile = () => {
  const queryClient = new QueryClient();

  const { mutateAsync, isPending } = useMutation({
    mutationKey: ['edit my profile'],
    mutationFn: (data: IEditProfileValues) => editProfileService.editProfile(data),
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['profile'] });
      toast.success('Успешно сохранен');
    },
    onError(error) {
      toast.error(errorHandler(error));
    },
  });

  return { mutateAsync, isPending };
};
