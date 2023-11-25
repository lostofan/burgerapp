import React from 'react';
import style from './Counter.module.scss';
import { CounterItem } from '../CounterItem';
import { useAppSelector } from '../../redux/hook';

export const Counter = () => {
  const calculated = useAppSelector((state) => state.ingCounter.calc);
  return (
    <div className={style.root}>
      <CounterItem type="time">0 min</CounterItem>
      <CounterItem type="oz">{calculated.ozCount.toFixed(0) + 'oz'}</CounterItem>
      <CounterItem type="kcal">{calculated.kcalCount.toFixed(0) + 'kcal'}</CounterItem>
    </div>
  );
};
