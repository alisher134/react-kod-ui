import { createBrowserRouter } from 'react-router';

import App from '@app/App';
import { AuthLayout } from '@app/layouts/AuthLayout';
import { MainLayout } from '@app/layouts/MainLayout';

import { LoginPage } from '@pages/auth/LoginPage';
import { RegisterPage } from '@pages/auth/RegisterPage';
import { MainPage as LandingMainPage } from '@pages/landing/MainPage';

import { ROUTES } from '@shared/config/router';

import { UnAuthRoute } from '../ui/UnAuthRoute';

export const router = createBrowserRouter([
  {
    path: ROUTES.appRoute,
    element: <App />,
    children: [
      {
        element: <MainLayout />,
        children: [
          {
            index: true,
            element: <LandingMainPage />,
          },
        ],
      },
      {
        path: ROUTES.auth.route,
        element: (
          <UnAuthRoute>
            <AuthLayout />
          </UnAuthRoute>
        ),
        children: [
          {
            path: ROUTES.auth.login.route,
            element: <LoginPage />,
          },
          {
            path: ROUTES.auth.register.route,
            element: <RegisterPage />,
          },
        ],
      },
    ],
  },
]);
