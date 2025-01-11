import { EHelp } from '@shared/config/i18n/i18nTranslations';
import { Accordion } from '@shared/ui/Accordion';
import { Button } from '@shared/ui/Button';

import { IHelpCardItem, IHelpQuestion } from '../../model/types/helpTypes';

import styles from './HelpList.module.scss';

interface HelpListProps {
  cards: IHelpCardItem[];
  questions: IHelpQuestion[];
  t: (key: string) => string;
}

export const HelpList = ({ t, cards, questions }: HelpListProps) => {
  return (
    <div className={styles['help-list']}>
      <div className={styles.cards}>
        {cards.map((card) => (
          <div key={card.title} className={styles.card}>
            <div className={styles['image-container']}>{card.icon}</div>

            <div className={styles.content}>
              <h2 className={styles.title}>{card.title}</h2>
              <p className={styles.text}>{card.text}</p>
            </div>

            <Button isLink href={card.link} size="full">
              {card.linkText}
            </Button>
          </div>
        ))}
      </div>

      <div>
        <h2>{t(EHelp.SUBTITLE)}</h2>

        <div className={styles.questions}>
          {questions.map((question) => (
            <Accordion title={question.title}>{question.answer}</Accordion>
          ))}
        </div>
      </div>
    </div>
  );
};
