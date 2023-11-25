import React, { useState } from 'react';
import { Input } from '../Input/Input';
import { Button } from '../Button';
import style from './Form.module.scss';
import phone from '../../Assets/imgs/phone.svg';
import name from '../../Assets/imgs/name.svg';
import shipping from '../../Assets/imgs/shipping.svg';

export const Form = () => {
  const [credentials, setCredentials] = useState({ name: '', phone: '', address: '', time: '' });
  return (
    <form className={style.root} onSubmit={() => alert('send')}>
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
          icon={shipping}
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
