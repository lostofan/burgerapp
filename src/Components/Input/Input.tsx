import React, { FC } from 'react';
import { IInputProps, ICredentials } from './Input.types';
import style from './Input.module.scss';

export const Input: FC<IInputProps> = ({
  label,
  type,
  placeholder,
  icon,
  input,
  setInput,
  children,
}) => {
  return (
    <label htmlFor={label} className={style.root}>
      {icon ? <img className={style.icon} src={icon} alt="" /> : false}
      <div className={style.text}>
        <span className={style.title}>{children}</span>
        <input
          className={style.input}
          type={type}
          id={label}
          placeholder={placeholder}
          value={input[type as keyof ICredentials]}
          autoComplete="off"
          onChange={(e) => setInput({ ...input, [type as keyof ICredentials]: e.target.value })}
        />
      </div>
    </label>
  );
};
