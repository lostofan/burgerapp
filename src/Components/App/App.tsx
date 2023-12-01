import '../../styles/style.scss';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import 'animate.css';

import { BaseLayout } from '../../Layouts/BaseLayout';
import { HomePage } from '../../Pages/HomePage';
import MainPage from '../../Pages/MainPage/MainPage';

export const App = () => {
  return (
    <BrowserRouter>
      <BaseLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/app" element={<MainPage />} />
        </Routes>
      </BaseLayout>
    </BrowserRouter>
  );
};
