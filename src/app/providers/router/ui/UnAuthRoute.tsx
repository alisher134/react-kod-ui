import { PropsWithChildren } from 'react';
import { Navigate, useLocation } from 'react-router';

import { useAuth } from '@entities/auth';

import { ROUTES } from '@shared/config/router';

export const UnAuthRoute = ({ children }: PropsWithChildren) => {
  const { pathname } = useLocation();
  const { isLoggedIn } = useAuth();
  const isRestore = pathname === ROUTES.auth.restore.page;
  const isReset = pathname === ROUTES.auth.reset.page;

  if (isLoggedIn) {
    if (isRestore || isReset) return <>{children}</>;
    return <Navigate to={ROUTES.appRoute} />;
  }

  return <>{children}</>;
};
