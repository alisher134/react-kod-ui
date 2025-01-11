import mailIcon from '@shared/assets/icons/mail-icon.svg';
import telegaIcon from '@shared/assets/icons/telega-icon.svg';
import { EHelp } from '@shared/config/i18n/i18nTranslations';

import { IHelpCardItem, IHelpQuestion } from '../types/helpTypes';

export const helpCardsData = (t: (key: string) => string): IHelpCardItem[] => [
  {
    title: t(EHelp.CARDS_FIRST_TITLE),
    text: t(EHelp.CARDS_FIRST_TEXT),
    linkText: t(EHelp.CARDS_FIRST_LINK),
    link: '/',
    icon: <img src={telegaIcon} alt="telega" />,
  },
  {
    title: t(EHelp.CARDS_SECOND_TITLE),
    text: t(EHelp.CARDS_SECOND_TEXT),
    linkText: t(EHelp.CARDS_SECOND_LINK),
    link: '/',
    icon: <img src={mailIcon} alt="mail" />,
  },
];

export const helpQuestionsData = (t: (key: string) => string): IHelpQuestion[] => [
  {
    title: t(EHelp.QUESTIONS_FIRST_TITLE),
    answer: t(EHelp.QUESTIONS_FIRST_ANSWER),
  },
  {
    title: t(EHelp.QUESTIONS_SECOND_TITLE),
    answer: t(EHelp.QUESTIONS_SECOND_ANSWER),
  },
  {
    title: t(EHelp.QUESTIONS_THIRD_TITLE),
    answer: t(EHelp.QUESTIONS_THIRD_ANSWER),
  },
  {
    title: t(EHelp.QUESTIONS_FOURTH_TITLE),
    answer: t(EHelp.QUESTIONS_FOURTH_ANSWER),
  },
];
