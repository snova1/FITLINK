import React, { useState } from 'react';
import '../hojas-de-estilo/TyC.css';
import boton from '../imagenes/boton.png';


function TyC() {
  return (
    <div className="principal">
        <a href="/" ><img src={boton} style={{ width: '150px', height: '70px' }} alt="boton" /></a>
        <div className="TyC"> 
            <h1>Terminos y condiciones</h1>
            <h2>Términos y condiciones de uso</h2>
            <h2>1. Uso del Sitio:</h2>
            <p>
                Al acceder y utilizar el sitio web FITLINK, aceptas cumplir 
                con estos términos y condiciones, así como con todas las leyes 
                y regulaciones aplicables. Si no estás de acuerdo con alguna 
                parte de estos términos, no deberías acceder al sitio ni utilizar 
                sus servicios.
            </p>
            <h2>2. Edad Mínima:</h2>
            <p>
                Debes tener al menos 18 años de edad para utilizar este sitio. Si 
                eres menor de 18 años, debes contar con el consentimiento y supervisión 
                de un adulto para utilizar nuestros servicios.
            </p>
            <h2>3. Registro:</h2>
            <p>
                Al registrarte en FITLINK, aceptas proporcionar información precisa, 
                actualizada y completa sobre ti mismo según sea solicitado en el 
                formulario de registro. Es tu responsabilidad mantener la confidencialidad 
                de tu contraseña y cuenta. Eres responsable de todas las actividades que 
                ocurran bajo tu cuenta.
            </p>
            <h2>4. Contenido del Usuario:</h2>
            <p>
                Al publicar contenido en FITLINK, garantizas que tienes el derecho de hacerlo 
                y que dicho contenido no infringe los derechos de propiedad intelectual de 
                terceros ni viola ninguna ley aplicable. FITLINK se reserva el derecho de eliminar 
                cualquier contenido que considere inapropiado o que viole estos términos y condiciones.
            </p>
            <h2>5. Propiedad Intelectual:</h2>
            <p>
                Todos los derechos de propiedad intelectual relacionados con el sitio web y su 
                contenido son propiedad de FITLINK o de sus licenciantes. No tienes permiso para 
                copiar, distribuir, modificar, transmitir, mostrar, realizar públicamente, 
                reproducir, publicar, licenciar, crear trabajos derivados, transferir o vender 
                ningún contenido del sitio, excepto según lo permitido expresamente por estos 
                términos o por escrito por FITLINK.
            </p>
            <h2>6. Privacidad:</h2>
            <p>
                FITLINK respeta tu privacidad y protege tus datos personales de acuerdo con su 
                Política de Privacidad. Al utilizar este sitio, aceptas el tratamiento de tus 
                datos personales de acuerdo con dicha política.
            </p>
            <h2>7. Limitación de Responsabilidad:</h2>
            <p>
                FITLINK no será responsable de ningún daño directo, indirecto, incidental, especial, 
                emergente o punitivo que surja del uso o la incapacidad de usar este sitio, incluso 
                si FITLINK ha sido advertido de la posibilidad de tales daños.
            </p>
            <h2>8. Modificaciones:</h2>
            <p>
                FITLINK se reserva el derecho de modificar o revisar estos términos y condiciones 
                en cualquier momento y sin previo aviso. Se te notificará de cualquier cambio material 
                en estos términos mediante una notificación en el sitio web. El uso continuado del 
                sitio después de la publicación de los cambios constituirá tu aceptación de dichos cambios.
            </p>
            <h2>9. Legislación Aplicable:</h2>
            <p>
                Estos términos y condiciones se regirán e interpretarán de acuerdo con las leyes del lugar
                donde FITLINK tiene su sede, sin tener en cuenta sus disposiciones sobre conflictos de leyes.
            </p>
            <h2>10. Acuerdo Completo:</h2>
            <p>
                Estos términos y condiciones constituyen el acuerdo completo entre tú y FITLINK con respecto 
                al uso del sitio web, reemplazando cualquier acuerdo previo o contemporáneo entre tú y FITLINK 
                con respecto a dicho uso.
            </p>
            <p>
                Es importante que los usuarios lean y comprendan estos términos y condiciones antes de 
                utilizar el sitio web FITLINK.
            </p>
        </div>
    </div>
  );
}

export default TyC;