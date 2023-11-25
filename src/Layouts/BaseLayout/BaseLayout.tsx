import React, { FC } from 'react';
import Header from '../../Components/Sections/Header/Header';
import Footer from '../../Components/Sections/Footer/Footer';
import style from './BaseLayout.module.scss';
import { IBaseLayoutProps } from './BaseLayout.types';

export const BaseLayout: FC<IBaseLayoutProps> = ({ children }) => {
  return (
    <div className={style.appWrapper}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
