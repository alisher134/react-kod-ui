import { ChartArea, CircleHelp, Crown, GraduationCap, Star, User, Users } from 'lucide-react';

import { ROUTES } from '@shared/config/router';

import { ISidebarMenuItem } from '../types/sidebarTypes';

export const sidebarMenuData: ISidebarMenuItem[] = [
  {
    title: 'Курсы',
    icon: GraduationCap,
    link: ROUTES.student.courses.page,
  },
  {
    title: 'Карта развитий',
    icon: ChartArea,
    link: '',
  },
  {
    title: 'KodПлюс',
    icon: Crown,
    link: '',
  },
  {
    title: 'Бонусы',
    icon: Star,
    link: '',
  },
  {
    title: 'Профиль',
    icon: User,
    link: ROUTES.student.my_profile.page,
  },
  {
    title: 'Сообщество',
    icon: Users,
    link: '',
  },
  {
    title: 'Помощь',
    icon: CircleHelp,
    link: '',
  },
];
