// Header.js
import React from 'react';
import '../hojas-de-estilo/HeaderUser.css';
import logo from '../imagenes/LogoReducido.png';
import perfil from '../imagenes/mugshot.jpeg';

function HeaderUser() {
  return (
    <header className="Header">
      <nav className='izquierda'>
            <a href="/User" class='logo'><img src={logo} alt="logo" className="logored" /></a>
            <a href="/">Cerrar Sesión</a>
      </nav>
      <nav className='derecha'>
            <a href="/User" className='login'>Hola Gabriela Molina</a>  
            <img 
                src={perfil} // Sustituye con la ruta a tu imagen.
                alt="Descripción" // Proporciona una descripción alternativa de la imagen.
                className="perfil"
                />
      </nav>
    </header>
  );
}

export default HeaderUser;