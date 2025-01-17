import { useTranslation } from 'react-i18next';

import commonIcon from '@shared/assets/icons/common.svg';
import { I18Namespace } from '@shared/config/i18n';
import { ELanding } from '@shared/config/i18n/i18nTranslations';

import { ICourseNavigation, INavigation } from '../types/headerTypes';

export const useHeaderMenuData = () => {
  const { t } = useTranslation(I18Namespace.landing);

  const headerCourseMenuData: ICourseNavigation = {
    title: 'Курсы',
    items: [
      {
        title: 'Frontend',
        items: [
          {
            section: 'Общее',
            logo: commonIcon,
            items: [
              {
                title: 'Основы разработки',
                link: '',
              },
              {
                title: 'Основы Git',
                link: '',
              },
              {
                title: 'HTML и CSS',
                link: '',
              },
              {
                title: 'CSS Flexbox',
                link: '',
              },
              {
                title: 'Основы JavaScript',
                link: '',
              },
              {
                title: 'Продвинутый JavaScript',
                link: '',
              },
              {
                title: 'TypeScript с нуля',
                link: '',
              },
            ],
          },
        ],
      },
      {
        title: 'Backend',
        items: [
          {
            section: 'Общее',
            logo: commonIcon,
            items: [
              {
                title: 'Основы разработки',
                link: '',
              },
            ],
          },
        ],
      },
      {
        title: 'DevOps',
        items: [
          {
            section: 'Общее',
            logo: commonIcon,
            items: [
              {
                title: 'Основы разработки',
                link: '',
              },
            ],
          },
        ],
      },
      {
        title: 'Mobile',
        items: [
          {
            section: 'Общее',
            logo: commonIcon,
            items: [
              {
                title: 'Основы разработки',
                link: '',
              },
            ],
          },
        ],
      },
    ],
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
