import React from 'react'
import '../styles/footer.scss'

export default function Footer() {
  return (
    <footer className="footer">
    <p className="footer__text">2022. Make Your Burger</p>
    <ul className="footer__list list">
      <li className="footer__list-item"><a href="/privacy">Privacy Policy</a></li>
      <li className="footer__list-item"><a href="/terms">Terms & Conditions</a></li>
    </ul>
  </footer>
  )
}
