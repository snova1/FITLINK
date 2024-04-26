// Header.js
import React from 'react';
import '../hojas-de-estilo/Header.css';
import logo from '../imagenes/LogoReducido.png';

function Header() {
  return (
    <header className="Header">
      <nav className='izquierda'>
            <a href="/" class='logo'><img src={logo} alt="logo" className="logored" /></a>
            <a href="/Empresa">Empresa</a>
            <a href="#">Aliados</a>
            <a href="/planes">Planes</a>
            <a href="/RegisterAlly">Quiero ser aliado</a>
      </nav>
      <nav className='derecha'>
            <a href="/Login" className='login'>Iniciar Sesión</a>  
            <a href="/Register" className='signup'>Registrate</a>
      </nav>
    </header>
  );
}

export default Header;