import React from 'react';
import style from './Gift.module.scss';
import { useAppSelector } from '../../redux/hook';
import { selectCalc } from '../../redux/ingridientCounterSlice';

export const Gift = () => {
  const { priceCount } = useAppSelector(selectCalc);
  return (
    <div
      className={`${style.root} animate__rotateInDownRight animate__animated`}
      style={priceCount >= 7 ? { display: 'flex' } : { display: 'none' }}>
      <span className={style.message}>+ Tomato Ketchup</span>
      <img className={style.icon} src={require(`../../Assets/imgs/gift.png`)} alt="" />
    </div>
  );
};
