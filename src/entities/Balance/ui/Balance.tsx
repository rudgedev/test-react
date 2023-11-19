import { memo, useEffect, useState } from 'react';

import { useTranslation } from 'react-i18next';

import Wallet from '@shared/assets/wallet.svg';

import { $api } from '@/shared/api/api';

import { type IBalance } from '../model/types/balance';

import styles from './Balance.module.scss';

export const Balance = memo(() => {
  const [balance, setBalance] = useState(0);

  const { t } = useTranslation();

  useEffect(() => {
    $api
      .get<IBalance>('/balance')
      .then(result => {
        setBalance(result.data.balance);
      })
      .catch(() => console.error('Error get balance...'));
  }, []);

  return (
    <div className="balance">
      <Wallet />
      <span className={styles.money}>
        {t('Текущий баланс')}: {balance}$
      </span>
    </div>
  );
});
