import { useTranslation } from 'react-i18next';

import i18n, { I18Namespace } from '@shared/config/i18n/i18n';
import { EHelp, ETranslation } from '@shared/config/i18n/i18nTranslations';
import { ROUTES } from '@shared/config/router';
import { Breadcrumbs } from '@shared/ui/Breadcrumbs';
import { IBreadcrumbItem } from '@shared/ui/Breadcrumbs/model/breadcrumbsTypes';

import { helpCardsData, helpQuestionsData } from '../../model/data/helpData';
import { HelpList } from '../HelpList/HelpList';

import styles from './HelpPage.module.scss';

const HelpPage = () => {
  const { t } = useTranslation(I18Namespace.help);

  const links: IBreadcrumbItem[] = [
    {
      title: i18n.t(ETranslation.CRUMBS_COURSE),
      link: ROUTES.student.courses.page,
      isCurrent: false,
    },
    { title: i18n.t(ETranslation.CRUMBS_HELP), isCurrent: true },
  ];

  return (
    <section className={styles.help}>
      <Breadcrumbs links={links} />
      <div className={styles.container}>
        <h1 className={styles.title}>{t(EHelp.TITLE)}</h1>

        <HelpList t={t} cards={helpCardsData(t)} questions={helpQuestionsData(t)} />
      </div>
    </section>
  );
};

export default HelpPage;
