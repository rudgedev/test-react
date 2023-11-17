import Coin from '@shared/assets/coin.svg';

import { type ICoin } from '../../model/types/coin';

import styles from './CoinCard.module.scss';
import { useTranslation } from 'react-i18next';

export const CoinCard = ({ title, network, status }: ICoin) => {
  const { t } = useTranslation();

  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <Coin />
      </div>
      <h2>
        {t('Название монеты')}: {title}
      </h2>
      <p>
        {t('Поддерживаемая сеть')}: {network}
      </p>
      <p>
        {t('Статус монеты')}: {status}
      </p>
    </div>
  );
};
