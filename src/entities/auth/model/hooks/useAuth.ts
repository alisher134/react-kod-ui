import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import { authService } from '@entities/auth/api/authService';

import { ETokens } from '@shared/constants';
import {
  getFromCookie,
  removeFromCookie,
  saveToCookie,
} from '@shared/helpers/manageCookie/manageCookie';
import { errorHandler } from '@shared/utils';

import { ILoginFormValues, IRegisterFormValues } from '../types/authTypes';

export const useAuth = () => {
  const loginMutation = useMutation({
    mutationKey: ['auth/login'],
    mutationFn: (data: ILoginFormValues) => authService.login(data),
    onSuccess({ data }) {
      saveToCookie(ETokens.ACCESS_TOKEN, data.accessToken);
      toast.success('Вы успешно вошли');
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
      toast.success('Вы успешно зарегистрировались');
    },
    onError(error) {
      toast.error(errorHandler(error));
    },
  });

  const logoutMutation = useMutation({
    mutationKey: ['auth/logout'],
    mutationFn: () => authService.logout(),
    onSuccess() {
      removeFromCookie(ETokens.ACCESS_TOKEN);
      toast.success('Вы успешно вышли');
    },
    onError(error) {
      toast.error(errorHandler(error));
    },
  });

  const isLoggedIn = Boolean(getFromCookie(ETokens.ACCESS_TOKEN));

  return {
    login: loginMutation.mutateAsync,
    isLoginPending: loginMutation.isPending,
    register: registerMutation.mutateAsync,
    isRegisterPending: registerMutation.isPending,
    logout: logoutMutation.mutateAsync,
    isLogoutPending: logoutMutation.isPending,
    isLoggedIn,
  };
};
