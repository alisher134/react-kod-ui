import { CircleHelp, GraduationCap, User } from 'lucide-react';

import { ETranslation } from '@shared/config/i18n/i18nTranslations';
import { ROUTES } from '@shared/config/router';

import { ISidebarMenuItem } from '../types/sidebarTypes';

export const sidebarMenuData = (t: (key: string) => string): ISidebarMenuItem[] => [
  {
    title: t(ETranslation.SIDEBAR_MENU_COURSE),
    icon: GraduationCap,
    link: ROUTES.student.courses.page,
  },
  {
    title: t(ETranslation.SIDEBAR_MENU_PROFILE),
    icon: User,
    link: ROUTES.student.my_profile.page,
  },
  {
    title: t(ETranslation.SIDEBAR_MENU_HELP),
    icon: CircleHelp,
    link: ROUTES.student.help.page,
  },
];
