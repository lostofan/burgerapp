import { useAppSelector } from "../../redux/hook";
import PickerItem from "./PickerItem";
import '../../styles/picker.scss'

export default function Picker() {
  const ingridients = useAppSelector(state => state.ingCounter.ingridients)
    return (
    <div className="content__picker picker">
        

        {Object.entries(ingridients).map( ([first, second], i) => 
        <PickerItem name={first} 
        icon={first.toLowerCase() + ".png"} 
        counter={second.count} 
        key={i}
        oz={second.oz}
        kcal={second.kcal}
        price={second.price}
        />)}
    </div>
  )
}
