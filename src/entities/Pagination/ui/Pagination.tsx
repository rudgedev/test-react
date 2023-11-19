import { memo } from 'react';

import { type IPaginationProps } from '../model/types/pagination';

import styles from './Pagination.module.scss';

export const Pagination = memo((props: IPaginationProps) => {
  const { nav = null, disable, onNextPageClick, onPrevPageClick } = props;

  const handleNextPageClick = () => {
    onNextPageClick();
  };

  const handlePrevPageClick = () => {
    onPrevPageClick();
  };

  return (
    <div className={styles.pagination}>
      <button className={styles.arrow} type="button" onClick={handlePrevPageClick} disabled={disable.left}>
        {'<'}
      </button>
      {nav && (
        <span className={styles.navigation}>
          {nav.current} / {nav.total}
        </span>
      )}
      <button className={styles.arrow} type="button" onClick={handleNextPageClick} disabled={disable.right}>
        {'>'}
      </button>
    </div>
  );
});
