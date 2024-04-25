import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../hojas-de-estilo/GymAdmin.css';
import GymHeader from '../componentes/GymHeader';
import Footer from '../Footer';
import chart from '../imagenes/chart-ingreso.png';
import gym_logo from '../imagenes/gym_logo.png';

function GymAdmin() {
  const navigate = useNavigate();
  const handleModifyInfoClick = () => {
    navigate('/GymModify'); 
  };
  const [selectedImages, setSelectedImages] = useState([]);
  const [selectedMachines, setSelectedMachines] = useState([]);
  const handleImageUpload = (event) => {
    const files = event.target.files;
    const newImages = Array.from(files);
    setSelectedImages((prevImages) => [...prevImages, ...newImages]);
  };

  const handleDeleteImage = (index) => {
    setSelectedImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const handleMachineUpload = (event) => {
    const files = event.target.files;
    const newMachines = Array.from(files);
    setSelectedMachines((prevMachines) => [...prevMachines, ...newMachines]);
  };
  const handleDeleteMachine = (index) => {
    setSelectedMachines((prevMachines) => prevMachines.filter((_, i) => i !== index));
  };
  return (
    <div className="gym-admin-dashboard">      
    <GymHeader />
      <div className="gym-info">
        <div className="profile-picture">
        <img src={gym_logo} alt='gym_logo' className='gym-logo'/>
        </div>
        <p className="gym-greeting">Hola Golden Gym</p>
        <p className="gym-data-title">Tus datos:</p>
        <ul className="gym-data">
          <li><span className="data-type">Correo:</span> <span className="data-value">goldengym@example.com</span></li>
          <li><span className="data-type">Ciudad:</span> <span className="data-value">Bogotá</span></li>
          <li><span className="data-type">Localidad:</span> <span className="data-value">Barrios Unidos</span></li>
          <li><span className="data-type">Dirección:</span> <span className="data-value">Calle 68 #60 - 58</span></li>
          <li><span className="data-type">Teléfono:</span> <span className="data-value">6842597</span></li>
        </ul>
        <button className="modify-info-button" onClick={handleModifyInfoClick}>Modificar info</button>
      </div>
      <div className="ingreso-chart">
        <h2 className="chart-title">Tus ingresos mensuales</h2>
        <img src={chart} alt='chart' />
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
  {selectedImages.map((image, index) => (
    <div key={index} className="image-container">
      <img src={URL.createObjectURL(image)} alt={`Uploaded ${index}`} className="uploaded-image" />
      <button className="delete-image-button" onClick={() => handleDeleteImage(index)}>x</button>
    </div>
  ))}
</div>
<div className="add-image-container">
  <label htmlFor="upload-image-button" className="add-image-button">Agregar foto</label>
  <input type="file" id="upload-image-button" accept="image/*" multiple onChange={handleImageUpload} style={{ display: 'none' }} />
</div>
<div className="machine-scroll">
  {selectedMachines.map((image, index) => (
    <div key={index} className="image-container">
      <img src={URL.createObjectURL(image)} alt={`Uploaded ${index}`} className="uploaded-image" />
      <button className="delete-image-button" onClick={() => handleDeleteMachine(index)}>x</button>
    </div>
  ))}
</div>
<div className="add-machine-container">
  <label htmlFor="upload-machine-button" className="add-machine-button">Agregar máquina</label>
  <input type="file" id="upload-machine-button" accept="image/*" multiple onChange={handleMachineUpload} style={{ display: 'none' }} />
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
