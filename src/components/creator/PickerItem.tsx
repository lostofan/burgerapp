import React from "react"
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { addIngCounter, subIngCounter } from "../../redux/ingridientCounterSlice";

interface PickerItemProps {
name: string;
icon: string;
counter: number;
oz: number;
kcal: number;
price: number;

}


const PickerItem:React.FC<PickerItemProps> = ({name, icon, counter, oz, kcal, price}) => {
 const dispatch = useAppDispatch();
 const isFinished = useAppSelector(state => state.ingCounter.isFinished);
return (
  <div className="picker__item">
        <div className="picker__img"><img src={require(`../../imgs/${icon}`)} alt="" /></div>
        <div className="picker__name">{name}</div>
        <div className="picker__control">
          <button onClick={() => 
              dispatch(subIngCounter({counter, name, oz, kcal, price}))} 
              disabled={(counter <= 0 || isFinished) ? true : false}>
                –
          </button>
          <div>{counter}</div>
          <button 
            onClick={() => dispatch(addIngCounter({counter, name, oz, kcal, price}))}
            disabled={(isFinished) ? true : false}>
              +
          </button>
        </div>
    </div>
  )
}

export default PickerItem;