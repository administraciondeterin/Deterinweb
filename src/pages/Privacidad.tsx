import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Privacidad = () => (
  <div className="min-h-screen bg-gray-50">
    <Helmet>
      <title>Política de Privacidad | Deterín</title>
      <meta name="description" content="Lee la política de privacidad de Deterín. Información sobre cómo protegemos y tratamos tus datos personales." />
      <link rel="canonical" href="/privacidad" />
    </Helmet>
    <Header />
    <section className="py-16 bg-gradient-to-br from-[#019EE1] via-[#019ee15b] to-[#019EE1] text-white">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Política de Privacidad</h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          En Deterín nos tomamos muy en serio la protección de tus datos personales. Aquí te explicamos cómo los tratamos.
        </p>
      </div>
    </section>
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-2xl font-bold mb-6">1. Información al Usuario</h2>
        <p className="mb-6">
          <strong>¿Quién es el responsable del tratamiento de tus datos personales?</strong><br />
          DETERIN, S.L. es el RESPONSABLE del tratamiento de los datos personales del USUARIO y le informa de que estos datos serán tratados de conformidad con lo dispuesto en el Reglamento (UE) 2016/679, de 27 de abril (GDPR), y la Ley Orgánica 3/2018, de 5 de diciembre (LOPDGDD).
        </p>

        <p className="mb-2 font-semibold">¿Para qué tratamos tus datos personales?</p>
        <p className="mb-4">Para mantener una relación comercial con el usuario. Las operaciones previstas para realizar el tratamiento son:</p>
        <ul className="list-disc pl-6 mb-6">
          <li className="mb-2">Remisión de comunicaciones comerciales publicitarias por e-mail, fax, SMS, MMS, redes sociales o cualquier otro medio electrónico o físico, presente o futuro, que posibilite realizar comunicaciones comerciales. Estas comunicaciones serán realizadas por el RESPONSABLE y estarán relacionadas con sus productos y servicios, o de sus colaboradores o proveedores, con los que este haya alcanzado algún acuerdo de promoción. En este caso, los terceros nunca tendrán acceso a los datos personales.</li>
          <li className="mb-2">Realizar estudios de mercado y análisis estadísticos.</li>
          <li className="mb-2">Tramitar encargos, solicitudes, dar respuesta a las consultas o cualquier tipo de petición que sea realizada por el USUARIO a través de cualquiera de las formas de contacto que se ponen a su disposición en la página web del RESPONSABLE.</li>
          <li>Remitir el boletín informativo online, sobre novedades, ofertas y promociones en nuestra actividad.</li>
        </ul>

        <p className="mb-2 font-semibold">¿Por qué motivo podemos tratar tus datos personales?</p>
        <p className="mb-4">Porque el tratamiento está legitimado por el artículo 6 del GDPR de la siguiente forma:</p>
        <ul className="list-disc pl-6 mb-6">
          <li className="mb-2">Con el consentimiento del USUARIO: remisión de comunicaciones comerciales y del boletín informativo.</li>
          <li>Por interés legítimo del RESPONSABLE: realizar estudios de mercado, análisis estadísticos, etc. y tramitar encargos, solicitudes, etc. a petición del USUARIO.</li>
        </ul>

        <p className="mb-2 font-semibold">¿Durante cuánto tiempo guardaremos tus datos personales?</p>
        <p className="mb-6">
          Se conservarán durante no más tiempo del necesario para mantener el fin del tratamiento o existan prescripciones legales que dictaminen su custodia y cuando ya no sea necesario para ello, se suprimirán con medidas de seguridad adecuadas para garantizar la anonimización de los datos o la destrucción total de los mismos.
        </p>

        <p className="mb-2 font-semibold">¿A quién facilitamos tus datos personales?</p>
        <p className="mb-6">
          No está prevista ninguna comunicación de datos personales a terceros salvo, si fuese necesario para el desarrollo y ejecución de las finalidades del tratamiento, a nuestros proveedores de servicios relacionados con comunicaciones, con los cuales el RESPONSABLE tiene suscritos los contratos de confidencialidad y de encargado de tratamiento exigidos por la normativa vigente de privacidad.
        </p>

        <p className="mb-6">
          <strong>DETERIN, S.L.</strong><br />
          CALLE TORRES QUEVEDO, 2 - 28946 FUENLABRADA (Madrid)
        </p>

        <p className="mb-2 font-semibold">¿Cuáles son tus derechos?</p>
        <p className="mb-2">Los derechos que asisten al USUARIO son:</p>
        <ul className="list-disc pl-6 mb-6">
          <li className="mb-2">Derecho a retirar el consentimiento en cualquier momento.</li>
          <li className="mb-2">Derecho de acceso, rectificación, portabilidad y supresión de sus datos, y de limitación u oposición a su tratamiento.</li>
          <li>Derecho a presentar una reclamación ante la autoridad de control (<a className="underline" href="https://www.aepd.es" target="_blank" rel="noreferrer">www.aepd.es</a>) si considera que el tratamiento no se ajusta a la normativa vigente.</li>
        </ul>

        <p className="mb-6">
          <strong>Datos de contacto para ejercer sus derechos:</strong><br />
          DETERIN, S.L.. CALLE TORRES QUEVEDO, 2 - 28946 FUENLABRADA (Madrid). E-mail: <a className="underline" href="mailto:deterin@deterin.com">deterin@deterin.com</a>
        </p>

        <h2 className="text-2xl font-bold mb-6">2. Carácter obligatorio o facultativo de la información facilitada por el Usuario</h2>
        <p className="mb-6">
          Los USUARIOS, mediante la marcación de las casillas correspondientes y la entrada de datos en los campos, marcados con un asterisco (*) en el formulario de contacto o presentados en formularios de descarga, aceptan expresamente y de forma libre e inequívoca, que sus datos son necesarios para atender su petición, por parte del prestador, siendo voluntaria la inclusión de datos en los campos restantes. El USUARIO garantiza que los datos personales facilitados al RESPONSABLE son veraces y se hace responsable de comunicar cualquier modificación de los mismos.
        </p>
        <p className="mb-6">
          El RESPONSABLE informa de que todos los datos solicitados a través del sitio web son obligatorios, ya que son necesarios para la prestación de un servicio óptimo al USUARIO. En caso de que no se faciliten todos los datos, no se garantiza que la información y servicios facilitados sean completamente ajustados a sus necesidades.
        </p>

        <h2 className="text-2xl font-bold mb-6">3. Medidas de Seguridad</h2>
        <p className="mb-6">
          Que de conformidad con lo dispuesto en las normativas vigentes en protección de datos personales, el RESPONSABLE está cumpliendo con todas las disposiciones de las normativas GDPR y LOPDGDD para el tratamiento de los datos personales de su responsabilidad, y manifiestamente con los principios descritos en el artículo 5 del GDPR, por los cuales son tratados de manera lícita, leal y transparente en relación con el interesado y adecuados, pertinentes y limitados a lo necesario en relación con los fines para los que son tratados.
        </p>
        <p className="mb-6">
          El RESPONSABLE garantiza que ha implementado políticas técnicas y organizativas apropiadas para aplicar las medidas de seguridad que establecen el GDPR y la LOPDGDD con el fin de proteger los derechos y libertades de los USUARIOS y les ha comunicado la información adecuada para que puedan ejercerlos.
        </p>
        <p>
          Para más información sobre las garantías de privacidad, puedes dirigirte al RESPONSABLE a través de DETERIN, S.L.. CALLE TORRES QUEVEDO, 2 - 28946 FUENLABRADA (Madrid). E-mail: <a className="underline" href="mailto:deterin@deterin.com">deterin@deterin.com</a>
        </p>
      </div>
    </section>
    <Footer />
  </div>
);

export default Privacidad; 