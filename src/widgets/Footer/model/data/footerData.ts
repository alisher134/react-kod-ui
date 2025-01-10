import { ELanding } from '@shared/config/i18n/i18nTranslations';

import { IMenu } from '../types/footerTypes';

export const footerMenu = (t: (key: string) => string): IMenu[] => [
  {
    title: t(ELanding.FOOTER_COURSES_TITLE),
    items: [
      {
        title: t(ELanding.FOOTER_COURSES_ITEMS_FIRST),
        link: '/',
      },
      {
        title: t(ELanding.FOOTER_COURSES_ITEMS_SECOND),
        link: '/',
      },
      {
        title: 'Frontend',
        link: '/',
      },
      {
        title: 'Backend',
        link: '/',
      },
      {
        title: 'Fullstack',
        link: '/',
      },
    ],
  },
  {
    title: t(ELanding.FOOTER_PRACTICE_TITLE),
    items: [
      {
        title: t(ELanding.FOOTER_PRACTICE_ITEMS_FIRST),
        link: '/',
      },
      {
        title: t(ELanding.FOOTER_PRACTICE_ITEMS_SECOND),
        link: '/',
      },
    ],
  },
  {
    title: t(ELanding.FOOTER_MATERIALS_TITLE),
    items: [
      {
        title: t(ELanding.FOOTER_MATERIALS_ITEMS_FIRST),
        link: '/',
      },
      {
        title: t(ELanding.FOOTER_MATERIALS_ITEMS_SECOND),
        link: '/',
      },
    ],
  },
];
