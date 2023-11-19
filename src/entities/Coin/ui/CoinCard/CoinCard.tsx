import { useTranslation } from 'react-i18next';

import Coin from '@shared/assets/coin.svg';

import { Status, type ICoin, Network } from '../../model/types/coin';

import styles from './CoinCard.module.scss';

interface ICoinCardProps extends ICoin {
  onClick: () => void;
}

export const CoinCard = ({ title, network, status, onClick }: ICoinCardProps) => {
  const { t } = useTranslation();

  return (
    <div className={styles.card} onClick={onClick}>
      <div className={styles.image}>
        <Coin />
      </div>
      <h2>{`${t('Название монеты')}: ${title}`}</h2>
      <p>{`${t('Поддерживаемая сеть')}: ${Network[network]}`}</p>
      <p>{`${t('Статус монеты')}: ${Status[status]}`}</p>
    </div>
  );
};
