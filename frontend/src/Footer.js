// Footer.js
import React from 'react';
import './Footer.css';
import logo from './logo.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section">
      <img src={logo} alt="logo" />
      </div>
      <div className="divider"></div>
      <div className="footer-section">
        <a href="#">Terminos y condiciones</a>
        <br />
        <a href="#">Politica de privacidad</a>
        <br />
        <a href="#">PQRS</a>
      </div>
      <div className="divider"></div>
      <div className="footer-section">
        <a href="#">Empresa</a>
        <br />
        <a href="#">Aliados</a>
        <br />
        <a href="#">Planes</a>
      </div>
      <div className="footer-section">
        <a href="#"><i className="fab fa-facebook"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
      </div>
    </footer>
  );
}

export default Footer;
