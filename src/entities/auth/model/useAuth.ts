import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import { saveToCookie } from '@shared/helpers/manageCookie/manageCookie';
import { errorHandler } from '@shared/utils';

import { authService } from '../api/authService';

import { ETokens } from './authConstants';
import { ILoginFormValues, IRegisterFormValues } from './authTypes';

export const useAuth = () => {
  const loginMutation = useMutation({
    mutationKey: ['auth/login'],
    mutationFn: (data: ILoginFormValues) => authService.login(data),
    onSuccess({ data }) {
      saveToCookie(ETokens.ACCESS_TOKEN, data.accessToken);
      toast.success('Success');
    },
    onError(error) {
      toast.error(errorHandler(error));
    },
  });

  const registerMutation = useMutation({
    mutationKey: ['auth/register'],
    mutationFn: (data: IRegisterFormValues) => authService.register(data),
    onSuccess({ data }) {
      saveToCookie(ETokens.ACCESS_TOKEN, data.accessToken);
      toast.success('Success');
    },
    onError(error) {
      toast.error(errorHandler(error));
    },
  });

  return {
    login: loginMutation.mutateAsync,
    isLoginPending: loginMutation.isPending,
    register: registerMutation.mutateAsync,
    isRegisterPending: registerMutation.isPending,
  };
};
