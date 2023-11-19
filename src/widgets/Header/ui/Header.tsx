import { memo } from 'react';

import { Balance } from '@/entities/Balance';
import { LangSwitcher } from '@/features/LangSwitcher';

import styles from './Header.module.scss';

export const Header = memo(() => {
  return (
    <header className={styles.Header}>
      <div className={styles.container}>
        <LangSwitcher />
        <Balance />
      </div>
    </header>
  );
});
