import { useEffect, useState } from 'react';

import styles from './MainPage.module.scss';

import { $api } from '@/shared/api/api';

import { Header } from '@/widgets/Header';

import { Input } from '@/shared/ui/Input/Input';
import { CoinList } from '@/entities/Coin';
import { type ICoin } from '@/entities/Coin/model/types/coin';

const MainPage = () => {
  const [inputValue, setInputValue] = useState('');
  const [coinList, setCoinList] = useState<ICoin[]>([]);

  useEffect(() => {
    $api.get<ICoin[]>('/coins').then(response => {
      setCoinList(response.data);
    });
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <main className="main-page">
      <Header />
      <div className={styles.container}>
        <Input placeholder="Coin title" value={inputValue} onChange={handleInputChange} />
        <CoinList coins={coinList} />
      </div>
    </main>
  );
};

export default MainPage;
