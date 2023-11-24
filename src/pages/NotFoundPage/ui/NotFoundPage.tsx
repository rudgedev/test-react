import classNames from 'classnames';

import { useTranslation } from 'react-i18next';

import styles from './NotFoundPage.module.scss';

interface INotFoundPageProps {
  className?: string;
}

export const NotFoundPage = ({ className }: INotFoundPageProps) => {
  const { t } = useTranslation();

  return <div className={classNames(styles.NotFoundPage, {}, [className])}>{t('Страница не найдена')}</div>;
};
