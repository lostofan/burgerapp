import '../src/style.css'
import logo from "../src/logo.png"
import phone from "../src/phoneico.png"
import burger from "../src/main-img.png"

export default function App() {
  return (
    <div className="app-wrapper">
      <header>
      <nav className="menu">
        <div className="menu__left-part">
          <img src={logo} alt="logosss" className="menu__logo" />
          <ul className="menu__list list">
            <li className="list__item list__item_active"><a href="/">Discover</a></li>
            <li className="list__item"><a href="/app">Make Your Burger</a></li>
          </ul>
        </div>
        <div className="menu__right-part">
          <button className="menu__call">
            <img src={phone} alt="" />
            Call Me Back
            </button>
          <p className="menu__phone">8 800 437-87-22</p>
        </div>
      </nav>
      </header>
      <main className="content">
        <p className="content__text">Make <br /> Your <br />Burger</p>
        <button className="content__button">MAKE BURGER</button>
        <img src={burger} alt="" className="content__bg" />
      </main>
      <footer className="footer">
        <p className="footer__text">2022. Make Your Burger</p>
        <ul className="footer__list list">
          <li className="footer__list-item"><a href="/privacy">Privacy Policy</a></li>
          <li className="footer__list-item"><a href="/terms">Terms & Conditions</a></li>
        </ul>
      </footer>
    </div>
  )
}
