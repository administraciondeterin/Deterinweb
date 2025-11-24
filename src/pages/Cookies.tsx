import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Cookies = () => (
  <div className="min-h-screen bg-gray-50">
    <Helmet>
      <title>Política de Cookies | Deterín</title>
      <meta name="description" content="Lee la política de cookies de Deterín. Información sobre el uso de cookies en este sitio web y cómo gestionarlas." />
      <link rel="canonical" href="/cookies" />
    </Helmet>
    <Header />
    <section className="py-16 bg-gradient-to-br from-[#019EE1] via-[#019ee15b] to-[#019EE1] text-white">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Política de Cookies</h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Este sitio web utiliza cookies para mejorar tu experiencia y analizar el uso del sitio. Aquí te explicamos cómo y por qué.
        </p>
      </div>
    </section>
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-2xl font-bold mb-6">Información sobre Cookies</h2>
        <p className="mb-6">
          Conforme con la Ley 34/2002, de 11 de julio, de servicios de la sociedad de la información y de comercio electrónico (LSSI),
          en relación con el Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, General de
          Protección de Datos (RGPD) y la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos y Garantía de los Derechos
          Digitales (LOPDGDD), es obligado obtener el consentimiento expreso del usuario de todas las páginas web que usan cookies
          prescindibles, antes de que este navegue por ellas.
        </p>

        <h2 className="text-2xl font-bold mb-6">¿Qué son las cookies?</h2>
        <p className="mb-6">
          Las cookies y otras tecnologías similares tales como local shared objects, flash cookies o píxeles, son herramientas empleadas
          por los servidores Web para almacenar y recuperar información acerca de sus visitantes, así como para ofrecer un correcto
          funcionamiento del sitio. Mediante el uso de estos dispositivos se permite al servidor Web recordar algunos datos concernientes
          al usuario, como sus preferencias para la visualización de las páginas de ese servidor, nombre y contraseña, productos que más
          le interesan, etc.
        </p>

        <h2 className="text-2xl font-bold mb-6">Cookies afectadas por la normativa y cookies exceptuadas</h2>
        <p className="mb-6">
          Según la directiva de la UE, las cookies que requieren el consentimiento informado por parte del usuario son las cookies de
          analítica y las de publicidad y afiliación, quedando exceptuadas las de carácter técnico y las necesarias para el
          funcionamiento del sitio web o la prestación de servicios expresamente solicitados por el usuario.
        </p>

        <h2 className="text-2xl font-bold mb-6">Tipos de cookies</h2>
        <h3 className="text-xl font-semibold mb-4">Según la finalidad</h3>
        <ul className="list-disc pl-6 mb-6">
          <li className="mb-2">
            <strong>Cookies técnicas y funcionales:</strong> permiten la navegación y la utilización de las diferentes opciones o servicios.
          </li>
          <li className="mb-2">
            <strong>Cookies analíticas:</strong> permiten el seguimiento y análisis del comportamiento de los usuarios; la información
            recogida se utiliza para medir la actividad del sitio y elaborar perfiles de navegación con el fin de introducir mejoras.
          </li>
          <li className="mb-2">
            <strong>Cookies publicitarias:</strong> permiten la gestión eficaz de los espacios publicitarios en base a criterios como
            el contenido o la frecuencia de los anuncios.
          </li>
          <li className="mb-2">
            <strong>Cookies de publicidad comportamental:</strong> recogen información sobre las preferencias del usuario (retargeting) para
            gestionar de forma eficaz los espacios publicitarios.
          </li>
          <li className="mb-2">
            <strong>Cookies sociales:</strong> establecidas por plataformas de redes sociales para permitir compartir contenido. Estas plataformas
            pueden rastrear la actividad en línea fuera de los servicios, lo que puede influir en el contenido y mensajes que se ven en otros sitios.
          </li>
          <li className="mb-2">
            <strong>Cookies de afiliados:</strong> permiten hacer un seguimiento de las visitas procedentes de otras webs con las que se establece
            un contrato de afiliación.
          </li>
          <li>
            <strong>Cookies de seguridad:</strong> almacenan información cifrada para evitar que los datos sean vulnerables a ataques maliciosos.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mb-4">Según la propiedad</h3>
        <ul className="list-disc pl-6 mb-6">
          <li className="mb-2">
            <strong>Cookies propias:</strong> se envían desde un equipo o dominio gestionado por el editor y desde el que se presta el servicio solicitado.
          </li>
          <li>
            <strong>Cookies de terceros:</strong> se envían desde un equipo o dominio no gestionado por el editor, sino por otra entidad que trata los datos
            obtenidos a través de las cookies.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mb-4">Según el plazo de conservación</h3>
        <ul className="list-disc pl-6 mb-6">
          <li className="mb-2">
            <strong>Cookies de sesión:</strong> recaban y almacenan datos mientras el usuario accede a una página web.
          </li>
          <li>
            <strong>Cookies persistentes:</strong> los datos permanecen almacenados y pueden ser tratados durante un período definido por el responsable
            de la cookie, que puede ir de minutos a varios años.
          </li>
        </ul>

        <h2 className="text-2xl font-bold mb-6">Tratamiento de datos personales</h2>
        <p className="mb-6">
          DETERIN, S.L. es el Responsable del tratamiento de los datos personales del Interesado y le informa de que estos datos serán
          tratados de conformidad con lo dispuesto en el Reglamento (UE) 2016/679, de 27 de abril de 2016 (RGPD), por lo que se le facilita
          la siguiente información del tratamiento:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li className="mb-2"><strong>Fines del tratamiento:</strong> según se especifica en el apartado de cookies que se utilizan en este sitio web.</li>
          <li className="mb-2"><strong>Legitimación del tratamiento:</strong> salvo en los casos en los que resulte necesario para la navegación por la web, por consentimiento del interesado (art. 6.1.a RGPD).</li>
          <li className="mb-2"><strong>Criterios de conservación de los datos:</strong> según se especifica en el apartado de cookies utilizadas en la web.</li>
          <li><strong>Comunicación de los datos:</strong> no se comunicarán los datos a terceros, excepto en cookies propiedad de terceros o por obligación legal.</li>
        </ul>
        <p className="mb-2 font-semibold">Derechos que asisten al Interesado:</p>
        <ul className="list-disc pl-6 mb-6">
          <li className="mb-2">Derecho a retirar el consentimiento en cualquier momento.</li>
          <li className="mb-2">Derecho de acceso, rectificación, portabilidad y supresión de sus datos, y de limitación u oposición a su tratamiento.</li>
          <li>Derecho a presentar una reclamación ante la Autoridad de control (<a className="underline" href="https://www.aepd.es" target="_blank" rel="noreferrer">www.aepd.es</a>) si considera que el tratamiento no se ajusta a la normativa vigente.</li>
        </ul>
        <p className="mb-6">
          <strong>Datos de contacto para ejercer sus derechos:</strong><br />
          DETERIN, S.L.. CALLE TORRES QUEVEDO, 2 - 28946 FUENLABRADA (Madrid). E-mail: <a className="underline" href="mailto:deterin@deterin.com">deterin@deterin.com</a>
        </p>

        <h2 className="text-2xl font-bold mb-6">Cookies utilizadas en este sitio web</h2>
        <h3 className="text-xl font-semibold mb-4">Cookies controladas por el editor</h3>
        <h4 className="text-lg font-semibold mb-2">Técnicas y funcionales</h4>
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-left bg-gray-100">
                <th className="px-3 py-2">Propiedad</th>
                <th className="px-3 py-2">Cookie</th>
                <th className="px-3 py-2">Finalidad</th>
                <th className="px-3 py-2">Plazo</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="px-3 py-2">deterin.com</td>
                <td className="px-3 py-2">__stripe_mid</td>
                <td className="px-3 py-2">Cookie necesaria para la utilización de las opciones y servicios del sitio web</td>
                <td className="px-3 py-2">1 año</td>
              </tr>
              <tr className="border-b">
                <td className="px-3 py-2">deterin.com</td>
                <td className="px-3 py-2">__stripe_sid</td>
                <td className="px-3 py-2">Cookie necesaria para la utilización de las opciones y servicios del sitio web</td>
                <td className="px-3 py-2">Sesión</td>
              </tr>
              <tr className="border-b">
                <td className="px-3 py-2">google.com</td>
                <td className="px-3 py-2">__Secure-ENID</td>
                <td className="px-3 py-2">Cookie necesaria para la utilización de las opciones y servicios del sitio web</td>
                <td className="px-3 py-2">12 meses</td>
              </tr>
              <tr className="border-b">
                <td className="px-3 py-2">google.com</td>
                <td className="px-3 py-2">AEC</td>
                <td className="px-3 py-2">Cookie necesaria para la utilización de las opciones y servicios del sitio web</td>
                <td className="px-3 py-2">4 meses</td>
              </tr>
              <tr className="border-b">
                <td className="px-3 py-2">Google</td>
                <td className="px-3 py-2">SEARCH_SAMESITE</td>
                <td className="px-3 py-2">SameSite evita que el navegador envíe esta cookie con solicitudes entre sitios, mitigando riesgos de fuga y CSRF.</td>
                <td className="px-3 py-2">4 meses</td>
              </tr>
              <tr className="border-b">
                <td className="px-3 py-2">google.com</td>
                <td className="px-3 py-2">SOCS</td>
                <td className="px-3 py-2">Cookie necesaria para la utilización de las opciones y servicios del sitio web</td>
                <td className="px-3 py-2">5 meses</td>
              </tr>
              <tr>
                <td className="px-3 py-2">stripe.com</td>
                <td className="px-3 py-2">__Secure-LinkSessionPresent</td>
                <td className="px-3 py-2">Cookie necesaria para la utilización de las opciones y servicios del sitio web</td>
                <td className="px-3 py-2">8 meses</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h4 className="text-lg font-semibold mb-2">Publicitarias</h4>
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-left bg-gray-100">
                <th className="px-3 py-2">Propiedad</th>
                <th className="px-3 py-2">Cookie</th>
                <th className="px-3 py-2">Finalidad</th>
                <th className="px-3 py-2">Plazo</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="px-3 py-2">Google</td>
                <td className="px-3 py-2">NID</td>
                <td className="px-3 py-2">Recopila estadísticas del sitio, rastrea tasas de conversión y personaliza anuncios de Google.</td>
                <td className="px-3 py-2">7 meses</td>
              </tr>
              <tr>
                <td className="px-3 py-2">Google</td>
                <td className="px-3 py-2">OTZ</td>
                <td className="px-3 py-2">Análisis agregado de los visitantes del sitio.</td>
                <td className="px-3 py-2">23 días</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-semibold mb-4">Cookies de terceros</h3>
        <p className="mb-4">
          Los servicios de terceros son ajenos al control del editor. Los proveedores pueden modificar en todo momento sus condiciones de servicio,
          finalidad y utilización de las cookies, etc.
        </p>
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-left bg-gray-100">
                <th className="px-3 py-2">Editor</th>
                <th className="px-3 py-2">Política de privacidad</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-3 py-2">Google</td>
                <td className="px-3 py-2"><a className="underline" href="https://privacy.google.com/take-control.html" target="_blank" rel="noreferrer">https://privacy.google.com/take-control.html</a></td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold mb-6">Panel de configuración de cookies</h2>
        <p className="mb-6">
          Desde este panel podrá configurar las cookies que el sitio web puede instalar en su navegador, excepto las cookies técnicas o funcionales
          que son necesarias para la navegación y la utilización de las diferentes opciones o servicios que se ofrecen.
        </p>
        <p className="mb-8">Panel de cookies</p>

        <h2 className="text-2xl font-bold mb-6">Cómo gestionar las cookies desde el navegador</h2>
        <h3 className="text-lg font-semibold mb-2">Eliminar las cookies del dispositivo</h3>
        <p className="mb-4">
          Las cookies que ya están en un dispositivo se pueden eliminar borrando el historial del navegador, con lo que se suprimen las cookies de todos los sitios web visitados.
          Sin embargo, también se puede perder parte de la información guardada (por ejemplo, los datos de inicio de sesión o las preferencias de sitio web).
        </p>
        <h3 className="text-lg font-semibold mb-2">Gestionar las cookies específicas del sitio</h3>
        <p className="mb-4">
          Para tener un control más preciso de las cookies específicas de cada sitio, los usuarios pueden ajustar su configuración de privacidad y cookies en el navegador.
        </p>
        <h3 className="text-lg font-semibold mb-2">Bloquear las cookies</h3>
        <p className="mb-8">
          Aunque la mayoría de los navegadores modernos se pueden configurar para evitar que se instalen cookies en los dispositivos, eso puede obligar al ajuste manual de
          determinadas preferencias cada vez que se visite un sitio o página. Además, algunos servicios y características pueden no funcionar correctamente (por ejemplo, los inicios de sesión con perfil).
        </p>

        <h2 className="text-2xl font-bold mb-6">Cómo eliminar las cookies de los navegadores más comunes</h2>
        <ul className="list-disc pl-6">
          <li className="mb-2"><a className="underline" href="http://support.google.com/chrome/answer/95647?hl=es" target="_blank" rel="noreferrer">Chrome</a></li>
          <li className="mb-2"><a className="underline" href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noreferrer">Edge</a></li>
          <li className="mb-2"><a className="underline" href="https://support.microsoft.com/es-es/help/278835/how-to-delete-cookie-files-in-internet-explorer" target="_blank" rel="noreferrer">Explorer</a></li>
          <li className="mb-2"><a className="underline" href="https://www.mozilla.org/es-ES/privacy/websites/#cookies" target="_blank" rel="noreferrer">Firefox</a></li>
          <li className="mb-2"><a className="underline" href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noreferrer">Safari</a></li>
          <li><a className="underline" href="https://help.opera.com/en/latest/security-and-privacy/#clearBrowsingData" target="_blank" rel="noreferrer">Opera</a></li>
        </ul>
      </div>
    </section>
    <Footer />
  </div>
);

export default Cookies; 