import { ActionDataType } from '../Types/ActionTypes';
import { useAppDispatch, useAppSelector } from '../redux/hook';
import { addIngCounter, selectIsFinished, subIngCounter } from '../redux/ingridientCounterSlice';

export const usePicker = () => {
  const dispatch = useAppDispatch();
  const isFinished = useAppSelector(selectIsFinished);

  const addIngridient = ({ counter, name, oz, kcal, price }: ActionDataType) => {
    dispatch(addIngCounter({ counter, name, oz, kcal, price }));
  };

  const subIngridient = ({ counter, name, oz, kcal, price }: ActionDataType) => {
    dispatch(subIngCounter({ counter, name, oz, kcal, price }));
  };
  return { addIngridient, subIngridient, isFinished };
};
