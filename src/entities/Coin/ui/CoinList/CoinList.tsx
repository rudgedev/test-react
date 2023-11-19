import { type ICoin } from '../../model/types/coin';
import { CoinCard } from '../CoinCard/CoinCard';

import styles from './CoinList.module.scss';

interface ICoinListProps {
  coins: ICoin[];
  onClick: () => void;
}

export const CoinList = (props: ICoinListProps) => {
  const { coins, onClick } = props;

  return (
    <div className={styles.coins}>
      {coins.map(coin => (
        <CoinCard
          key={coin.id}
          id={coin.id}
          title={coin.title}
          network={coin.network}
          status={coin.status}
          onClick={onClick}
        />
      ))}
    </div>
  );
};
