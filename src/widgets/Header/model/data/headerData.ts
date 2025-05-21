import { useTranslation } from 'react-i18next';

import { I18Namespace } from '@shared/config/i18n';
import { ELanding } from '@shared/config/i18n/i18nTranslations';

import { ICourseNavigation, INavigation } from '../types/headerTypes';

export const useHeaderMenuData = () => {
  const { t } = useTranslation(I18Namespace.landing);

  const headerCourseMenuData: ICourseNavigation = {
    title: 'Курсы',
    items: [],
  };

  const navMenuData: INavigation[] = [
    {
      title: t(ELanding.HEADER_NAV_MENU_CAREERPATHS),
      items: [
        {
          title: t(ELanding.HEADER_NAV_MENU_FRONTEND_DEVELOPER),
          link: '',
        },
        {
          title: t(ELanding.HEADER_NAV_MENU_BACKEND_DEVELOPER),
          link: '',
        },
        {
          title: t(ELanding.HEADER_NAV_MENU_FULLSTACK_DEVELOPER),
          link: '',
        },
        {
          title: t(ELanding.HEADER_NAV_MENU_MOBILE_DEVELOPER),
          link: '',
        },
      ],
    },
    {
      title: t(ELanding.HEADER_NAV_MENU_FREE),
      items: [
        {
          title: t(ELanding.HEADER_NAV_MENU_SKILLS_MAP),
          link: '/skills',
        },
        {
          title: t(ELanding.HEADER_NAV_MENU_DEVELOPMENT_BASICS),
          link: 'course/code-basics',
        },
        {
          title: t(ELanding.HEADER_NAV_MENU_CSS_FLEXBOX),
          link: '/course/flexbox',
        },
        {
          title: t(ELanding.HEADER_NAV_MENU_KNOWLEDGE_BASE),
          link: '/knowledge-base',
        },
      ],
    },
  ];

  return { headerCourseMenuData, navMenuData };
};
