import clsx from 'clsx';
import React from 'react';

import styles from './Tabs.module.scss';

interface TabsProps {
  activeIndex: number;
  className?: string;
  labels: string[];
  onChange: (idx: number) => void;
  children: React.ReactNode;
}

export const Tabs = ({ className, labels, activeIndex, onChange, children }: TabsProps) => {
  const childrenArray = React.Children.toArray(children);

  return (
    <div className={clsx(styles.wrapper, className)}>
      <div className={styles.tabs}>
        <ul className={styles.list}>
          {labels.map((label, idx) => (
            <li key={label} className={styles.item}>
              <button
                onClick={() => onChange(idx)}
                className={clsx(styles.button, {
                  [styles.active]: activeIndex === idx,
                })}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.content}>{childrenArray[activeIndex]}</div>
    </div>
  );
};
