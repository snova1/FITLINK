import React, { useState } from 'react';
import '../hojas-de-estilo/TyC.css';
import boton from '../imagenes/boton.png';


function PPriv() {
  return (
    <div className="principal">
        <a href="/" ><img src={boton} style={{ width: '150px', height: '70px' }} alt="boton" /></a>
        <div className="TyC"> 
            <h1>Politicas de Privacidad</h1>
            <p>
                Esta Política de Privacidad describe cómo FITLINK ("nosotros", "nuestro" o "sitio") recopila, 
                utiliza y protege la información personal que nos proporcionas cuando utilizas nuestro sitio web. 
                Tu privacidad es importante para nosotros y nos comprometemos a proteger tus datos personales de 
                acuerdo con esta política.
            </p>
            <h2>Información que recopilamos</h2>
            <h2>1. Información de Registro:</h2>
            <p>
                Cuando te registras en FITLINK, podemos recopilar tu nombre, dirección de correo electrónico y 
                otra información relevante para proporcionarte nuestros servicios.
            </p>
            <h2>2. Información de Uso: </h2>
            <p>
                Podemos recopilar información sobre tu interacción con nuestro sitio web, como las páginas que 
                visitas, el tiempo que pasas en cada página, las funciones que utilizas y otra información similar.
            </p>
            <h2>Cómo utilizamos tu información</h2>
            <h2>1. Para proporcionar nuestros servicios:</h2>
            <p>
                Utilizamos la información que recopilamos para proporcionarte nuestros servicios, como la 
                personalización de tu experiencia en el sitio, el procesamiento de tus transacciones y el 
                envío de comunicaciones relacionadas con el servicio.
            </p>
            <h2>2. Para mejorar nuestro sitio:</h2>
            <p>
                Utilizamos la información para analizar el rendimiento de nuestro sitio web, comprender cómo 
                se utiliza y mejorar continuamente la calidad y la funcionalidad de nuestros servicios.
            </p>
            <h2>3. Para comunicarnos contigo:</h2>
            <p>
                Podemos utilizar tu dirección de correo electrónico u otra información de contacto para 
                enviarte comunicaciones relacionadas con el servicio, como actualizaciones del sitio, 
                notificaciones de cuenta y noticias sobre nuestros productos y servicios.
            </p>
            <h2>Cómo protegemos tu información</h2>
            <p> 
                Tomamos medidas razonables para proteger tus datos personales contra el acceso no autorizado, 
                la divulgación, el uso indebido o la alteración. Utilizamos medidas de seguridad técnicas, 
                administrativas y físicas para proteger la confidencialidad e integridad de tus datos.
            </p>
            <h2>Divulgación de información a terceros</h2>
            <p>
                No vendemos, alquilamos ni intercambiamos tu información personal con terceros con fines 
                comerciales. Sin embargo, podemos compartir tu información con proveedores de servicios 
                que nos ayudan a proporcionar nuestros servicios, cumplir con la ley o proteger nuestros 
                derechos.
            </p>
            <h2>Tus derechos de privacidad</h2>
            <p>
                Tienes derecho a acceder, corregir o eliminar la información personal que hemos recopilado 
                sobre ti. Si deseas ejercer estos derechos, ponte en contacto con nosotros a través de la 
                información de contacto proporcionada al final de esta política.
            </p>
            <h2>Cambios en esta política</h2>
            <p>
                Nos reservamos el derecho de modificar esta Política de Privacidad en cualquier momento y 
                sin previo aviso. Se te notificará de cualquier cambio material en esta política mediante 
                una notificación en nuestro sitio web. El uso continuado de nuestro sitio después de la 
                publicación de los cambios constituirá tu aceptación de dichos cambios.
            </p>
            <h2>Contacto</h2>
            <p>
                Si tienes alguna pregunta sobre esta Política de Privacidad, ponte en contacto con nosotros 
                a través de fitlinkco@gmail.com.
            </p>
            <p>
                Esta Política de Privacidad es efectiva a partir de 5 de Marzo del 2024.
            </p>
        </div>
    </div>
  );
}

export default PPriv;