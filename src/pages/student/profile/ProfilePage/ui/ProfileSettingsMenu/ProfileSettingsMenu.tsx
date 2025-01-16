import { User, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import { I18Namespace } from '@shared/config/i18n';
import { EProfile } from '@shared/config/i18n/i18nTranslations';
import { Button } from '@shared/ui/Button';

import styles from './ProfileSettingsMenu.module.scss';

interface ProfileSettingsMenuProps {
  handleOpen: () => void;
  email?: string;
}

export const ProfileSettingsMenu = ({ handleOpen, email }: ProfileSettingsMenuProps) => {
  const { t } = useTranslation(I18Namespace.profile);

  return (
    <div className={styles['settings-menu']}>
      <div className={styles.top}>
        <button onClick={handleOpen} className={styles['close-button']}>
          <X size={28} />
        </button>
      </div>
      <div className={styles['menu-container']}>
        <div className={styles.item}>
          <h2 className={styles.title}>
            <User className={styles.icon} />
            <span>{t(EProfile.SETTINGS_MENU_FIRST_TITLE)}</span>
          </h2>

          <div className={styles.email}>
            <span>E-mail:</span>
            <span className={styles.text}>{email}</span>
          </div>

          <div className={styles.buttons}>
            <Button size="full" variant="secondary">
              {t(EProfile.SETTINGS_MENU_FIRST_BUTTON)}
            </Button>
          </div>
        </div>
        <hr className={styles.line} />
      </div>
    </div>
  );
};
