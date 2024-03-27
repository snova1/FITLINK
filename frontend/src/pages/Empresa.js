import React, { useState } from 'react';
import '../PQRS.css'
import Footer from '../Footer';
import '../hojas-de-estilo/Empresa.css';
import Header from '../componentes/Header';
import mujer from '../imagenes/1.png';
import hombre from '../imagenes/2.png';
import vision from '../imagenes/vision.jpeg';
import mision from '../imagenes/mision.jpeg';

function Empresa() {
  return (
    <div className="Home">
        <Header />
        <div className="container1">
            <img src={mujer} alt="mujer" />
            <div className="text">
                <h1>¿Quiénes somos?</h1>
                <p>
                    FITLINK es una herramienta que ayuda a sus usuarios a 
                    seguir una vida sana y saludable, ofreciéndoles los 
                    servicios de geolocalización de gimnasios cercanos a su 
                    ubicación y su ingreso por medio de nuestro servicio web.
                </p>
            </div>
            <img src={hombre} alt="hombre" />
        </div>
        <div className="container2">
            <div className="text">
                <h1>Visión</h1>
                <p>
                Para el 2029 seremos la red de gimnasios más grande de Bogotá, 
                transformando la industria fitness, fortaleciendo y empoderando 
                a los pequeños gimnasios de la ciudad.
                </p>
            </div>
            <img src={vision} alt="vision" />
        </div>
        <div className="container3">
            <img src={mision} alt="mision" />
            <div className="text">
                <h1>Misión</h1>
                <p>
                Facilitar el acceso a una vida fitness al conectar y unificar 
                pequeños gimnasios bajo un mismo sistema, apoyando a estos 
                negocios para competir contra las grandes cadenas y promoviendo 
                una vida activa y saludable a nuestros usuarios.
                </p>
            </div>
        </div>
        <Footer /> 
    </div>
  );
}

export default Empresa;