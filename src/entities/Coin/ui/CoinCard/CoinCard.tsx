import Coin from '@shared/assets/coin.svg';

import { type ICoin } from '../../model/types/coin';

import styles from './CoinCard.module.scss';

export const CoinCard = ({ title, network, status }: ICoin) => {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <Coin />
      </div>
      <h2>Название монеты: {title}</h2>
      <p>Поддерживаемая сеть: {network}</p>
      <p>Статус монеты: {status}</p>
    </div>
  );
};
