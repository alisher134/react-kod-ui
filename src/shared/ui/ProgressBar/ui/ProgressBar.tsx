import clsx from 'clsx';

import styles from './ProgressBar.module.scss';

interface ProgressBarProps {
  currentCount: number;
  totalCount: number;
  percentage: number;
  className?: string;
  label?: string;
}

export const ProgressBar = ({
  className,
  currentCount,
  totalCount,
  percentage,
}: ProgressBarProps) => {
  return (
    <div className={clsx(styles.wrapper, className)}>
      <div className={styles.info}>
        <span className={styles.percentage}>{percentage}%</span>
        <span className={styles['progress-fraction']}>
          {currentCount}/{totalCount}
        </span>
      </div>
      <progress value={currentCount} max={totalCount} />
    </div>
  );
};
