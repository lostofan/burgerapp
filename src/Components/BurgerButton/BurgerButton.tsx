import React from 'react';
import style from './BurgerButton.module.scss';
import { IBurgerButtonProps } from './BurgerButton.types';

export const BurgerButton: React.FC<IBurgerButtonProps> = ({ menuActive, setMenuActive }) => {
  return (
    <div>
      <div
        className={!menuActive ? style.root : `${style.root} ${style.opened}`}
        onClick={() => setMenuActive(!menuActive)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};
