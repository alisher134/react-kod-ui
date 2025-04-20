import { useTranslation } from 'react-i18next';

import { CatalogList } from '@widgets/catalog';

import { I18Namespace } from '@shared/config/i18n';
import { ECatalog } from '@shared/config/i18n/i18nTranslations';
import { ROUTES } from '@shared/config/router';
import { Breadcrumbs } from '@shared/ui/Breadcrumbs';
import { IBreadcrumbItem } from '@shared/ui/Breadcrumbs/model/breadcrumbsTypes';

import styles from './CatalogPage.module.scss';

const CatalogPage = () => {
  const { t } = useTranslation(I18Namespace.catalog);

  const links: IBreadcrumbItem[] = [
    { title: t(ECatalog.CRUMBS_MAIN), link: ROUTES.appRoute },
    {
      title: t(ECatalog.CRUMBS_CATALOG),
      link: ROUTES.catalog.page,
      isCurrent: true,
    },
  ];

  return (
    <div className={styles.catalog}>
      <div className={styles.container}>
        <Breadcrumbs links={links} />

        <div className={styles.top}>
          <h1 className={styles.title}>{t(ECatalog.TITLE)}</h1>
          <p className={styles.subtitle}>{t(ECatalog.DESCRIPTION)}</p>
        </div>

        <CatalogList />
      </div>
    </div>
  );
};

export default CatalogPage;
