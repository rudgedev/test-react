import classNames from 'classnames';

import styles from './PageLoader.module.scss';

import { EllipsisLoader } from '@/shared/ui/EllipsisLoader/EllipsisLoader';

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
