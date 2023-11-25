import focus from '../../Assets/imgs/focus-line.png';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { showModal } from '../../redux/showModalSlice';
import { Button } from '../Button';
import { Form } from '../Form';
import style from './Modal.module.scss';

export const Modal = () => {
  const dispatch = useAppDispatch();
  const isVisible = useAppSelector((state) => state.showModal.isModalVisible);
  return (
    <div
      className={`${style.root} animate__animated animate__${
        isVisible ? 'fadeInRightBig' : 'fadeOutRightBig'
      }`}>
      <div className={style.container}>
        <div className={style.title}>
          <img src={focus} alt="" />
          <span>Checkout</span>
          <Button type="close" onClick={() => dispatch(showModal())}>
            &times;
          </Button>
        </div>
        <Form />
      </div>
    </div>
  );
};
