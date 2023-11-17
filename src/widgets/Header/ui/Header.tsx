import { memo } from 'react';

import styles from './Header.module.scss';

import { Balance } from '@/entities/Balance';

export const Header = memo(() => {
  return (
    <header className={styles.Header}>
      <div className={styles.container}>
        <Balance />
      </div>
    </header>
  );
});
