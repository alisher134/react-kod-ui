import computerIcon from '@shared/assets/icons/computer-icon.svg';
import databaseIcon from '@shared/assets/icons/database-icon.svg';
import messageIcon from '@shared/assets/icons/message-icon.svg';
import trajectoryIcon from '@shared/assets/icons/trajectory-icon.svg';

import { IAdvantages } from '../types/advantagesTypes';

export const advantagesData: IAdvantages[] = [
  {
    title: 'Индивидуальная траектория обучения',
    icon: <img src={trajectoryIcon} width={48} height={48} />,
  },
  {
    title: 'Только актуальные материалы',
    icon: <img src={databaseIcon} width={48} height={48} />,
  },
  {
    title: 'Фокус на практике и реальных проектах',
    icon: <img src={computerIcon} width={48} height={48} />,
  },
  {
    title: '1 на 1 поддержка опытных наставников',
    icon: <img src={messageIcon} width={48} height={48} />,
  },
];
