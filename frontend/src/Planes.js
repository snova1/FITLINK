import React, { useState } from 'react';
import './Planes.css';

function Planes(){
    return(
    <div className="planes_subscripcion">
      <h1 className="plan-title">Tipos de planes</h1>
      <div className="plan">
        <div className="plan-content">
          {/*<img src="imagen_plan_1.jpg" alt="Plan 1" className="plan-image" />*/}
          <h2>1 mes</h2>
          <p>Adquiere acceso a todos nuestros gimnasios por 1 mes</p>
          <h2>$60000</h2>
        </div>
      </div>
      <div className="plan">
        <div className="plan-content">
          {/*<img src="imagen_plan_1.jpg" alt="Plan 1" className="plan-image" />*/}
          <h2>6 meses</h2>
          <p>Adquiere acceso a todos nuestros gimnasios por 6 meses</p>
          <h2>$320000</h2>
        </div>
      </div>
      <div className="plan">
        <div className="plan-content">
          {/*<img src="imagen_plan_1.jpg" alt="Plan 1" className="plan-image" />*/}
          <h2>1 año</h2>
          <p>Adquiere acceso a todos nuestros gimnasios por 1 año</p>
          <h2>$600000</h2>
        </div>
      </div>
      <button className="join-button">¡Quiero unirme al club!</button>
    </div>
    );
}

export default Planes;