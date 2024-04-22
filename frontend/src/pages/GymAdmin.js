import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../hojas-de-estilo/GymAdmin.css';
import Footer from '../Footer';

function GymAdmin() {
  const navigate = useNavigate();
  const handleModifyInfoClick = () => {
    navigate('/GymModify'); 
  };
  return (
    <div className="gym-admin-dashboard">
      <div className="gym-info">
        <div className="profile-picture"></div>
        <p className="gym-greeting">Hola [Nombre del gimnasio]</p>
        <p className="gym-data-title">Tus datos:</p>
        <ul className="gym-data">
          <li><span className="data-type">Correo:</span> <span className="data-value">correo@example.com</span></li>
          <li><span className="data-type">Ciudad:</span> <span className="data-value">Ciudad</span></li>
          <li><span className="data-type">Localidad:</span> <span className="data-value">Localidad</span></li>
          <li><span className="data-type">Dirección:</span> <span className="data-value">Dirección</span></li>
          <li><span className="data-type">Teléfono:</span> <span className="data-value">1234567890</span></li>
        </ul>
        <button className="modify-info-button" onClick={handleModifyInfoClick}>Modificar info</button>
      </div>
      <div className="ingreso-chart">
        <h2 className="chart-title">Tus ingresos mensuales</h2>
        {/* Gráfico de ingresos aquí */}
      </div>
      <div className='rest'>
      <div className="registrar-ingreso">
        <h2 className="registrar-ingreso-title">Registrar ingreso</h2>
        <div className="input-field">
          <input type="text" placeholder="Identificación" />
          <button className="registrar-ingreso-button">Registrar ingreso</button>
        </div>
      </div>
      <div className="image-scroll">
        {/* Scroll de imágenes */}
        <button className="add-image-button">Agregar foto</button>
      </div>
      <div className="machine-scroll">
        {/* Scroll de máquinas */}
        <button className="add-image-button">Agregar máquinas</button>
      </div>
      <div className="schedule">
        <h2 className="schedule-title">Tu horario de atención</h2>
        <p className="schedule-description">De lunes a viernes</p>
        <p className="schedule-hours">8:00am - 8:00pm</p>
      </div>
      </div>
      <Footer />
    </div>
  );
}

export default GymAdmin;
