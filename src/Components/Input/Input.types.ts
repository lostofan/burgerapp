import { ReactNode } from 'react';

export interface IInputProps {
  type: 'name' | 'phone' | 'address' | 'time';
  label: string;
  placeholder: string;
  children: ReactNode;
  icon?: string;
  input: ICredentials;

  setInput: React.Dispatch<React.SetStateAction<ICredentials>>;
}
export interface ICredentials {
  name: string;
  phone: string;
  address: string;
  time: string;
}
