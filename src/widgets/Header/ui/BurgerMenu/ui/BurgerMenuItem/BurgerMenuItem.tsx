import { ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router';

import { INavigation } from '@widgets/Header/model/types/headerTypes';

import styles from './BurgerMenuItem.module.scss';

interface BurgerMenuItemProps {
  item: INavigation;
}

export const BurgerMenuItem = ({ item }: BurgerMenuItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <li className={styles.item}>
      <button onClick={handleIsOpen} className={styles.button}>
        <span>{item.title}</span>

        <ChevronRight size={18} className={styles.icon} />
      </button>

      {isOpen && (
        <ul className={styles.list}>
          {item.items.map((subitem) => (
            <li key={subitem.title} className={styles.subitem}>
              <Link to={subitem.link}>{subitem.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};
