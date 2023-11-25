import { ReactNode } from 'react';

export interface ICounterItemProps {
  type: 'time' | 'oz' | 'kcal';
  children: ReactNode;
}
