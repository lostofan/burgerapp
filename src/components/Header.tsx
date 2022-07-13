import logo from "../../src/imgs/logo.png"
import phone from "../../src/imgs/phoneico.png"
import { NavLink } from 'react-router-dom';
import burger from "../imgs/menubtn.png";
import close from "../imgs/close.png"

import "../styles/header.scss"
import { useState } from "react";



export default function Header() {
  const [toggled, isToggled] = useState(false);
  const changeStyle = (!toggled) ? {} : {display: "block"};
  return (
    <header>
    <nav className="menu">
        <img src={logo} alt="logosss" className="menu__logo" />
        <ul className={`menu__list list ${(toggled) ? "burger_on" : "burger_off"}`} style={changeStyle}>
          <li className="list__item"><NavLink className={({isActive}) => isActive ? 'list__item_active' : ""} to="/">Discover</NavLink></li>
          <li className="list__item"> <NavLink className={({isActive}) => isActive ? 'list__item_active' : ""} to="/app">Make Your Burger</NavLink></li>
        </ul>
        <button className="menu__call">
          <img src={phone} alt="" />
          Call Me Back
          </button>
          <button onClick={() => (!toggled) ? isToggled(true) : isToggled(false)} className="burger__menu burger__menu_closed burger__menu_opened">
          <img src={(!toggled) ? burger : close} alt="" />
          </button>
        <p className={`menu__phone ${(toggled) ? "burger_phone" : ""}`} style={changeStyle}>8 800 437-87-22</p>
    </nav>
    </header>
  )
}
