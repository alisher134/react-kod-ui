import clsx from 'clsx';
import { useTranslation } from 'react-i18next';

import { I18Namespace } from '@shared/config/i18n';
import { ETranslation } from '@shared/config/i18n/i18nTranslations';

import { ELanguages } from '../model/changingLanguage';

import styles from './LanguageSwitcher.module.scss';

export const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation(I18Namespace.translation);

  const currentLanguage = i18n.language;

  return (
    <div className={styles.switch}>
      <button
        onClick={() => i18n.changeLanguage(ELanguages.KZ)}
        className={clsx(styles.button, {
          [styles.active]: currentLanguage === ELanguages.KZ,
        })}
      >
        <span>{t(ETranslation.LANGUAGE_KZ)}</span>
      </button>

      <button
        onClick={() => i18n.changeLanguage(ELanguages.RU)}
        className={clsx(styles.button, {
          [styles.active]: currentLanguage === ELanguages.RU,
        })}
      >
        <span>{t(ETranslation.LANGUAGE_RU)}</span>
      </button>
    </div>
  );
};
