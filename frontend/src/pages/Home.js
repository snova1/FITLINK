import React, { useState } from 'react';
import '../PQRS.css'
import Footer from '../Footer';
import '../hojas-de-estilo/Home.css';
import Header from '../componentes/Header';
import logoB from '../imagenes/LogoBlanco.png';
import slogan from '../imagenes/slogan.png';
import info from '../imagenes/info.png';
import logoN from '../imagenes/logodown.png';

function Home() {
  return (
    <div className="Home">
        <Header />

        <div className="home-image">
            <div className="button-container">
                <img src={logoB} alt='logo' />
                <h2>¡Encuentra tu gimnasio perfecto</h2>
                <h2>en un instante con FITLINK!</h2>
                <a href='#' className='btn'>¡Quiero unirme al club!</a> 
            </div>
            <img src={slogan} alt='slogan' />
            <img src={info} alt='info'/>
            <img src={logoN} alt='down' />
        </div>
        <Footer /> 
    </div>
  );
}

export default Home;