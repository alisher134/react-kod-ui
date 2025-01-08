import mainScreenIntroImg from '@shared/assets/images/main-screen-intro.png';
import { Button } from '@shared/ui/Button';

import { chipsData } from '../model/data/introductionData';

import styles from './IntroductionBlock.module.scss';

export const IntroductionBlock = () => {
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
            Обучающая <br /> платформа для <span>обучения в сфере IT</span>
          </h1>
          <p className={styles.subtitle}>
            Получите знания и опыт ведущих разработчиков из крупных компаний и практикуйтесь на
            реальных проектах
          </p>
          <Button isLink size="lg" href="/catalog" className={styles.link}>
            Перейти в каталог курсов
          </Button>
        </div>
        <img src={mainScreenIntroImg} alt="main-screen-intro" />
      </div>
    </section>
  );
};
