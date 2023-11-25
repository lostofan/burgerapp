import React, { FC } from 'react';
import style from './Ingridient.module.scss';
import { IIngridientProps } from './Ingridient.type';

export const Ingridient: FC<IIngridientProps> = ({ type, idx }) => {
  return (
    <img
      className={`${style[type]} ${style.root} animate__animated animate__bounceInDown`}
      style={{ zIndex: idx }}
      src={require(`../../Assets/imgs/constructor/${type}.png`)}
      alt=""
    />
  );
};
