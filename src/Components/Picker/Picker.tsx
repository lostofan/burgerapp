import React from 'react';
import { useAppSelector } from '../../redux/hook';
import style from './Picker.module.scss';
import { PickerItem } from '../PickerItem';
import { selectIngridients } from '../../redux/ingridientCounterSlice';
export const Picker = () => {
  const ingridients = useAppSelector(selectIngridients);

  return (
    <div className={style.root}>
      {Object.entries(ingridients).map(([key, value], i) => (
        <div className={style.item} key={i}>
          <PickerItem
            name={key}
            icon={key.toLowerCase() + '.png'}
            counter={value.count}
            oz={value.oz}
            kcal={value.kcal}
            price={value.price}
          />
        </div>
      ))}
    </div>
  );
};
