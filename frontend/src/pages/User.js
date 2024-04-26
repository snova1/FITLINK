// UserProfile.js
import React, { useState } from 'react';
import '../hojas-de-estilo/User.css';
import Header from '../componentes/HeaderUser';
import Footer from '../Footer'
import logo from '../imagenes/LogoReducido.png';

function User() {
  // Estado local con datos de ejemplo
  const [userData, setUserData] = useState({
    nombre: 'Gabriela',
    apellidos: 'Molina',
    edad: '30',
    peso: '60 kg',
    estatura: '160 cm',
    email: 'gmolina@gmail.com',
    ciudad: 'Bogotá',
    direccion: 'Cll 14 #16-06',
    identificacion: '123456789',
    inicio_suscripcion: '02/02/2024',
    dias: '9'
  });

  // Estado local para la recomendación de entrenamiento
  const [entrenamiento, setEntrenamiento] = useState('Tren Superior');

  // Función para cambiar la recomendación de entrenamiento
  const cambiarRecomendacion = () => {
    setEntrenamiento(entrenamiento === 'Tren Superior' ? 'Tren Inferior' : 'Tren Superior');
  };

  // Puedes añadir aquí la lógica para navegar a otras páginas

  return (
    <div className="User">
        <Header />

        <div className="user-profile">
            <div className="left-side">
                {/* Foto y datos del usuario */}
                <div className="profile-pic"></div>
                <h1>Hola {userData.nombre} {userData.apellidos}</h1>
                <div className="user-data">
                <h2>Tus datos:</h2>
                <p>Edad: <span>{userData.edad}</span></p>
                <p>Peso: <span>{userData.peso}</span></p>
                <p>Estatura: <span>{userData.estatura}</span></p>
                <p>Correo: <span>{userData.email}</span></p>
                <p>Ciudad: <span>{userData.ciudad}</span></p>
                <p>Dirección: <span>{userData.direccion}</span></p>
                <p>Identificación: <span>{userData.identificacion}</span></p>
                </div>
                <a href="/UserEdit" className='modinfo'>Modificar info</a>
            </div>
            <div className="right-side">
                <div className="red-container">
                    <img 
                        src={logo} // Sustituye con la ruta a tu imagen.
                        alt="Descripción" // Proporciona una descripción alternativa de la imagen.
                        className="container-image"
                    />
                    <p className="text">Tu plan:</p>
                    <p className="text">Plan Activo hasta</p>
                    <p className='text'><span>{userData.inicio_suscripcion}</span></p>
                    <a href="#" className='boton-contenedor'>Cambiar de plan</a>
                    <a href="#" className='boton-contenedor'>Cancelar suscripción</a>
                </div>

                <div className="red-container">
                    <img 
                        src={logo} // Sustituye con la ruta a tu imagen.
                        alt="Descripción" // Proporciona una descripción alternativa de la imagen.
                        className="container-image"
                    />
                    <p className="text">Actividad del mes</p>
                    <p className="text">Este mes has ido al gimnasio:</p>
                    <p className='text-dias'><span>{userData.dias}</span></p>
                    <p className="text">días</p>
                </div>

                <div className="red-container">
                    <img 
                        src={logo} // Sustituye con la ruta a tu imagen.
                        alt="Descripción" // Proporciona una descripción alternativa de la imagen.
                        className="container-image"
                    />
                    <p className="text">Hoy te recomendamos entrenar:</p>
                    <p className='text'><span>{entrenamiento}</span></p>
                    <a href="#" className='boton-contenedor'>Plan de entrenamiento</a>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  );
}

export default User;

