export const ROUTES = {
  appRoute: '/',
  auth: {
    route: 'auth',
    login: {
      route: 'login',
      page: '/auth/login',
    },
    register: {
      route: 'register',
      page: '/auth/register',
    },
    restore: {
      route: 'restore',
      page: '/auth/restore',
    },
    reset: {
      route: 'reset',
      page: '/auth/reset',
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
