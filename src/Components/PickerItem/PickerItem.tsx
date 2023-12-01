import React, { FC } from 'react';
import { IPickerItemProps } from './PickerItem.type';
import style from './PickerItem.module.scss';
import { Button } from '../Button';
import { firstLetterToUpperCase } from '../Utils/firstLetterToUppercase';
import { usePicker } from '../../Hooks/usePicker';

export const PickerItem: FC<IPickerItemProps> = ({ name, icon, counter, oz, kcal, price }) => {
  const { addIngridient, subIngridient, isFinished } = usePicker();
  return (
    <div className={style.root}>
      <div className={style.icon}>
        <img src={require(`../../Assets/imgs/picker/${icon}`)} alt="" />
      </div>
      <span className={style.title}>{firstLetterToUpperCase(name)}</span>
      <div className={style.control}>
        <Button type="picker" onClick={() => subIngridient({ counter, name, oz, kcal, price })}>
          <svg
            width="12"
            height="2"
            viewBox="0 0 12 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1.33325 1H10.6666"
              stroke="#5243C2"
              strokeWidth="2"
              strokeLinecap="square"
              strokeLinejoin="round"
            />
          </svg>
        </Button>
        <span className={style.value}>{counter}</span>
        <Button
          type="picker"
          isDisabled={isFinished}
          onClick={() => addIngridient({ counter, name, oz, kcal, price })}>
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M4.33325 4.33331V0.333313H5.66659V4.33331H9.66659V5.66665H5.66659V9.66665H4.33325V5.66665H0.333252V4.33331H4.33325Z"
              fill="#5243C2"
            />
          </svg>
        </Button>
      </div>
    </div>
  );
};
