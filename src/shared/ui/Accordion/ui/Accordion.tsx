import clsx from 'clsx';
import { Plus } from 'lucide-react';
import { useState } from 'react';

import styles from './Accordion.module.scss';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const Accordion = ({ className, title, children }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const onAccordionOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div
      className={clsx(styles.accordion, className, {
        [styles['accordion-opened']]: isOpen,
      })}
    >
      <button onClick={onAccordionOpen} className={styles.button}>
        <h3 className={styles.title}>{title}</h3>

        <div
          className={clsx(styles['icon-container'], {
            [styles['rotate']]: isOpen,
          })}
        >
          <Plus size={28} className={styles.icon} />
        </div>
      </button>

      <div className={styles.collapsed}>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};
