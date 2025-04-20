import { createBrowserRouter } from 'react-router';

import App from '@app/App';
import { AuthLayout } from '@app/layouts/AuthLayout';
import { LessonLayout } from '@app/layouts/LessonLayout';
import { MainLayout } from '@app/layouts/MainLayout';
import { StudentLayout } from '@app/layouts/StudentLayout';

import { Error404Page } from '@pages/Error404Page';
import { LoginPage } from '@pages/auth/LoginPage';
import { RegisterPage } from '@pages/auth/RegisterPage';
import { ResetPasswordPage } from '@pages/auth/ResetPage';
import { RestorePasswordPage } from '@pages/auth/RestorePage';
import { CatalogPage } from '@pages/catalog';
import { CoursePage } from '@pages/course';
import { MainPage as LandingMainPage } from '@pages/landing/MainPage';
import { LessonPage } from '@pages/lesson';
import { HelpPage } from '@pages/student/HelpPage';
import { MainPage as CourseMainPage } from '@pages/student/course/MainPage';
import { EditProfilePage } from '@pages/student/profile/EditProfilePage';
import { ProfilePage } from '@pages/student/profile/ProfilePage';

import { ROUTES } from '@shared/config/router';

import { AuthRoute } from '../ui/AuthRoute';
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
          {
            path: ROUTES.course.route,
            children: [
              {
                path: ':slug',
                element: <CoursePage />,
              },
            ],
          },
          {
            path: ROUTES.catalog.route,
            element: <CatalogPage />,
          },
          {
            path: '*',
            element: <Error404Page />,
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
          {
            path: ROUTES.auth.restore.route,
            element: <RestorePasswordPage />,
          },
          {
            path: ROUTES.auth.reset.route,
            element: <ResetPasswordPage />,
          },
        ],
      },
      {
        path: ROUTES.lesson.route,
        element: <LessonLayout />,
        children: [
          {
            path: ':slug',
            element: <LessonPage />,
          },
        ],
      },
      {
        path: ROUTES.student.route,
        element: (
          <AuthRoute>
            <StudentLayout />
          </AuthRoute>
        ),
        children: [
          {
            path: ROUTES.student.courses.route,
            element: <CourseMainPage />,
          },
          {
            path: ROUTES.student.my_profile.route,
            element: <ProfilePage />,
          },
          {
            path: ROUTES.student.my_profile.edit.route,
            element: <EditProfilePage />,
          },
          {
            path: ROUTES.student.help.route,
            element: <HelpPage />,
          },
        ],
      },
    ],
  },
]);
