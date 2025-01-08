import { PropsWithChildren } from 'react';
import { Navigate } from 'react-router';

import { useAuth } from '@entities/auth';

import { ROUTES } from '@shared/config/router';

export const AuthRoute = ({ children }: PropsWithChildren) => {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) return <Navigate to={ROUTES.auth.login.page} />;

  return <>{children}</>;
};
