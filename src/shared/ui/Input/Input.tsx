import classNames from 'classnames';
import { type InputHTMLAttributes } from 'react';

import styles from './Input.module.scss';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const Input = (props: IInputProps) => {
  const { className, ...otherProps } = props;

  return <input className={classNames(styles.Input, [className])} type="text" {...otherProps} />;
};
