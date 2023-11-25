import { ReactNode } from 'react';

export interface IButtonProps {
  type: string;
  children: ReactNode;
  onClick?: () => void;
  isDisabled?: boolean;
}
