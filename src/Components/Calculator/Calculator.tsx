import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { addTopBun, resetBurger } from '../../redux/ingridientCounterSlice';
import { showModal } from '../../redux/showModalSlice';
import { Button } from '../Button';
import { Counter } from '../Counter';
import style from './Calculator.module.scss';

export const Calculator = () => {
  const calculated = useAppSelector((state) => state.ingCounter.calc);
  const dispatch = useAppDispatch();
  const topBunSelector = useAppSelector((state) => state.ingCounter.topBun);
  const isFinished = useAppSelector((state) => state.ingCounter.isFinished);
  const giftCheck = useAppSelector((state) => state.ingCounter.calc.priceCount);
  return (
    <div className={style.root}>
      <p className={style.title}>Summary</p>
      <div className={style.sum}>
        <span className={style.value}>{'$' + calculated.priceCount.toFixed(2)}</span>
        <Button type="mainBtn" onClick={() => dispatch(showModal())}>
          Checkout
        </Button>
      </div>
      <span
        className={style.promo}
        style={
          giftCheck >= 7
            ? {
                backgroundColor: '#f5f5ff',
                padding: '10px',
                borderRadius: '25px',
                textDecoration: 'line-through',
              }
            : { color: 'inherit' }
        }>
        Build a <span>$7</span> Burger and Get a Gift
      </span>
      <Counter />
      <div className={style.control}>
        <Button
          type="mainBtn"
          isDisabled={isFinished}
          onClick={() => dispatch(addTopBun({ oz: topBunSelector.oz, kcal: topBunSelector.kcal }))}>
          Finish burger
        </Button>
        <Button type="mainBtn" onClick={() => dispatch(resetBurger())}>
          Reset burger
        </Button>
      </div>
    </div>
  );
};
