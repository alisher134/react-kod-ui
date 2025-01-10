import { Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import { I18Namespace } from '@shared/config/i18n';
import { ETranslation } from '@shared/config/i18n/i18nTranslations';

import { ELanguages } from '../model/changingLanguage';

import styles from './LanguageSwitcher.module.scss';

export const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation(I18Namespace.translation);

  const changeLanguage = () => {
    const newLang = i18n.language === ELanguages.KZ ? ELanguages.RU : ELanguages.KZ;
    i18n.changeLanguage(newLang);
  };

  return (
    <button onClick={changeLanguage} className={styles.switch}>
      <Globe className={styles.icon} />
      <span>{t(ETranslation.LANGUAGE)}</span>
    </button>
  );
};
