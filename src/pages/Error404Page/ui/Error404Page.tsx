import { useTranslation } from 'react-i18next';

import { ETranslation } from '@shared/config/i18n/i18nTranslations';
import { ROUTES } from '@shared/config/router';
import { Button } from '@shared/ui/Button';

import styles from './Error404Page.module.scss';

const Error404Page = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.text}>404</div>
        <h2 className={styles.title}>{t(ETranslation.NOT_FOUND_TITLE)}</h2>
        <p className={styles.description}>{t(ETranslation.NOT_FOUND_SUBTITLE)}</p>
        <Button isLink size="lg" href={ROUTES.appRoute} className={styles.link}>
          {t(ETranslation.NOT_FOUND_LINK)}
        </Button>
      </div>
    </section>
  );
};

export default Error404Page;
