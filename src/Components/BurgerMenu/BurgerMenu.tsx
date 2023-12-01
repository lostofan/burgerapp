import React from 'react';
import style from './BurgerMenu.module.scss';
import { Nav } from '../Sections/Nav';
interface IBurgerMenuProps {
  menuActive: boolean;
}
export const BurgerMenu: React.FC<IBurgerMenuProps> = ({ menuActive }) => {
  return (
    <div className={menuActive ? style.root : style.hidden}>
      <Nav />
    </div>
  );
};
