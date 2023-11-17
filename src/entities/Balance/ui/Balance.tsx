import Wallet from '@shared/assets/wallet.svg';

import { useEffect, useState } from 'react';

import { type IBalance } from '../model/types/balance';

import styles from './Balance.module.scss';

import { $api } from '@/shared/api/api';

export const Balance = () => {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    $api.get<IBalance>('/balance').then(result => {
      setBalance(result.data.balance);
    });
  });

  return (
    <div className="balance">
      <Wallet />
      <span className={styles.money}>Текущий баланс: {balance}$</span>
    </div>
  );
};
