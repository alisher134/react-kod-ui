import { ROUTES } from '@shared/config/router';
import { Button } from '@shared/ui/Button';

import styles from './Error404Page.module.scss';

const Error404Page = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.text}>404</div>
        <h2 className={styles.title}>Страница не найдена :(</h2>
        <p className={styles.description}>
          Все в порядке, просто контент потерялся. Мы его найдём. Обещаем)
        </p>
        <Button isLink size="lg" href={ROUTES.appRoute} className={styles.link}>
          Вернуться на главную
        </Button>
      </div>
    </section>
  );
};

export default Error404Page;
