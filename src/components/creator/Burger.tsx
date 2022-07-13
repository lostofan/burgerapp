import bun from "../../imgs/bun_bottom.png"
import bg from "../../imgs/bg.png"
import { useAppSelector } from "../../redux/hook"
import '../../styles/burger.scss';

export default function Burger() {
    const ingsArray = useAppSelector( (state) => state.ingCounter.arrayFromIngs);
    const giftCheck = useAppSelector( (state) => state.ingCounter.calc.priceCount);
  return (
     <div className="content__burger">
            <img className="content__background" src={bg} alt="" />
            <div className="burger__wrapper">
                {
            ingsArray.map((item, idx) => 
                <img key={item+idx} 
                className={`burger__item_${item} burger__item animate__animated animate__bounceInDown`} 
                style={{zIndex: idx}} 
                src={require(`../../imgs/constructor/${item}.png`)} 
                alt="" />
                )
            }
            <div 
            className="content__gift animate__rotateInDownRight animate__animated"
            style={
                (giftCheck >= 10) ? 
                {display: "flex"} :
                {display: "none"}
                }>
                <img src={require(`../../imgs/gift.png`)}  alt="" />
                <p><span>+ Tomato Ketchup</span> 1.2oz</p>
            </div>
            </div>
            <img className="content__bun" src={bun} alt="" />
        </div>
  )
}
