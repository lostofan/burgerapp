import React, { FC } from 'react';
import style from './Title.module.scss';
import { ITitleProps } from './Title.types';

export const Title: FC<ITitleProps> = ({ children }) => {
  return <h1 className={style.root}>{children}</h1>;
};
