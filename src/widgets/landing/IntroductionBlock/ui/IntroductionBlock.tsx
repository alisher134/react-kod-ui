import { useTranslation } from 'react-i18next';

import mainScreenIntroImg from '@shared/assets/images/main-screen-intro.png';
import { I18Namespace } from '@shared/config/i18n';
import { ELanding } from '@shared/config/i18n/i18nTranslations';
import { Button } from '@shared/ui/Button';

import { chipsData } from '../model/data/introductionData';

import styles from './IntroductionBlock.module.scss';

export const IntroductionBlock = () => {
  const { t } = useTranslation(I18Namespace.landing);

  return (
    <section className={styles.introduction}>
      <div className={styles.container}>
        <div>
          <div className={styles.chips}>
            {chipsData.map((chip) => (
              <span key={chip.title} className={styles.chip}>
                {chip.title}
              </span>
            ))}
          </div>
          <h1 className={styles.title}>
            {t(ELanding.INTRODUCTION_TITLE_TEXT)} <span>{t(ELanding.INTRODUCTION_TITLE_SPAN)}</span>
          </h1>
          <p className={styles.subtitle}>{t(ELanding.INTRODUCTION_SUBTITLE)}</p>
          <Button isLink size="lg" href="/catalog" className={styles.link}>
            {t(ELanding.INTRODUCTION_LINK)}
          </Button>
        </div>
        <img src={mainScreenIntroImg} alt="main-screen-intro" />
      </div>
    </section>
  );
};
