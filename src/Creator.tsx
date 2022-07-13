import Burger from "./components/creator/Burger"
import Calculator from "./components/creator/Calculator"
import Picker from "./components/creator/Picker"

import "./styles/creator.scss"



export default function Creator() {
  return (
    <div className="content__wrapper animate__animated animate__fadeInDownBig">
    <div className="content">
    <p className="content__text">Make <br /> Your <br />Burger</p>
        <Burger />
        <Calculator />
    </div>
    <Picker />
    </div>
  )
}
