import { useTranslation } from 'react-i18next';
import { memo } from 'react';

import classNames from 'classnames';

import styles from './LangSwitcher.module.scss';

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher = memo(({ className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <button className={classNames(styles.Button, [className])} onClick={toggle}>
      {t('Язык')}
    </button>
  );
});
