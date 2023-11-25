import { Nav } from '../Nav';
import style from './Header.module.scss';
import phone from '../../../Assets/imgs/phoneico.png';
import { BurgerButton } from '../../BurgerButton';
import { Button } from '../../Button';
import { useState } from 'react';
import { BurgerMenu } from '../../BurgerMenu/BurgerMenu';
import { createPortal } from 'react-dom';
import logo from '../../../Assets/imgs/logo.png';
import useWindowDimensions from '../../../Hooks/useWindowDimensions';
export default function Header() {
  const [menuActive, setMenuActive] = useState(false);
  const { width } = useWindowDimensions();
  return (
    <header className={style.root}>
      <img src={logo} alt="logo" className={style.logo} />
      {width > 900 ? <Nav /> : false}
      <Button type="call">
        <img src={phone} alt="" />
        Call Me Back
      </Button>
      {createPortal(<BurgerMenu menuActive={menuActive} />, document.body)}
      <p className={style.contacts}>1 337 437-87-22</p>
      <BurgerButton menuActive={menuActive} setMenuActive={setMenuActive} />
    </header>
  );
}
