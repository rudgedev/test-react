import classNames from 'classnames';

import { EllipsisLoader } from '@/shared/ui/EllipsisLoader/EllipsisLoader';

import styles from './PageLoader.module.scss';

interface IPageLoaderProps {
  className?: string;
}

export const PageLoader = ({ className }: IPageLoaderProps) => {
  return (
    <div className={classNames(styles.PageLoader, {}, [className])}>
      <EllipsisLoader />
    </div>
  );
};
