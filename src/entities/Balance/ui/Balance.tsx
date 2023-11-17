import Wallet from '@shared/assets/wallet.svg';

import { useEffect, useState } from 'react';

import { type IBalance } from '../model/types/balance';

import styles from './Balance.module.scss';

import { $api } from '@/shared/api/api';
import { useTranslation } from 'react-i18next';

export const Balance = () => {
  const [balance, setBalance] = useState(0);

  const { t } = useTranslation();

  useEffect(() => {
    $api.get<IBalance>('/balance').then(result => {
      setBalance(result.data.balance);
    });
  });

  return (
    <div className="balance">
      <Wallet />
      <span className={styles.money}>
        {t('Текущий баланс')}: {balance}$
      </span>
    </div>
  );
};
