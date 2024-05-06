import React, { useState } from 'react';
import Header from '../componentes/HeaderUser';
import '../hojas-de-estilo/UserGym.css';
import Footer from '../Footer'
import gym_logo from '../imagenes/gym_logo.png';
import CommentModal from '../componentes/ComentModal';

function UserGym(){
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
    return (
        <div className="gym-user-dashboard">
            <Header />
          <div className='gym-top'>
          <div className="map-section">
          </div>
          <div className="gym-info">
          <p className="gym-name">Golden Gym</p>
          <ul className="gym-data">
            <li><span className="data-type">Correo:</span> <span className="data-value">goldengym@example.com</span></li>
            <li><span className="data-type">Ciudad:</span> <span className="data-value">Bogotá</span></li>
            <li><span className="data-type">Localidad:</span> <span className="data-value">Barrios Unidos</span></li>
            <li><span className="data-type">Dirección:</span> <span className="data-value">Calle 68 #60 - 58</span></li>
            <li><span className="data-type">Teléfono:</span> <span className="data-value">6842597</span></li>
          </ul>
          <div className="schedule">
            <h2 className="schedule-title">Horario de atención</h2>
            <p className="schedule-description">De lunes a viernes</p>
            <p className="schedule-hours">8:00am - 8:00pm</p>
          </div>
          </div>          
          <div className="profile-picture">
                <img src={gym_logo} alt='gym_logo' className='gym-logo'/>
            </div>
          </div>
          <div className="image-scroll">
          </div>
          <h2>Maquinas disponibles</h2>
          <div className="machine-scroll">
          </div>
          <div className="comments-section">
            <h2 className="comments-title">Comentarios</h2>
            {/* Sección de comentarios */}
            <button className="new-comments-button" onClick={openModal}>
              Deja tus comentarios
            </button>
          </div>
          {isModalOpen && <CommentModal onClose={closeModal} />}
          <Footer />
        </div>
    );
}

export default UserGym;