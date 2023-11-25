import React from 'react';

import { NavLink } from 'react-router-dom';

import style from './Nav.module.scss';
export const Nav = () => {
  return (
    <nav className={style.root}>
      <ul className={style.list}>
        <li className={style.listItem}>
          <NavLink className={({ isActive }) => (isActive ? style.listItem_active : '')} to="/">
            Discover
          </NavLink>
        </li>
        <li className={style.listItem}>
          <NavLink className={({ isActive }) => (isActive ? style.listItem_active : '')} to="/app">
            Make Your Burger
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
