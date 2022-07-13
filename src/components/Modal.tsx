import '../styles/modal.scss'
import focus from "../imgs/focus-line.png"
import { useAppDispatch, useAppSelector } from '../redux/hook';
import { showModal } from '../redux/showModalSlice';


export default function Modal() {
  const dispatch = useAppDispatch();
  const isVisible = useAppSelector(state => state.showModal.isModalVisible);
  return (
    <div className={`modal__wrapper animate__animated animate__${(isVisible) ? "fadeInRightBig" : "fadeOutRightBig"}`}>
      <div className="modal">
        <div className="modal__article">
        <img src={focus} alt="" />
        <p>Checkout</p>
        <button onClick={()=> dispatch(showModal())}>&times;</button>
        </div>
        <div className="modal__content">
          <input className="modal__input" type="name" placeholder="name"/>
          <input className="modal__input" type="number" name="" id="" placeholder="phone"/>
          <input className="modal__input" type="address" placeholder="address"/>
          <input className="modal__input" type="time"/>
        </div>
        <div className="modal__btns">
          <button onClick={()=> dispatch(showModal())} 
          className="modal__cancel modal__btn">
            Cancel
          </button>
          <button className="modal__checkout modal__btn">
            Checkout
          </button>
        </div>
      </div>
    </div>
  )
}