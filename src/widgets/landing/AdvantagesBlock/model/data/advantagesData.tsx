import computerIcon from '@shared/assets/icons/computer-icon.svg';
import databaseIcon from '@shared/assets/icons/database-icon.svg';
import messageIcon from '@shared/assets/icons/message-icon.svg';
import trajectoryIcon from '@shared/assets/icons/trajectory-icon.svg';
import { ELanding } from '@shared/config/i18n/i18nTranslations';

import { IAdvantages } from '../types/advantagesTypes';

export const advantagesData = (t: (key: string) => string): IAdvantages[] => [
  {
    title: t(ELanding.ADVANTAGES_ADVANTAGE_FIRST),
    icon: <img src={trajectoryIcon} width={48} height={48} />,
  },
  {
    title: t(ELanding.ADVANTAGES_ADVANTAGE_SECOND),
    icon: <img src={databaseIcon} width={48} height={48} />,
  },
  {
    title: t(ELanding.ADVANTAGES_ADVANTAGE_THIRD),
    icon: <img src={computerIcon} width={48} height={48} />,
  },
  {
    title: t(ELanding.ADVANTAGES_ADVANTAGE_FOURTH),
    icon: <img src={messageIcon} width={48} height={48} />,
  },
];
