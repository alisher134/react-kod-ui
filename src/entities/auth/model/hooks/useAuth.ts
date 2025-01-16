import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import { authService } from '@entities/auth/api/authService';

import i18n from '@shared/config/i18n/i18n';
import { ETranslation } from '@shared/config/i18n/i18nTranslations';
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
    mutationFn: (body: ILoginFormValues) => authService.login(body),
    onSuccess({ data }) {
      saveToCookie(ETokens.ACCESS_TOKEN, data.accessToken);
      toast.success(i18n.t(ETranslation.TOAST_AUTH_LOGIN_SUCCESS));
    },
    onError(error) {
      toast.error(errorHandler(error));
    },
  });

  const registerMutation = useMutation({
    mutationKey: ['auth/register'],
    mutationFn: (body: IRegisterFormValues) => authService.register(body),
    onSuccess({ data }) {
      saveToCookie(ETokens.ACCESS_TOKEN, data.accessToken);
      toast.success(i18n.t(ETranslation.TOAST_AUTH_REGISTER_SUCCESS));
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
      toast.success(i18n.t(ETranslation.TOAST_AUTH_LOGOUT_SUCCESS));
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
