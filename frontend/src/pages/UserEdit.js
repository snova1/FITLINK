import React, { useState } from 'react';
import '../hojas-de-estilo/UserEdit.css';
import Header from '../componentes/Header';
import Footer from '../Footer'

function UserEdit() {
  const [user, setUser] = useState({
    nombre: 'Gabriela',
    apellidos: 'Molina',
    edad: '30',
    peso: '60 kg',
    estatura: '160 cm',
    email: 'gmolina@gmail.com',
    ciudad: 'Bogotá',
    direccion: 'Cll 14 #16-06',
    identificacion: '123456789'
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí manejarías la lógica para actualizar la información del usuario,
    // como enviar los datos a una API o base de datos.
    console.log(user);
  };

  return (
    <div className="UserEdit">
        <Header />
        <div className="user-edit">
        <h1>Modificar Información</h1>
        <form onSubmit={handleSubmit}>
            {Object.keys(user).map((key) => (
            <div key={key} className="input-group">
                <label htmlFor={key}>{key[0].toUpperCase() + key.slice(1)}:</label>
                <input
                type="text"
                id={key}
                name={key}
                value={user[key]}
                onChange={handleChange}
                />
            </div>
            ))}
            <button type="submit">Guardar Cambios</button>
        </form>
        </div>
        <Footer />
    </div>
  );
}

export default UserEdit;
