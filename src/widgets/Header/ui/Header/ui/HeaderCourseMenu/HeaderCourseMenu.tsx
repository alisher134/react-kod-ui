import clsx from 'clsx';
import { ChevronRight, Database } from 'lucide-react';
import { useCallback, useState } from 'react';

import { ICourseNavigation } from '@widgets/Header/model/types/headerTypes';

import { Button } from '@shared/ui/Button';

import styles from './HeaderCourseMenu.module.scss';

interface HeaderCourseMenuProps {
  menu: ICourseNavigation;
}

export const HeaderCourseMenu = ({ menu }: HeaderCourseMenuProps) => {
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  const handleMouseEnter = useCallback((sectionId: string) => {
    setHoveredSection(sectionId);
  }, []);

  // const handleMouseLeave = useCallback(() => {
  //   setHoveredSection(null);
  // }, []);

  // const groupMenu = useMemo(() => {
  //   return menu.items.find((item) => item.title === hoveredSection);
  // }, [menu.items, hoveredSection]);

  return (
    <li className={styles['course-menu']}>
      <span>{menu.title}</span>
      <ul className={styles.dropdown}>
        <div className={styles.container}>
          <div className={styles.direction}>
            <Button
              size="sm"
              isLink
              variant="secondary"
              href="/catalog"
              prefix={<Database />}
              className={styles.button}
            >
              Перейти в каталог курсов
            </Button>

            <ul className={styles['direction-list']}>
              {menu.items.map((item) => (
                <li
                  key={item.title}
                  onMouseEnter={() => handleMouseEnter(item.title)}
                  className={clsx({ [styles.active]: item.title === hoveredSection })}
                >
                  <span>{item.title}</span>
                  <ChevronRight size={22} />
                </li>
              ))}
            </ul>
          </div>

          {/* <div className={styles.group}>
            {groupMenu && (
              <ul onMouseLeave={handleMouseLeave} className={styles['group-list']}>
                {groupMenu.items.map((item, idx) => (
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
          </div> */}
        </div>
      </ul>
    </li>
  );
};
