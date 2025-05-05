import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { CatalogList } from '@widgets/catalog';
import { CourseSearch, MyCourseList, PopularList } from '@widgets/course';

import { I18Namespace } from '@shared/config/i18n';
import { ECatalog } from '@shared/config/i18n/i18nTranslations';
import { Tabs } from '@shared/ui/Tabs';

import styles from './MainPage.module.scss';

const MainPage = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const { t } = useTranslation(I18Namespace.catalog);
  const labels = [t(ECatalog.MY_COURSES), t(ECatalog.POPULAR), t(ECatalog.ALL)];

  return (
    <div className={styles.courses}>
      <Tabs labels={labels} activeIndex={activeTab} onChange={setActiveTab}>
        <MyCourseList />
        <PopularList />
        <CatalogList />
      </Tabs>

      <CourseSearch />
    </div>
  );
};

export default MainPage;
