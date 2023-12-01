import React, { FC } from 'react';
import focus from '../../Assets/imgs/focus-line.png';
import { Form } from '../Form';

export const CheckoutModalHeader: FC = () => {
  return (
    <>
      <img src={focus} alt="" />
      <span>Checkout</span>
    </>
  );
};
export const CheckoutModalContent: FC = () => {
  return <Form />;
};
