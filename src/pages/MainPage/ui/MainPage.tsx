import { useCallback, useEffect, useState } from 'react';

import { useTranslation } from 'react-i18next';

import { $api } from '@/shared/api/api';

import { Header } from '@/widgets/Header';

import { Input } from '@/shared/ui/Input/Input';
import { CoinList } from '@/entities/Coin';
import { type ICoin } from '@/entities/Coin/model/types/coin';
import { useDebounce } from '@/shared/hooks/useDebounce';
import { Modal } from '@/shared/ui/Modal/Modal';
import { Pagination } from '@/entities/Pagination/ui/Pagination';
import { PageLoader } from '@/widgets/PageLoader';

import styles from './MainPage.module.scss';

const ROWS_PER_PAGE = 5;

const MainPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [coinList, setCoinList] = useState<ICoin[]>([]);
  const [coinListLength, setCoinListLength] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);

  const { t } = useTranslation();

  useEffect(() => {
    debouncedFetchCoinList();
  }, [page, inputValue]);

  const fetchCoinList = () => {
    setIsLoading(true);

    $api
      .get<ICoin[]>('/coins', {
        params: {
          _page: page,
          _limit: ROWS_PER_PAGE,
          title_like: inputValue,
        },
      })
      .then(response => {
        setCoinList(response.data);
        setCoinListLength(response.headers['x-total-count']);
      })
      .catch(e => {
        console.error('Error fetch coins: ' + e);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const debouncedFetchCoinList = useDebounce(fetchCoinList, 500);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const getTotalPageCount = (rowCount: number) => Math.ceil(rowCount / ROWS_PER_PAGE);

  const handleNextPageClick = useCallback(() => {
    const current = page;
    const next = current + 1;
    const total = coinList ? getTotalPageCount(coinListLength) : current;

    setPage(next <= total ? next : current);
  }, [page, coinList]);

  const handlePrevPageClick = useCallback(() => {
    const current = page;
    const prev = current - 1;

    setPage(prev > 0 ? prev : current);
  }, [page]);

  return (
    <div className="content">
      <Header />
      <main className="main-page">
        <div className={styles.container}>
          <Input placeholder={t('Название монеты')} value={inputValue} onChange={handleInputChange} />
          {!isLoading ? (
            <>
              <CoinList
                coins={coinList}
                onClick={() => {
                  setIsOpen(true);
                }}
              />
              <Pagination
                onNextPageClick={handleNextPageClick}
                onPrevPageClick={handlePrevPageClick}
                disable={{
                  left: page === 1,
                  right: page === getTotalPageCount(coinListLength),
                }}
                nav={{ current: page, total: getTotalPageCount(coinListLength) }}
              />
            </>
          ) : (
            <PageLoader />
          )}
        </div>
        <Modal
          lazy
          isOpen={isOpen}
          onClose={() => {
            setIsOpen(false);
          }}
        >
          This is Modal Content!
        </Modal>
      </main>
    </div>
  );
};

export default MainPage;
