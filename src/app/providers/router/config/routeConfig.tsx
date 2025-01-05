import { createBrowserRouter } from 'react-router';

import App from '@app/App';
import { MainLayout } from '@app/layouts/MainLayout';

import { MainPage as LandingMainPage } from '@pages/landing/MainPage';

import { ROUTES } from '@shared/config/router';

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
    ],
  },
]);
