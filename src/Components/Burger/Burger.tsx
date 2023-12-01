import React from 'react';
import bg from '../../Assets/imgs/bg.png';
import bun from '../../Assets/imgs/bun_bottom.png';
import { useAppSelector } from '../../redux/hook';
import style from './Burger.module.scss';
import { Ingridient } from '../Ingridient';
import { Gift } from '../Gift';
import { selectPickedIngridients } from '../../redux/ingridientCounterSlice';
export const Burger = () => {
  const ingridients = useAppSelector(selectPickedIngridients);
  return (
    <div className={style.root}>
      <img className={style.bg} src={bg} alt="" />
      <div className={style.wrapper}>
        {ingridients.map((item, idx) => (
          <Ingridient key={item + idx} type={item} idx={idx} />
        ))}
        <Gift />
      </div>
      <img className={style.baseBun} src={bun} alt="" />
    </div>
  );
};
