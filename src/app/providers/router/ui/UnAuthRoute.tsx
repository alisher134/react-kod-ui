import { PropsWithChildren } from 'react';
import { Navigate } from 'react-router';

import { useAuth } from '@entities/auth';

import { ROUTES } from '@shared/config/router';

export const UnAuthRoute = ({ children }: PropsWithChildren) => {
  const { isLoggedIn } = useAuth();

  if (isLoggedIn) return <Navigate to={ROUTES.appRoute} />;

  return <>{children}</>;
};
