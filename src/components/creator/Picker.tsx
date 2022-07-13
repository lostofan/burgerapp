import { useAppSelector } from "../../redux/hook";
import PickerItem from "./PickerItem";
import '../../styles/picker.scss'

export default function Picker() {
  const ingridients = useAppSelector(state => state.ingCounter.ingridients)
    return (
    <div className="content__picker picker">
        

        {Object.entries(ingridients).map( (a, i) => 
        <PickerItem name={a[0]} 
        icon={a[0].toLowerCase() + ".png"} 
        counter={a[1].count} 
        key={i}
        oz={a[1].oz}
        kcal={a[1].kcal}
        price={a[1].price}
        />)}
    </div>
  )
}
