import React, { useState } from 'react';
import { Input } from '../Input/Input';
import { Button } from '../Button';
import style from './Form.module.scss';
import phone from '../../Assets/imgs/modal/phone.svg';
import name from '../../Assets/imgs/modal/name.svg';
import address from '../../Assets/imgs/modal/shipping.svg';

export const Form = () => {
  const [credentials, setCredentials] = useState({ name: '', phone: '', address: '', time: '' });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(credentials);
  };
  return (
    <form className={style.root} onSubmit={(e) => handleSubmit(e)}>
      <div className={style.inputs}>
        <Input
          label="name"
          type="name"
          placeholder="Enter name"
          icon={name}
          input={credentials}
          setInput={setCredentials}>
          Your Name
        </Input>
        <Input
          label="phone"
          type="phone"
          placeholder="+79040000001"
          icon={phone}
          input={credentials}
          setInput={setCredentials}>
          Phone Number
        </Input>
        <Input
          label="address"
          type="address"
          placeholder="Enter address"
          icon={address}
          input={credentials}
          setInput={setCredentials}>
          Shipping Address
        </Input>
        <Input
          label="time"
          type="time"
          placeholder=""
          input={credentials}
          setInput={setCredentials}>
          Time to Delivery
        </Input>
      </div>
      <div className={style.submit}>
        <Button type="mainBtn">Checkout</Button>
      </div>
    </form>
  );
};
