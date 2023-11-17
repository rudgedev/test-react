import classNames from 'classnames';

import styles from './EllipsisLoader.module.scss';

interface IEllipsisLoaderProps {
  className?: string;
}

export const EllipsisLoader = ({ className }: IEllipsisLoaderProps) => {
  return (
    <div className={classNames(styles.EllipsisLoader, {}, [className])}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
