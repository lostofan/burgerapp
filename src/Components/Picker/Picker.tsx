import React from 'react';
import { useAppSelector } from '../../redux/hook';
import style from './Picker.module.scss';
import { PickerItem } from '../PickerItem';
export const Picker = () => {
  const ingridients = useAppSelector((state) => state.ingCounter.ingridients);

  return (
    <div className={style.root}>
      {Object.entries(ingridients).map(([key, value], i) => (
        <PickerItem
          name={key}
          icon={key.toLowerCase() + '.png'}
          counter={value.count}
          key={i}
          oz={value.oz}
          kcal={value.kcal}
          price={value.price}
        />
      ))}
    </div>
  );
};
