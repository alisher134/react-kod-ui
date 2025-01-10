import { useTranslation } from 'react-i18next';

import { I18Namespace } from '@shared/config/i18n';
import { ELanding } from '@shared/config/i18n/i18nTranslations';

import { advantagesData } from '../model/data/advantagesData';

import styles from './AdvantagesBlock.module.scss';

export const AdvantagesBlock = () => {
  const { t } = useTranslation(I18Namespace.landing);

  return (
    <section className={styles.advantages}>
      <div className={styles.container}>
        <span className={styles.caption}>{t(ELanding.ADVANTAGES_CAPTION)}</span>
        <h1 className={styles.title}>{t(ELanding.ADVANTAGES_TITLE)}</h1>
        <p className={styles.description}>{t(ELanding.ADVANTAGES_SUBTITLE)}</p>

        <div className={styles['advantages-container']}>
          {advantagesData(t).map((advantages) => (
            <div key={advantages.title} className={styles.advantage}>
              {advantages.icon}
              <p className={styles.title}>{advantages.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
