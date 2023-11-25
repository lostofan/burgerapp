import React from 'react';
import style from './Gift.module.scss';
import { useAppSelector } from '../../redux/hook';

export const Gift = () => {
  const giftCheck = useAppSelector((state) => state.ingCounter.calc.priceCount);
  return (
    <div
      className={`${style.root} animate__rotateInDownRight animate__animated`}
      style={giftCheck >= 7 ? { display: 'flex' } : { display: 'none' }}>
      <img src={require(`../../Assets/imgs/gift.png`)} alt="" />
      <span className={style.message}>+ Tomato Ketchup</span>
    </div>
  );
};
