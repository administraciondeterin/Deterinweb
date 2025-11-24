import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Terminos = () => (
  <div className="min-h-screen bg-gray-50">
    <Helmet>
      <title>Aviso Legal | Deterín</title>
      <meta name="description" content="Aviso legal de DETERIN, S.L. Información LSSI, datos identificativos, propiedad intelectual, exención de responsabilidades y jurisdicción." />
      <link rel="canonical" href="/terminos" />
    </Helmet>
    <Header />
    <section className="py-16 bg-gradient-to-br from-[#019EE1] via-[#019ee15b] to-[#019EE1] text-white">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Aviso Legal</h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">Información legal y condiciones de uso del sitio web de DETERIN, S.L.</p>
      </div>
    </section>
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-2xl font-bold mb-6">Ley de los Servicios de la Sociedad de la Información (LSSI)</h2>
        <p className="mb-6">
          DETERIN, S.L., responsable del sitio web, en adelante RESPONSABLE, pone a disposición de los usuarios el presente documento,
          con el que pretende dar cumplimiento a las obligaciones dispuestas en la Ley 34/2002, de 11 de julio, de Servicios de la
          Sociedad de la Información y de Comercio Electrónico (LSSICE), BOE N.º 166, así como informar a todos los usuarios del sitio
          web respecto a cuáles son las condiciones de uso.
        </p>
        <p className="mb-6">
          Toda persona que acceda a este sitio web asume el papel de usuario, comprometiéndose a la observancia y cumplimiento riguroso
          de las disposiciones aquí dispuestas, así como a cualquier otra disposición legal que fuera de aplicación. DETERIN, S.L. se
          reserva el derecho de modificar cualquier tipo de información que pudiera aparecer en el sitio web, sin que exista obligación
          de preavisar o poner en conocimiento de los usuarios dichas obligaciones, entendiéndose como suficiente la publicación en el
          sitio web de DETERIN, S.L..
        </p>

        <h2 className="text-2xl font-bold mb-6">1. Datos identificativos</h2>
        <ul className="list-disc pl-6 mb-6">
          <li><strong>Nombre de dominio:</strong> deterin.com</li>
          <li><strong>Nombre comercial:</strong> DETERIN, S.L.</li>
          <li><strong>Denominación social:</strong> DETERIN, S.L.</li>
          <li><strong>NIF:</strong> B78155389</li>
          <li><strong>Domicilio social:</strong> CALLE TORRES QUEVEDO 2, 28946 FUENLABRADA (MADRID)</li>
          <li><strong>Teléfono:</strong> 916063528</li>
          <li><strong>E-mail:</strong> <a className="underline" href="mailto:deterin@deterin.com">deterin@deterin.com</a></li>
          <li><strong>Registro Mercantil de Madrid:</strong> T 6042, F 210, S 8, H M 98773, I/A 13</li>
        </ul>

        <h2 className="text-2xl font-bold mb-6">2. Derechos de propiedad intelectual e industrial</h2>
        <p className="mb-6">
          El sitio web, incluyendo a título enunciativo pero no limitativo su programación, edición, compilación y demás elementos
          necesarios para su funcionamiento, los diseños, logotipos, texto y/o gráficos, son propiedad del RESPONSABLE o, si es el caso,
          dispone de licencia o autorización expresa por parte de los autores. Todos los contenidos del sitio web se encuentran
          debidamente protegidos por la normativa de propiedad intelectual e industrial, así como inscritos en los registros públicos
          correspondientes.
        </p>
        <p className="mb-6">
          Independientemente de la finalidad para la que fueran destinados, la reproducción total o parcial, uso, explotación, distribución
          y comercialización, requiere en todo caso la autorización escrita previa por parte del RESPONSABLE. Cualquier uso no autorizado
          previamente se considera un incumplimiento grave de los derechos de propiedad intelectual o industrial del autor.
        </p>
        <p className="mb-6">
          Los diseños, logotipos, texto y/o gráficos ajenos al RESPONSABLE y que pudieran aparecer en el sitio web, pertenecen a sus
          respectivos propietarios, siendo ellos mismos responsables de cualquier posible controversia que pudiera suscitarse respecto a
          los mismos. El RESPONSABLE autoriza expresamente a que terceros puedan redirigir directamente a los contenidos concretos del
          sitio web, y en todo caso redirigir al sitio web principal de deterin.com.
        </p>
        <p className="mb-6">
          El RESPONSABLE reconoce a favor de sus titulares los correspondientes derechos de propiedad intelectual e industrial, no
          implicando su sola mención o aparición en el sitio web la existencia de derechos o responsabilidad alguna sobre los mismos,
          como tampoco respaldo, patrocinio o recomendación por parte del mismo. Para realizar cualquier tipo de observación respecto a
          posibles incumplimientos de los derechos de propiedad intelectual o industrial, así como sobre cualquiera de los contenidos del
          sitio web, puede hacerlo a través del correo electrónico <a className="underline" href="mailto:deterin@deterin.com">deterin@deterin.com</a>.
        </p>

        <h2 className="text-2xl font-bold mb-6">3. Exención de responsabilidades</h2>
        <p className="mb-6">
          El RESPONSABLE se exime de cualquier tipo de responsabilidad derivada de la información publicada en su sitio web siempre que no
          tenga conocimiento efectivo de que esta información haya sido manipulada o introducida por un tercero ajeno al mismo o, si lo
          tiene, haya actuado con diligencia para retirar los datos o hacer imposible el acceso a ellos.
        </p>
        <h3 className="text-xl font-semibold mb-4">Uso de Cookies</h3>
        <p className="mb-6">
          Este sitio web puede utilizar cookies técnicas para llevar a cabo determinadas funciones imprescindibles para el correcto
          funcionamiento y visualización del sitio. Las cookies utilizadas tienen, en todo caso, carácter temporal, con la única finalidad
          de hacer más eficaz la navegación, y desaparecen al terminar la sesión del usuario. En ningún caso, estas cookies proporcionan por
          sí mismas datos de carácter personal y no se utilizarán para la recogida de los mismos.
        </p>
        <p className="mb-6">
          Mediante el uso de cookies también es posible que el servidor donde se encuentra la web reconozca el navegador utilizado por el
          usuario con la finalidad de que la navegación sea más sencilla, permitiendo, por ejemplo, el acceso de los usuarios que se hayan
          registrado previamente a las áreas reservadas sin tener que registrarse en cada visita. También se pueden utilizar para medir la
          audiencia, parámetros de tráfico, controlar el progreso y número de entradas, etc., siendo en estos casos cookies prescindibles
          técnicamente, pero beneficiosas para el usuario. Este sitio web no instalará cookies prescindibles sin el consentimiento previo del
          usuario. El usuario puede configurar su navegador para ser alertado de la recepción de cookies y para impedir su instalación.
        </p>
        <h3 className="text-xl font-semibold mb-4">Política de enlaces</h3>
        <p className="mb-6">
          Desde el sitio web, es posible que se redirija a contenidos de terceros sitios web. Dado que el RESPONSABLE no puede controlar
          siempre los contenidos introducidos por terceros en sus respectivos sitios web, no asume ningún tipo de responsabilidad respecto a
          dichos contenidos. En todo caso, procederá a la retirada inmediata de cualquier contenido que pudiera contravenir la legislación
          nacional o internacional, la moral o el orden público, procediendo a la retirada inmediata de la redirección a dicho sitio web,
          poniendo en conocimiento de las autoridades competentes el contenido en cuestión.
        </p>
        <p className="mb-6">
          El RESPONSABLE no se hace responsable de la información y contenidos almacenados, a título enunciativo pero no limitativo, en
          foros, chats, generadores de blogs, comentarios, redes sociales o cualquier otro medio que permita a terceros publicar contenidos
          de forma independiente en la página web del RESPONSABLE. Sin embargo, y en cumplimiento de lo dispuesto en los artículos 11 y 16
          de la LSSICE, se pone a disposición de todos los usuarios, autoridades y fuerzas de seguridad, colaborando de forma activa en la
          retirada o, en su caso, bloqueo de todos aquellos contenidos que puedan afectar o contravenir la legislación nacional o
          internacional, los derechos de terceros o la moral y el orden público. En caso de que el usuario considere que existe en el sitio
          web algún contenido susceptible de esta clasificación, se ruega lo notifique de forma inmediata al administrador del sitio web.
        </p>
        <h3 className="text-xl font-semibold mb-4">Direcciones IP</h3>
        <p className="mb-6">
          Los servidores del sitio web podrán detectar de manera automática la dirección IP y el nombre de dominio utilizados por el usuario.
          Toda esta información se registra en un fichero de actividad del servidor que permite el posterior procesamiento de los datos con el
          fin de obtener mediciones exclusivamente estadísticas que permitan conocer el número de impresiones de páginas, el número de visitas
          realizadas a los servidores web, el orden de visitas, el punto de acceso, etc.
        </p>

        <h2 className="text-2xl font-bold mb-6">4. Ley aplicable y jurisdicción</h2>
        <p className="mb-6">
          Para la resolución de todas las controversias o cuestiones relacionadas con el presente sitio web o de las actividades en él
          desarrolladas, será de aplicación la legislación española, a la que se someten expresamente las partes, siendo competentes para la
          resolución de todos los conflictos derivados o relacionados con su uso los Juzgados y Tribunales del domicilio del USUARIO o el lugar
          del cumplimiento de la obligación.
        </p>
      </div>
    </section>
    <Footer />
  </div>
);

export default Terminos; 