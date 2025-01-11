export const ROUTES = {
  appRoute: '/',
  auth: {
    route: 'auth',
    login: {
      route: 'login',
      page: '/auth/login',
    },
    restore: {
      route: 'restore',
      page: '/auth/restore',
    },
    register: {
      route: 'register',
      page: '/auth/register',
    },
  },
  student: {
    route: 'student',
    courses: {
      route: 'courses',
      page: '/student/courses',
    },
    my_profile: {
      route: 'profile/my',
      page: '/student/profile/my',
      edit: {
        route: 'profile/my/edit',
        page: '/student/profile/my/edit',
      },
    },
    help: {
      route: 'help',
      page: '/student/help',
    },
  },
};
