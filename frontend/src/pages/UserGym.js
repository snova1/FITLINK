import React, { useState } from 'react';
import Header from '../componentes/HeaderUser';
import '../hojas-de-estilo/UserGym.css';
import Footer from '../Footer'
import gym_logo from '../imagenes/gym_logo.png';
import CommentModal from '../componentes/CommentModal';

function UserGym(){
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [comments, setComments] = useState([]); // Estado para almacenar los comentarios
  const [ratings, setRatings] = useState([]); // Estado para almacenar las calificaciones

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Función para agregar un nuevo comentario y calificación
  const addCommentAndRating = (comment, rating) => {
    setComments([...comments, comment]);
    setRatings([...ratings, rating]);
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
            {comments.map((comment, index) => (
            <div key={index} className="comment">
            <p>{comment}</p>
            <p>Calificación: {ratings[index]} estrellas</p>
            </div>
          ))}
          <button className="new-comments-button" onClick={openModal}>
            Deja tus comentarios
          </button>
          </div>
      {/* Renderizar el modal */}
      {isModalOpen && <CommentModal onClose={closeModal} onCommentSubmit={addCommentAndRating} />}
          <Footer />
        </div>
    );
}

export default UserGym;