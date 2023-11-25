import React from 'react';
import style from './Button.module.scss';
import { IButtonProps } from './Button.types';
export const Button: React.FC<IButtonProps> = ({ type, children, onClick, isDisabled }) => {
  return (
    <button
      className={style[type]}
      onClick={onClick ? () => onClick() : () => {}}
      disabled={isDisabled}>
      {children}
    </button>
  );
};
