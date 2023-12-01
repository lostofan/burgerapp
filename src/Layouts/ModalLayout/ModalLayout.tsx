import { FC, ReactNode } from 'react';

import { Button } from '../../Components/Button';
import style from './ModalLayout.module.scss';
import { createPortal } from 'react-dom';

type ModalLayoutPropsType = {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  modalTitle: ReactNode;
  modalContent: ReactNode;
};
export const ModalLayout: FC<ModalLayoutPropsType> = ({
  setShowModal,
  modalTitle,
  modalContent,
}) => {
  return (
    <>
      {createPortal(
        <div className={`${style.root} animate__animated animate__fadeInRightBig`}>
          <div className={style.container}>
            <div className={style.title}>
              {modalTitle}
              <Button type="close" onClick={() => setShowModal(false)}>
                &times;
              </Button>
            </div>
            {modalContent}
          </div>
        </div>,
        document.body,
      )}
    </>
  );
};
