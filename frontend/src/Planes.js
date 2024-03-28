import React from 'react';
import './Planes.css';
import plan1 from './plan1.jpg';
import plan2 from './plan2.jpg';
import plan3 from './plan3.jpg';
import Footer from './Footer';
import Header from './componentes/Header';

function Planes(){
    return(
      
    <div className="planes_subscripcion">
      <Header />
      <h1 className="plan-title">Tipos de planes</h1>
      <div className="plan">
        <div className="plan-content">
          <h2>1 mes</h2>
          <img src={plan1} alt="plan1" className="plan-image" />
          <p>Adquiere acceso a todos nuestros gimnasios por 1 mes</p>
          <h2>$60'000</h2>
        </div>
      </div>
      <div className="plan">
        <div className="plan-content">          
          <h2>6 meses</h2>
          <img src={plan2} alt="plan2" className="plan-image" />
          <p>Adquiere acceso a todos nuestros gimnasios por 6 meses</p>
          <h2>$320'000</h2>
        </div>
      </div>
      <div className="plan">
        <div className="plan-content">
          <h2>1 año</h2>
          <img src={plan3} alt="plan3" className="plan-image" />
          <p>Adquiere acceso a todos nuestros gimnasios por 1 año</p>
          <h2>$600'000</h2>
        </div>
      </div>
      <button className="join-button">¡Quiero unirme al club!</button>
      <Footer />
    </div>
    );
}

export default Planes;