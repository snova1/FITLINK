// Header.js
import React from 'react';
import '../hojas-de-estilo/Header.css';
import logo from '../imagenes/LogoReducido.png';

function Header() {
  return (
    <header className="Header">
      <nav className='left-side'>
            <a href="/" class='logo'><img src={logo} alt="logo" className="logored" /></a>
            <a href="/Empresa">Empresa</a>
            <a href="#">Aliados</a>
            <a href="/planes">Planes</a>
            <a href="#">Quiero ser aliado</a>
      </nav>
      <nav className='right-side'>
            <a href="#" className='login'>Iniciar Sesión</a>  
            <a href="#" className='signup'>Registrate</a>
      </nav>
    </header>
  );
}

export default Header;