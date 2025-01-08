import { useEffect, useState } from 'react';
import { Link } from 'react-router';

import { Logo } from '@widgets/Logo';

import { APP_NAME } from '@shared/constants';

import { footerMenu } from '../model/data/footerData';

import styles from './Footer.module.scss';

export const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className={styles.wrapper}>
      <div className={styles.container}>
        <Logo className={styles.logo} />

        <div className={styles.blocks}>
          {footerMenu.map((menu) => (
            <div key={menu.title} className={styles.block}>
              <span className={styles.title}>{menu.title}</span>
              <nav className={styles.nav}>
                <ul className={styles.list}>
                  {menu.items.map((item) => (
                    <li key={item.title} className={styles.item}>
                      <Link to={item.link} className={styles.link}>
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          ))}
        </div>
        <p className={styles.copyright}>{`${APP_NAME} © ${year}. Все права защищены.`}</p>
      </div>
    </footer>
  );
};
