import React from 'react';
import style from './HomePage.module.scss';
import burger from '../../Assets/imgs/main-img.png';
import { Link } from '../../Components/Link';
import { Title } from '../../Components/Title';

export const HomePage = () => {
  return (
    <div className={`${style.root} animate__animated animate__fadeInDownBig`}>
      <Title>
        Make <br /> Your <br /> Burger
      </Title>
      <Link type="app">MAKE BURGER</Link>
      <img src={burger} alt="" className={style.bg} />
    </div>
  );
};
