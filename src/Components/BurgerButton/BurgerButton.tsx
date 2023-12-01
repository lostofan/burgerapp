import React from 'react';
import style from './BurgerButton.module.scss';
import { IBurgerButtonProps } from './BurgerButton.types';

export const BurgerButton: React.FC<IBurgerButtonProps> = ({ menuActive, setMenuActive }) => {
  const toggleModal = () => {
    setMenuActive(!menuActive);
  };
  return (
    <div>
      <div
        className={!menuActive ? style.root : `${style.root} ${style.opened}`}
        onClick={toggleModal}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};
