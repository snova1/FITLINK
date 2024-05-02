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
      <div id="w-node-_8230a48f-0e1e-bad1-5712-a6818acf50f6-370beefc" className="w-layout-layout wf-layout-layout">
    <div className="w-layout-cell"></div>
    <div className="w-layout-cell"></div>
  </div>
  <section className="pricing-comparison cell">
    <div className="container">
      <div className="pricing-wrapper">
        <div id="w-node-_582c6c5f-a2b4-f284-09e8-2b33f837e889-370beefc" className="pricing-card"><img src="FITLINK-Plan-2.jpg" loading="lazy" alt="" className="pricing-image"/>
          <h2 className="pricing-title"><strong>1 mes</strong></h2>
          <div className="pricing-subtitle">Al precio de </div>
          <div className="pricing-price">$60&#x27;000</div>
          <a href="#" className="button-primary button-2 w-button">obtener suscripción</a>
          <div className="pricing-divider"></div>
          <ul role="list" className="pricing-feature-list w-list-unstyled">
            <li className="list-item">Adquiere acceso a nuestros gimnasios por 1 mes</li>
            <li>
              <div className="pricing-feature"></div>
            </li>
            <li>
              <div className="pricing-feature"></div>
            </li>
            <li>
              <div className="pricing-feature"></div>
            </li>
            <li>
              <div className="pricing-feature"></div>
            </li>
            <li>
              <div className="pricing-feature"></div>
            </li>
            <li>
              <div className="pricing-feature"></div>
            </li>
            <li>
              <div className="pricing-feature"></div>
            </li>
          </ul>
        </div>
        <div id="w-node-_582c6c5f-a2b4-f284-09e8-2b33f837e869-370beefc" className="pricing-card featured-pricing-copy"><img src={plan1} loading="lazy" alt="" class="pricing-image"/>
          <h2 className="pricing-title"><strong>1 mes</strong></h2>
          <div className="pricing-subtitle">Al precio de </div>
          <div className="pricing-price">$60&#x27;000</div>
          <a href="#" class="button-primary button-2 w-button">obtener suscripción</a>
          <div className="pricing-divider"></div>
          <ul role="list" class="pricing-feature-list w-list-unstyled">
            <li className="list-item">Adquiere acceso a nuestros gimnasios por 1 mes</li>
            <li>
              <div className="pricing-feature"></div>
            </li>
            <li>
              <div className="pricing-feature"></div>
            </li>
            <li>
              <div className="pricing-feature"></div>
            </li>
            <li>
              <div className="pricing-feature"></div>
            </li>
            <li>
              <div className="pricing-feature"></div>
            </li>
            <li>
              <div className="pricing-feature"></div>
            </li>
            <li>
              <div className="pricing-feature"></div>
            </li>
          </ul>
        </div>
        <div id="w-node-_582c6c5f-a2b4-f284-09e8-2b33f837e889-370beefc" className="pricing-card featured-pricing-copy"><img src={plan2} loading="lazy" alt="" class="pricing-image"/>
          <h2 className="pricing-title"><strong>6 meses</strong></h2>
          <div className="pricing-subtitle">Al precio de </div>
          <div className="pricing-price">$320&#x27;000</div>
          <a href="#" className="button-primary button-2 w-button">obtener suscripción</a>
          <div className="pricing-divider"></div>
          <ul role="list" class="pricing-feature-list w-list-unstyled">
            <li className="list-item">Adquiere acceso a nuestros gimnasios por 6 meses</li>
            <li>
              <div className="pricing-feature"></div>
            </li>
            <li>
              <div className="pricing-feature"></div>
            </li>
            <li>
              <div className="pricing-feature"></div>
            </li>
            <li>
              <div className="pricing-feature"></div>
            </li>
            <li>
              <div className="pricing-feature"></div>
            </li>
            <li>
              <div className="pricing-feature"></div>
            </li>
            <li>
              <div className="pricing-feature"></div>
            </li>
          </ul>
        </div>
        <div id="w-node-_582c6c5f-a2b4-f284-09e8-2b33f837e8b1-370beefc" className="pricing-card"><img src={plan3} loading="lazy" sizes="(max-width: 479px) 68vw, 180px" alt="" class="pricing-image"/>
          <h2 className="pricing-title"><strong>1 año</strong></h2>
          <div className="pricing-subtitle">Al precio de </div>
          <div className="pricing-price">$600&#x27;000</div>
          <a href="#" className="button-primary button-2 w-button">obtener suscripción</a>
          <div className="pricing-divider"></div>
          <ul role="list" className="pricing-feature-list w-list-unstyled">
            <li className="list-item">Adquiere acceso a nuestros gimnasios por 1 año</li>
            <li>
              <div className="pricing-feature"></div>
            </li>
            <li>
              <div className="pricing-feature"></div>
            </li>
            <li>
              <div className="pricing-feature"></div>
            </li>
            <li>
              <div className="pricing-feature"></div>
            </li>
            <li>
              <div className="pricing-feature"></div>
            </li>
            <li>
              <div className="pricing-feature"></div>
            </li>
            <li>
              <div className="pricing-feature"></div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  {
  /* <script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=66288e3f4d96ca81370beef6" type="text/javascript" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
  <script src="js/webflow.js" type="text/javascript"></script> */
  }
      <Footer />
    </div>
    );
}

export default Planes;
