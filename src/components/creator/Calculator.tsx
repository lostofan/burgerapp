import time from "../../imgs/timeico.png"
import oz from "../../imgs/ozico.png"
import kcal from "../../imgs/kcalico.png"
import { useAppDispatch, useAppSelector } from "../../redux/hook"
import { addTopBun, resetBurger } from "../../redux/ingridientCounterSlice";
import "../../styles/calculator.scss"
import { showModal } from "../../redux/showModalSlice";

export default function Calculator() {
    const calculated = useAppSelector(state => state.ingCounter.calc);
    const dispatch = useAppDispatch();
    const topBunSelector = useAppSelector(state => state.ingCounter.topBun);
    const isFinished = useAppSelector(state => state.ingCounter.isFinished);
    const giftCheck = useAppSelector( (state) => state.ingCounter.calc.priceCount);

    
  return (
    <div className="content__calc calc">
            <p className="calc__article">Summary</p>
            <div className="calc__main">
            <p className="calc__sum">
            {"$" + calculated.priceCount.toFixed(2)}
            </p>
            <button className="calc__checkout" 
                    onClick={()=> dispatch(showModal())}>Checkout
            </button>
            </div>
            <p className="calc__promo" style={
                (giftCheck >= 10) ? 
                {backgroundColor: "#f5f5ff",
                padding: "10px",
                borderRadius: "25px",
                textDecoration: "line-through"} :
                {color: "inherit"}
                }>
                Build a <span>$10</span> Burger and Get a Gift
            </p>
            <div className="calc__counter counter">
                <div className="counter__item">
                    <img className="counter__icon" src={time} alt="" />
                    <p className="counter__value">0 min
                    
                    </p>
                </div>
                <div className="counter__item">
                    <img className="counter__icon" src={oz} alt="" />
                    <p className="counter__value">
                    {calculated.ozCount.toFixed(0) + "oz"}
                    </p>
                </div>
                <div className="counter__item">
                    <img className="counter__icon" src={kcal} alt="" />
                    <p className="counter__value">
                    {calculated.kcalCount.toFixed(0) + "kcal"}
                    </p>
                </div>
            </div>
            <div className="calc__finish">
                <button className="finish_btn" onClick={
                    () => dispatch(addTopBun({oz: topBunSelector.oz, kcal: topBunSelector.kcal}))
                }
                disabled={isFinished}
                >Finish burger</button>
                <button className="finish_btn" onClick={
                    () => dispatch(resetBurger())
                }
                >Reset burger</button>
            </div>
        </div>
  )
}
