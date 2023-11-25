import React, { FC } from 'react';
import style from './CounterItem.module.scss';
import { ICounterItemProps } from './CounterItem.type';
export const CounterItem: FC<ICounterItemProps> = ({ type, children }) => {
  return (
    <div className={style.root}>
      <img className={style.icon} src={require(`../../Assets/imgs/${type}ico.png`)} alt="" />
      <span className={style.value}>{children}</span>
    </div>
  );
};
