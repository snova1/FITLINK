import React, { useState } from 'react';
import '../hojas-de-estilo/GymMod.css';
import GymHeader from '../componentes/GymHeader';
import Footer from '../Footer';

function GymMod(){
    const [formData, setFormData] = useState({
        email: '',
        phone: '',
        days: '',
        location: '',
        hours:'',
        address:''
      });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };

    return(
        <div>
            <GymHeader />
            <h1>Modificar información</h1>
            <div className="gym-info-modification-form">
                <form>
                    <div className="form-row">
                        <div className="form-group">
                            <input type="email" id="email" name="email" placeholder='Correo' onChange={handleChange}/>
                        </div>
                        <div className="form-group">
                            <input type="tel" id="phone" name="phone" placeholder='Teléfono' onChange={handleChange}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <input type="text" id="days" name="days" placeholder='Días atención' onChange={handleChange}/>
                        </div>
                        <div className="form-group">
                            <input type="text" id="location" name="location" placeholder='Localidad' onChange={handleChange}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <input type="text" id="hours" name="hours" placeholder='Horarios' onChange={handleChange}/>
                        </div>
                        <div className="form-group">
                            <input type="text" id="address" name="address" placeholder='Dirección' onChange={handleChange}/>
                        </div>
                    </div>
                    <button type="submit" className="submit-button">Modificar</button>
                </form>
            </div>
            <Footer />
        </div>
    );
}

export default GymMod;