import React from 'react';
import '../hojas-de-estilo/Header.css';
import logo from '../imagenes/LogoReducido.png';
import gym_logo from '../imagenes/gym_logo.png';

function GymHeader() {
  return (
    <header className="Header">
      <nav className='left-side'>
            <a href="/" class='logo'><img src={logo} alt="logo" className="logored" /></a>
            <a href="#">Cerrar sesión</a>
      </nav>
      <nav className='right-side'>
            <a className='login'>Golden Gym</a>  
            <a className='gym_logo'><img src={gym_logo} alt="gym_logo" className="gym_logo" /></a>
      </nav>
    </header>
  );
}

export default GymHeader;