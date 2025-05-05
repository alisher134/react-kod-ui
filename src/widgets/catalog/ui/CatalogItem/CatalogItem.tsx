import { useTranslation } from 'react-i18next';

import { ICourse } from '@entities/course/types/courseTypes';

import ClockIcon from '@shared/assets/icons/clock.svg';
import { I18Namespace } from '@shared/config/i18n';
import { ECatalog } from '@shared/config/i18n/i18nTranslations';
import { Button } from '@shared/ui/Button';

import styles from './CatalogItem.module.scss';

export const CatalogItem = ({ item }: { item: ICourse }) => {
  const { t } = useTranslation(I18Namespace.catalog);

  return (
    <li className={styles.item}>
      <div className={styles.thumbnail}>
        <img src={item.thumbnail} alt={item.slug} />
      </div>
      <div className={styles.info}>
        <h3 className={styles.title}>{item.title}</h3>
        <p className={styles.description}>{item.description}</p>

        <span className={styles.lessons}>
          <img src={ClockIcon} /> <span>{item.lessons.length} уроков</span>
        </span>
      </div>
      <div className={styles.buttons}>
        <Button isLink variant="secondary" href={'/course/' + item.slug}>
          {t(ECatalog.ABOUT)}
        </Button>
        <Button isLink href={'/lesson/' + item.lessons[1].slug}>
          {t(ECatalog.START)}
        </Button>
      </div>
    </li>
  );
};
