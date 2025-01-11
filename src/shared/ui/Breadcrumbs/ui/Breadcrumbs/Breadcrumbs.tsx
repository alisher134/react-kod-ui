import clsx from 'clsx';
import { ChevronRight } from 'lucide-react';
import React from 'react';

import { IBreadcrumbItem } from '../../model/breadcrumbsTypes';
import { BreadcrumbItem } from '../BreadcrumbItem/BreadcrumbItem';

import styles from './Breadcrumbs.module.scss';

interface BreadcrumbsProps {
  className?: string;
  links: IBreadcrumbItem[];
}

export const Breadcrumbs = ({ className, links }: BreadcrumbsProps) => {
  return (
    <ul className={clsx(styles.breadcrumbs, className)}>
      {links.map((item, idx) => {
        const isLast = links.length - 1 === idx;

        return (
          <React.Fragment key={idx}>
            <li>
              <BreadcrumbItem item={item} />
            </li>
            {!isLast && (
              <li>
                <ChevronRight width={18} height={18} className={styles.arrow} />
              </li>
            )}
          </React.Fragment>
        );
      })}
    </ul>
  );
};
