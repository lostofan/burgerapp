import { useAppDispatch, useAppSelector } from '../redux/hook';
import {
  addTopBun,
  resetBurger,
  selectCalc,
  selectIsFinished,
  selectTopBun,
} from '../redux/ingridientCounterSlice';

export const useCalculator = () => {
  const dispatch = useAppDispatch();
  const { priceCount } = useAppSelector(selectCalc);
  const topBunSelector = useAppSelector(selectTopBun);
  const isFinished = useAppSelector(selectIsFinished);
  const handleResetBurger = () => {
    dispatch(resetBurger());
  };
  const hadleFinish = () => {
    dispatch(addTopBun({ oz: topBunSelector.oz, kcal: topBunSelector.kcal }));
  };
  return { priceCount, isFinished, handleResetBurger, hadleFinish };
};
