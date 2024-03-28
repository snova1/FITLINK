// Footer.js
import React from 'react';
import './Footer.css';
import logo from './imagenes/LogoBlanco.png';
import insta from './imagenes/instagram.png';
import fb from './imagenes/facebook.png';
import tiktok from './imagenes/tiktok.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section">
      <img src={logo} style={{ width: '150px', height: '90px' }} alt="logo" />
      </div>
      <div className="divider"></div>
      <div className="footer-section">
        <a href="/TyC">Terminos y condiciones</a>
        <br />
        <a href="/PoliticasDePrivacidad">Politica de privacidad</a>
        <br />
        <a href="/PQRS">PQRS</a>
      </div>
      <div className="divider"></div> 
      <div className="footer-section">
        <a href="/Empresa">Empresa</a>
        <br />
        <a href="#">Aliados</a>
        <br />
        <a href="/planes">Planes</a>
      </div>
      <div className="footer-section">
        <a href="#"><i className="fab fa-facebook"></i><img src={insta} style={{ width: '30px', height: '30px' }} alt="insta" /></a>
        <a href="#"><i className="fab fa-twitter"></i><img src={fb} style={{ width: '30px', height: '30px' }} alt="fb" /></a>
        <a href="#"><i className="fab fa-instagram"></i><img src={tiktok} style={{ width: '30px', height: '30px' }} alt="tiktok" /></a>
      </div>
    </footer>
  );
}

export default Footer;
