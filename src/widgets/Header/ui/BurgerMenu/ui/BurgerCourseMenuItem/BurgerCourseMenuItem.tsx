import { ChevronRight, Database } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router';

import { ICourseNavigation } from '@widgets/Header/model/types/headerTypes';

import { Button } from '@shared/ui/Button';

import styles from './BurgerCourseMenuItem.module.scss';

interface BurgerCourseMenuItemProps {
  item: ICourseNavigation;
}

export const BurgerCourseMenuItem = ({ item }: BurgerCourseMenuItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSub, setIsOpenSub] = useState<Record<string, boolean>>({});

  const handleIsOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const handleIsOpenSub = (key: string) => {
    setIsOpenSub((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <li className={styles.item}>
      <button onClick={handleIsOpen} className={styles.button}>
        <span>{item.title}</span>

        <ChevronRight size={18} className={styles.icon} />
      </button>

      {isOpen && (
        <ul className={styles.list}>
          <li>
            <Button
              size="full"
              isLink
              variant="secondary"
              href="/catalog"
              prefix={<Database />}
              className={styles['catalog-button']}
            >
              Перейти в каталог курсов
            </Button>
          </li>

          {item.items.map((subitem) => (
            <li key={subitem.title} className={styles.subitem}>
              <button onClick={() => handleIsOpenSub(subitem.title)} className={styles.button}>
                <span>{subitem.title}</span>

                <ChevronRight size={18} className={styles.icon} />
              </button>

              {isOpenSub[subitem.title] && (
                <ul className={styles['group-list']}>
                  {subitem.items.map((item, idx) => (
                    <li key={idx}>
                      <div className={styles.top}>
                        <div className={styles['img-container']}>
                          <img width={32} height={32} src={item.logo} alt={item.section} />
                        </div>
                        <h3 className={styles.title}>{item.section}</h3>
                      </div>

                      <hr className={styles.line} />

                      <ul className={styles['subitem-list']}>
                        {item.items.map((subItem) => (
                          <li key={subItem.title}>
                            <Link to={subItem.link}>{subItem.title}</Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};
