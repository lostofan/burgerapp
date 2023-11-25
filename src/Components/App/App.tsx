import '../../styles/style.scss';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import 'animate.css';
import { useAppSelector } from '../../redux/hook';
import { BaseLayout } from '../../Layouts/BaseLayout';
import { HomePage } from '../../Types/Pages/HomePage';
import MainPage from '../../Types/Pages/MainPage/MainPage';
import { Modal } from '../Modal';

export const App = () => {
  const isModal = useAppSelector((state) => state.showModal.isModalAdded);
  return (
    <BrowserRouter>
      <BaseLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/app" element={<MainPage />} />
        </Routes>
      </BaseLayout>
      {isModal ? <Modal /> : null}
    </BrowserRouter>
  );
};
