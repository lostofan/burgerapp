import { useAppSelector } from "../../redux/hook";
import PickerItem from "./PickerItem";
import '../../styles/picker.scss'

export default function Picker() {
  const ingridients = useAppSelector(state => state.ingCounter.ingridients)
    return (
    <div className="content__picker picker">
        

        {Object.entries(ingridients).map( ([key, value], i) => 
        <PickerItem name={key} 
        icon={key.toLowerCase() + ".png"} 
        counter={value.count} 
        key={i}
        oz={value.oz}
        kcal={value.kcal}
        price={value.price}
        />)}
    </div>
  )
}
