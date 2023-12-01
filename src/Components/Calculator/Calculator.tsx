import { FC, useState } from 'react';
import { useCalculator } from '../../Hooks/useCalculator';
import { Button } from '../Button';
import { Counter } from '../Counter';
import style from './Calculator.module.scss';
import { ModalLayout } from '../../Layouts/ModalLayout';
import { CheckoutModalContent, CheckoutModalHeader } from '../CheckoutModal';
interface ICalculatorProps {
  showCalculator: boolean;
}
export const Calculator: FC<ICalculatorProps> = ({ showCalculator }) => {
  const [showModal, setShowModal] = useState(false);
  const { priceCount, isFinished, handleResetBurger, hadleFinish } = useCalculator();
  const promoStyle = priceCount >= 7 && {
    backgroundColor: '#f5f5ff',
    borderRadius: '25px',
    textDecoration: 'line-through',
  };
  return (
    <div className={`${style.root} ${showCalculator ? style.slideout : style.slidein}`}>
      <p className={style.title}>Summary</p>
      <div className={style.sum}>
        <span className={style.value}>{'$' + priceCount.toFixed(2)}</span>
        <Button type="mainBtn" onClick={() => setShowModal(!showModal)} isDisabled={!isFinished}>
          Checkout
        </Button>
        {showModal && (
          <ModalLayout
            setShowModal={setShowModal}
            modalTitle={<CheckoutModalHeader />}
            modalContent={<CheckoutModalContent />}
          />
        )}
      </div>
      <span className={style.promo} style={promoStyle || {}}>
        Build a <span>$7</span> Burger and Get a Gift
      </span>
      <Counter />
      <div className={style.control}>
        <Button type="mainBtn" isDisabled={isFinished} onClick={hadleFinish}>
          Finish
        </Button>
        <Button type="mainBtn" onClick={handleResetBurger}>
          Reset
        </Button>
      </div>
    </div>
  );
};
