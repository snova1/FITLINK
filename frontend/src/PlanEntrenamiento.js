import React from 'react';
import './Planes.css';
import calentamiento from './calentamiento.png';
import estiramiento from './estiramiento.png';
import pesomuerto from './PesoMuerto.png';
import sentadillas from './sentadillas.png';
import zancadas from './zancadas.png';
import aductor from './aductor.png';
import fotoperfil from './fotoperfil.png';
import Footer from './Footer';
import Header from './componentes/Header';

function Planentrenamiento(){
    return(
      
    <div className="plan_entrenamiento">
      <Header />
      <section className="pricing-overview">
    <div className="container">
      <p className="pricing-description p1"><strong className="bold-text-4">Hola, según tu peso y estatura te recomendamos seguir este plan de entrenamiento:</strong><br/></p><img src={fotoperfil} loading="lazy" alt="" className="pricing-image i7"/>
      <p className="pricing-description p3"><strong className="bold-text-3">Según tu IMC tu composición corporal es:</strong><br/></p>
      <p className="pricing-description pp7"><strong className="bold-text">Normal</strong><br/></p>
      <p className="pricing-description pp1"><strong className="bold-text-5">Peso:</strong><br/></p>
      <p className="pricing-description pp2"><strong>Estatura:</strong><br/></p>
      <p className="pricing-description pp5"><strong className="bold-text">IMC:</strong><br/></p>
      <p className="pricing-description pp3"><strong className="bold-text">60 Kg</strong><br/></p>
      <p className="pricing-description pp4"><strong>160 cm</strong><br/></p>
      <p className="pricing-description p4"><strong className="bold-text">23.44</strong><br/></p>
      <div className="pricing-grid">
        <div id="w-node-cf021b15-8811-32a8-ea38-37661f265f79-464d21a3" className="pricing-card-three"><img src={calentamiento} loading="lazy" alt="" className="pricing-image i1"/>
          <h3 className="heading">Calentamiento</h3>
          <p className="pricing-card-text"><strong>4 sets<br/>6 repeticiones por cada pierna</strong></p>
        </div>
        <div id="w-node-_0b8b64f3-a28f-368e-4e9a-d3c1adc0a049-464d21a3" className="pricing-card-three"><img src={sentadillas}  loading="lazy" alt="" className="pricing-image i2"/>
          <h3 className="heading-3">Sentadilla</h3>
          <p className="pricing-card-text"><strong>4 sets<br/>12 repeticiones</strong></p>
        </div>
        <div id="w-node-cf021b15-8811-32a8-ea38-37661f265f83-464d21a3" className="pricing-card-three"><img src={pesomuerto}  loading="lazy" alt="" className="pricing-image i3"/>
          <h3 className="heading-2">Peso muerto</h3>
          <p className="pricing-card-text"><strong>4 sets<br/>12 repeticiones </strong></p>
        </div>
        <div id="w-node-cf021b15-8811-32a8-ea38-37661f265f8d-464d21a3" className="pricing-card-three"><img src={zancadas}  loading="lazy" alt="" className="pricing-image i4"/>
          <h3 className="heading-4">Zancadas</h3>
          <p className="pricing-card-text"><strong>4 sets<br/>6 repeticiones por cada pierna</strong></p>
        </div>
        <div id="w-node-_1017ec7a-0cf3-ffb8-ae29-3aec1877e7f5-464d21a3" className="pricing-card-three"><img src={aductor}  loading="lazy" alt="" className="pricing-image i5"/>
          <h3 className="heading-5">Aductor</h3>
          <p className="pricing-card-text"><strong>3 sets<br/>8 repeticiones</strong></p>
        </div>
        <div id="w-node-_6a426a1c-db0e-bba4-f9ae-bcd2480f1d0b-464d21a3" className="pricing-card-three"><img src={estiramiento}  loading="lazy" alt="" className="pricing-image i6"/>
          <h3 className="heading-6">Estiramiento</h3>
          <p className="pricing-card-text"><strong>Estira por lo menos 15 minutos</strong></p>
        </div>
      </div>
    </div>
  </section>
      <Footer />
    </div>
    );
}

export default Planentrenamiento;