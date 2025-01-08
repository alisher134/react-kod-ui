import { advantagesData } from '../model/data/advantagesData';

import styles from './AdvantagesBlock.module.scss';

export const AdvantagesBlock = () => {
  return (
    <section className={styles.advantages}>
      <div className={styles.container}>
        <span className={styles.caption}>Наши преимущества</span>
        <h1 className={styles.title}>Почему нас выбирают?</h1>
        <p className={styles.description}>
          Ваши знания индивидуальны, потому и обучение должно быть тоже подобрано индивидуально под
          вас. Вы сами сможете подобрать отдельные курсы или целые карьерные пути с индивидуальной
          поддержкой.
        </p>

        <div className={styles['advantages-container']}>
          {advantagesData.map((advantages) => (
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
