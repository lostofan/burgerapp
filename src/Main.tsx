import burger from "./imgs/main-img.png"
import { NavLink } from 'react-router-dom';
import "./styles/main.scss"

export default function Main() {
  return (
    <div className="content animate__animated animate__fadeInDownBig">
    <p className="content__text">Make <br /> Your <br />Burger</p>
        <NavLink to="/app">
            <button className="content__button">MAKE BURGER</button>
        </NavLink>
        <img src={burger} alt="" className="content__bg" />
    </div>
  )
}
