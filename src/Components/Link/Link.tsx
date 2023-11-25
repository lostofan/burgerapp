import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { ILinkProps } from './Link.types';
import style from './Link.module.scss';

export const Link: FC<ILinkProps> = ({ type, children }) => {
  return (
    <NavLink to={`/${type}`} className={style[type]}>
      {children}
    </NavLink>
  );
};
