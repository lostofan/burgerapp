import "./styles/style.scss"
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Main from "./Main"
import Creator from "./Creator"
import Modal from './components/Modal';
import { useAppSelector } from './redux/hook';
import Header from "./components/Header";
import Footer from "./components/Footer";
import 'animate.css';

export default function App() {
  const isModal = useAppSelector(state => state.showModal.isModalAdded);
  return (
    <BrowserRouter>
    <div className="app-wrapper">
       <Header />
      <main>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/app" element={<Creator />} />
        </Routes>
      </main>
    <Footer/>
    </div>
    {(isModal) ? <Modal/> : null}
    </BrowserRouter>
  )
}
