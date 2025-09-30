export interface Product {
  id: string;
  codigo?: string;
  name: string;
  description: string;
  fullDescription: string;
  presentations: {
    size: string;
    price: number;
  }[];
  categories: string[];
  image: string;
}

export const products: Product[] = [
  {
    id: 'abrillantador-n-20',
    name: 'ABRILLANTADOR N-20',
    description: 'Aditivo secante para el aclarado en máquinas lavavajillas',
    fullDescription: 'Aditivo secante para el aclarado en máquinas lavavajillas. Especialmente indicado para eliminar las manchas debido a gotas de agua. Facilita el secado de la vajilla. Producto formulado con una mezcla de tensioactivos no iónicos de baja espuma y aditivos humectantes para el abrillantado de la vajilla y cristalería. Permite obtener unos resultados excelentes donde las aguas presentan una dureza baja, consiguiendo un abrillantado perfecto libre de velos. Idóneo para todo tipo de máquinas lavavajillas industriales.',
    presentations: [
      { size: '5 kg', price: 23.10 },
      { size: '10 kg', price: 43.20 },
      { size: '25 kg', price: 108.50 }
    ],
    categories: ['automocion', 'hosteleria', 'industria', 'limpiadores'],
    image: '/productos/46.webp'
  },
  {
    id: 'abrillantador-n-3',
    name: 'ABRILLANTADOR N-3',
    description: 'Aditivo secante para lavavajillas industriales',
    fullDescription: 'Aditivo secante para el aclarado en máquinas lavavajillas. Especialmente indicado para eliminar las manchas debido a gotas de agua. Facilita el secado de la vajilla. Producto formulado con una mezcla de tensoactivos no iónicos de baja espuma y aditivos humectantes para el abrillantado de la vajilla y cristalería. Permite obtener unos resultados excelentes donde las aguas presentan una dureza baja, consiguiendo un abrillantado perfecto libre de velos. Idóneo para todo tipo de máquinas lavavajillas industriales.',
    presentations: [
      { size: '5 kg', price: 15.00 },
      { size: '10 kg', price: 28.40 },
      { size: '25 kg', price: 68.80 }
    ],
    categories: ['automocion', 'hosteleria', 'industria', 'limpiadores'],
    image: '/productos/46.webp'
  },
  {
    id: 'abrillantador-n-5',
    name: 'ABRILLANTADOR N-5',
    description: 'Aditivo secante abrillantador para máquinas lavavajillas',
    fullDescription: 'Aditivo secante para el aclarado en máquinas lavavajillas. Especialmente indicado para eliminar las manchas debido a gotas de agua, facilitando el secado rápido y proporcionando un alto brillo en la vajilla. Producto formulado con una mezcla de tensoactivos no iónicos de baja espuma y aditivos humectantes para el abrillantado de la vajilla y cristalería. Permite obtener unos resultados excelentes donde las aguas presentan una dureza media consiguiendo un abrillantado perfecto libre de velos. Idóneo para todo tipo de máquinas lavavajillas industriales.',
    presentations: [
      { size: '5 kg', price: 19.30 },
      { size: '10 kg', price: 36.50 },
      { size: '25 kg', price: 89.10 }
    ],
    categories: ['automocion', 'hosteleria', 'industria', 'limpiadores'],
    image: '/productos/47.webp'
  },
  {
    id: 'ambientador',
    codigo: '1022',
    name: 'AMBIENTADOR',
    description: 'Ambientador líquido concentrado con esencias de gran rendimiento',
    fullDescription: 'Ambientador líquido formulado con esencias de gran rendimiento que permiten perfumar el ambiente a bajas dosis con un aroma de gran permanencia. Imprescindible en locales con mucha afluencia de público.',
    presentations: [
      { size: '5 kg', price: 22.75 },
      { size: '10 kg', price: 43.00 },
      { size: '25 kg', price: 110.00 }
    ],
    categories: ['hosteleria', 'industria', 'lavanderia', 'limpiadores'],
    image: '/productos/20.webp'
  },
  {
    id: 'biomatic',
    name: 'BIOMATIC',
    description: 'Potenciador de lavado de ropa (disuelve-manchas) concentrado',
    fullDescription: 'Disuelve manchas potenciador de la colada. Detergente concentrado que permite eliminar las manchas más difíciles, dejando los tejidos con un agradable aroma fresco. Aplicado a las manchas, BIOMATIC penetra en el tejido y las disuelve ayudando a su detergente a eliminarlas y manteniendo los colores sin necesidad de frotar. Especialmente recomendado para manchas de grasa, sangre, comida, cuellos y puños, etc.',
    presentations: [
      { size: '5 kg', price: 15.50 },
      { size: '10 kg', price: 29.20 },
      { size: '25 kg', price: 71.40 }
    ],
    categories: ['automocion', 'hosteleria', 'industria', 'limpiadores'],
    image: '/productos/12.webp'
  },
  {
    id: 'biosani-wc',
    name: 'BIOSANI WC',
    description: 'Limpiador desincrustante ácido para inodoros y sanitarios',
    fullDescription: 'El uso diario de BIOSANI WC asegura la limpieza higiénica del inodoro. Disuelve las incrustaciones calcáreas y manchas de sales metálicas, óxido sarro y suciedad. Activo limpiador desincrustantes, especialmente formulado para la eliminación de incrustaciones en inodoros, lavabos, urinarios. Higieniza, desodoriza y limpia en profundidad la superficies, dejándolas brillantes. Ideal para mantenimiento y limpieza de los servicios. Limpieza a fondo de los alicatados. BIOSANI WC diluido es de gran ayuda, eliminando el ennegrecimiento de las juntas.',
    presentations: [
      { size: '5 kg', price: 17.30 },
      { size: '10 kg', price: 32.80 },
      { size: '25 kg', price: 81.00 },
      { size: '15×1 L (con tapón)', price: 65.40 }
    ],
    categories: ['automocion', 'hosteleria', 'industria', 'limpiadores'],
    image: '/productos/12.webp'
  },
  {
    id: 'ceradet-lavicera',
    name: 'CERADET LAVICERA',
    description: 'Detergente limpiador abrillantador de suelos con ceras',
    fullDescription: 'Restaurador abrillantador. Combina un detergente con poder limpiador y desengrasante con una mezcla de ceras naturales y sintéticas. A su eficacia como limpiador de pavimentos, se añaden las ceras para un secado más rápido y abrillantado en una misma operación, dejando en el ambiente, un perfume agradable y un brillo duradero sobre los suelos. Especialmente recomendado para pavimentos de terrazo, baldosas, gres cerámicos, plásticos, sintéticos, mármoles, maderas, etc. Renovará la superficies con un brillo resplandeciente y duradero.',
    presentations: [
      { size: '5 kg', price: 27.16 },
      { size: '10 kg', price: 56.40 },
      { size: '25 kg', price: 128.70 }
    ],
    categories: ['automocion', 'hosteleria', 'industria', 'limpiadores'],
    image: '/productos/7.webp'
  },
  {
    id: 'champu-tunel-90',
    name: 'CHAMPÚ TÚNEL 90',
    description: 'Champú detergente para túneles de lavado de coches',
    fullDescription: 'Disuelve con facilidad las grasas y suciedad general, no siendo necesario la mayoría de los casos, el frotado manual que resulta tan perjudicial para la pintura, y evitando además, costos de mano de obra. Su reducido nivel de espuma facilita la operación de lavado. No ataca ninguno de los elementos sensibles de los vehículos, como son gomas, cauchos, cromados, plásticos, etc.',
    presentations: [
      { size: '5 kg', price: 17.80 },
      { size: '10 kg', price: 34.20 },
      { size: '25 kg', price: 82.80 }
    ],
    categories: ['automocion', 'hosteleria', 'limpiadores'],
    image: '/productos/27.webp'
  },
  {
    id: 'degras',
    name: 'DEGRAS',
    description: 'Detergente desengrasante altamente concentrado para industria alimentaria',
    fullDescription: 'DEGRAS desengrasante formulado para la limpieza de suciedades tenaces. Limpieza de filtros, manchas de escapes, campanas de extracción, paredes, cocinas, azulejos, terrazas sanitarios, suelos muy sucios, piezas de acero inoxidable, skay, etc.',
    presentations: [
      { size: '5 kg', price: 18.05 },
      { size: '10 kg', price: 34.70 },
      { size: '25 kg', price: 83.80 },
      { size: '15×1 L (tapón)', price: 58.50 },
      { size: '15×1 L (pulverizador)', price: 62.30 }
    ],
    categories: ['automocion', 'hosteleria', 'industria', 'limpiadores'],
    image: '/productos/36.webp'
  },
  {
    id: 'degras-r',
    name: 'DEGRAS R',
    description: 'Desengrasante formulado para suciedades muy tenaces',
    fullDescription: 'DEGRAS R desengrasante formulado para la limpieza de suciedades tenaces, limpieza de filtros, manchas de escapes, campanas de extracción, paredes, cocinas, azulejos, terrazas, sanitarios, suelos muy sucios, piezas de acero inoxidable, skay, etc. No utilizar sobre superficies de aluminio.',
    presentations: [
      { size: '5 kg', price: 17.80 },
      { size: '10 kg', price: 34.20 },
      { size: '25 kg', price: 82.80 }
    ],
    categories: ['automocion', 'desengrasantes', 'hosteleria', 'industria', 'lavanderia', 'limpiadores'],
    image: '/productos/35.webp'
  },
  {
    id: 'degras-ry',
    name: 'DEGRAS RY',
    description: 'Detergente desengrasante muy concentrado para industria alimentaria e industria en general',
    fullDescription: 'Detergente desengrasante altamente concentrado adecuado para la limpieza de instalaciones y útiles de trabajo en la industria alimentaria y cualquier tipo de industria. Su reserva alcalina le hace apropiado para la eliminación de grasas y aceites. Disuelve las grasas tanto las de tipo animal como las de tipo vegetal, saponificándolas y emulsionándolas. No ataca al hierro ni a los vitrificados. Considerable ahorro de tiempo y mano de obra. La espuma formada aumenta el tiempo de acción del mismo, con lo que la operación de limpieza es más efectiva.',
    presentations: [
      { size: '5 kg', price: 22.50 },
      { size: '10 kg', price: 43.80 },
      { size: '25 kg', price: 105.60 }
    ],
    categories: ['automocion', 'hosteleria', 'limpiadores'],
    image: '/productos/34.webp'
  },
  {
    id: 'deter',
    name: 'DETER',
    description: 'Detergente líquido alcalino para lavado automático de vajilla',
    fullDescription: 'Detergente, líquido alcalino para el lavado de vajilla en máquina automática. Enérgico desengrasante de espuma, controlada y gran rendimiento de lavado. No ataca el cristal, la porcelana, la loza ni las partes metálicas de la máquina lavavajillas. Incorpora secuestrantes que permiten actuar eficazmente en aguas de dureza baja-media.',
    presentations: [
      { size: '6 kg', price: 16.10 },
      { size: '12 kg', price: 30.40 },
      { size: '28 kg', price: 68.50 }
    ],
    categories: ['automocion', 'hosteleria', 'industria', 'limpiadores'],
    image: '/productos/43.webp'
  },
  {
    id: 'deter-85',
    name: 'DETER-85',
    description: 'Versión de detergente lavavajillas para aguas semiduras',
    fullDescription: 'Detergente, líquido alcalino para el lavado de vajillas en máquina automática. Enérgico desengrasante de espuma, controlada y gran rendimiento de lavado. No ataca el cristal, la porcelana, la loza ni las partes metálicas de la máquina lavavajillas. Incorpora secuestrantes que le permiten actuar eficazmente en aguas SEMIDURAS.',
    presentations: [
      { size: '6 kg', price: 17.40 },
      { size: '12 kg', price: 32.80 },
      { size: '30 kg', price: 79.50 }
    ],
    categories: ['automocion', 'hosteleria', 'industria', 'limpiadores'],
    image: '/productos/42.webp'
  },
  {
    id: 'detercloro',
    name: 'DETERCLORO',
    description: 'Detergente limpiador con hipoclorito (clorado), de alta capacidad limpiadora',
    fullDescription: 'Detergente limpiador con hipoclorito, especialmente formulado con alta capacidad limpiadora. Enérgico limpiador. Es ideal para todos los casos en que se requiera una limpieza total, además es un producto de alto rendimiento y economía. Recomendado para la limpieza de granjas, salas de despiece, zonas agropecuarias, suelos, azulejos, paredes, armarios, bañeras, inodoros y múltiples aplicaciones donde se desea una limpieza eficaz. Idóneo también su aplicación en colectividades, mataderos, cocinas, restaurantes, hospitales, centros sanitarios, colegios, comedores, etc.',
    presentations: [
      { size: '5 kg', price: 13.50 },
      { size: '10 kg', price: 25.80 },
      { size: '25 kg', price: 61.20 }
    ],
    categories: ['automocion', 'hosteleria', 'limpiadores'],
    image: '/productos/31.webp'
  },
  {
    id: 'detercrem',
    name: 'DETERCREM',
    description: 'Detergente en crema para limpieza de superficies',
    fullDescription: 'Detergente en crema formulado para la limpieza eficaz de superficies especiales. Su textura cremosa permite una aplicación controlada y una acción prolongada sobre la suciedad adherida. Ideal para limpieza de superficies que requieren un tratamiento especial y cuidadoso.',
    presentations: [
      { size: '5 kg', price: 25.70 },
      { size: '10 kg', price: 52.40 },
      { size: '25 kg', price: 121.60 }
    ],
    categories: ['automocion', 'hosteleria', 'industria', 'limpiadores'],
    image: '/productos/6.webp'
  },
  {
    id: 'deterfik',
    name: 'DETERFIK',
    description: 'Limpiador formulado especialmente para eliminar insectos adheridos en vehículos',
    fullDescription: 'Producto, especialmente formulado para la eliminación de insectos muertos que se depositan en los faros, cristales, paragolpes, carrocerías, etc. Elimina instantáneamente los insectos que se quedan pegados en las partes del coche. Su formulación a base de tensioactivos no iónicos y catiónicos asegura una limpieza eficaz. Espumeante actúa con rapidez sin dejar huellas ni velos. Elimina toda clase de manchas de insectos, sangre cercos a las patas, etc.',
    presentations: [
      { size: '5 kg', price: 18.60 },
      { size: '10 kg', price: 35.80 },
      { size: '25 kg', price: 86.60 }
    ],
    categories: ['automocion', 'hosteleria', 'industria', 'lavanderia', 'limpiadores'],
    image: '/productos/25.webp'
  },
  {
    id: 'deterflash',
    name: 'DETERFLASH',
    description: 'Champú para moquetas y tapicerías (limpieza interior de vehículos, alfombras, etc.)',
    fullDescription: 'Champú para la limpieza de moquetas y alfombras. Uso en general para interiores de vehículos, camiones, autocares, etc. Producto diseñado para la limpieza e higienización de los interiores del automóvil. Su formulación está especialmente concebida para ser utilizada en las máquinas de inyección-extracción. No produce demasiada espuma, por lo tanto, no es necesario añadir antiespumante al depósito de recogida de la máquina. Se emplea para eliminar manchas y suciedades resistentes. Apropiado para todo tipo de fibras. Aviva los colores de las moquetas, alfombras y tapicerías dándoles aspecto de nuevas. Gran poder antiestático. Imprescindible en la industria del automóvil, concesionarios, garajes, talleres, empresas de transporte, ferrocarriles, tratamiento especial del lavado de vehículos, etc.',
    presentations: [
      { size: '5 kg', price: 19.80 },
      { size: '10 kg', price: 38.20 },
      { size: '25 kg', price: 87.90 }
    ],
    categories: ['automocion', 'hosteleria', 'limpiadores'],
    image: '/productos/26.webp'
  },
  {
    id: 'detergel-r',
    name: 'DETERGEL-R',
    description: 'Producto en gel detergente para uso profesional (industria alimentaria, etc.)',
    fullDescription: 'Producto en forma de gel de acción detergente. Para uso profesional en la industria alimentaria. Limpia y desengrasa manos, especialmente sucias, además de proteger la piel por su contenido en lanolinas.',
    presentations: [
      { size: '5 kg', price: 21.10 },
      { size: '10 kg', price: 40.60 },
      { size: '25 kg', price: 98.00 }
    ],
    categories: ['automocion', 'hosteleria', 'industria', 'limpiadores'],
    image: '/productos/4.webp'
  },
  {
    id: 'determatic',
    codigo: '1702',
    name: 'DETERMATIC',
    description: 'Detergente líquido para lavado de ropa en lavadoras, tanto domésticas como industriales',
    fullDescription: 'Detergente líquido para el lavado de ropa en máquina lavadora, tanto doméstica como industrial. Detergente líquido de espuma controlada que elimina las manchas más difíciles, dejando los tejidos con un agradable aroma a fresco. No contiene enzimas en beneficio de poder realizar procesos de lavado con mayor alcalinidad. Posee abrillantadores ópticos estables a la lejía. Detergente apropiado para el lavado a baja media temperatura tanto en los procesos convencionales de lavado como en túneles pudiéndose combinar con lejía.',
    presentations: [
      { size: '5 kg', price: 22.60 },
      { size: '10 kg', price: 43.90 },
      { size: '25 kg', price: 106.90 }
    ],
    categories: ['hosteleria', 'industria', 'lavanderia'],
    image: '/productos/10.webp'
  },
  {
    id: 'detersani',
    name: 'DETERSANI',
    description: 'Detergente desodorizante multiuso de doble acción para baños y superficies',
    fullDescription: 'Detergente desodorizante de doble acción para baños y todo tipo de superficies. Las bañeras lavabos, bidés, azulejos, etc. quedan limpios y brillantes con una agradable olor a limpio. Su formulación a base de tensioactivos de alta eficacia asegura una limpieza extraordinaria tanto en aguas duras como blandas. Está particularmente indicado para limpieza y desodorización de locales destinados al público, cocinas, restaurantes, colegios, comedores, hoteles, oficinas, aseos, etc.',
    presentations: [
      { size: '5 kg', price: 14.30 },
      { size: '10 kg', price: 27.40 },
      { size: '25 kg', price: 65.00 }
    ],
    categories: ['automocion', 'hosteleria', 'industria', 'limpiadores'],
    image: '/productos/13.webp'
  },
  {
    id: 'dex-amoniacal-extra',
    name: 'DEX AMONIACAL EXTRA',
    description: 'Limpiador amoniacal diario multiusos',
    fullDescription: 'DEX AMONIACAL EXTRA es un limpiador amoniacal líquido para ser usado diariamente en suelos, cocinas, azulejos cuartos de baño, mobiliario, etc. Es ligeramente espumoso, lo que facilita el aclarado posterior y el secado. No necesita frotamiento. Basta con pasar superficialmente la fregona o mopa para eliminar todo resto de suciedad.',
    presentations: [
      { size: '5 kg', price: 22.75 },
      { size: '10 kg', price: 43.00 },
      { size: '25 kg', price: 110.00 }
    ],
    categories: ['automocion', 'hosteleria', 'industria', 'limpiadores'],
    image: '/productos/15.webp'
  },
  {
    id: 'graffiti-x',
    name: 'GRAFFITI X',
    description: 'Limpiador enérgico para grafitis, tintas y manchas difíciles',
    fullDescription: 'Limpiador enérgico para grafitis, tintas y manchas difíciles en todo tipo de superficies. Elimina tintas de bolígrafo, rotulador, pinturas, etc., así como suciedades persistentes. (No aplicar sobre aluminio). Usos: escritorios, pupitres, muebles de oficina, plásticos, etc. Utilizable en colegios, oficinas, cocinas, comercios, interiores de vehículos, etc. En muchas superficies no requiere aclarado. Remueve manchas muy resistentes, incluidas grasas y tintas. En superficies pintadas, probar antes la resistencia de la pintura.',
    presentations: [
      { size: '5 kg', price: 18.05 },
      { size: '10 kg', price: 34.70 },
      { size: '25 kg', price: 84.05 },
      { size: '15×1 L (pulverizador)', price: 62.30 }
    ],
    categories: ['automocion', 'hosteleria', 'industria', 'limpiadores'],
    image: '/productos/2.webp'
  },
  {
    id: 'limpcris',
    name: 'LIMPCRIS',
    description: 'Limpiador multiusos limpiacristales concentrado',
    fullDescription: 'Limpiador multiusos para la limpieza de cristales, espejos, plásticos y todo tipo de superficies modernas: formica, skay, plásticos, metales, etc. Limpia y desengrasa la superficie de una forma eficaz, sin dejar residuos o irisación secando rápidamente. Deja un agradable perfume en el ambiente tras su utilización. Es un producto concebido específicamente para la limpieza de cristales, porcelanas, vitrificadas y superficies cromadas en general. Se utiliza en estado puro pulverizando la superficie frotando a continuación con un paño seco, el cual absorberá totalmente la suciedad del cristal. Para la limpieza de superficies con un grado de suciedad bastante elevado se puede emplear una esponja o paño humedecido en el producto para frotar ligeramente.',
    presentations: [
      { size: '5 kg', price: 13.00 },
      { size: '10 kg', price: 24.80 },
      { size: '25 kg', price: 60.90 },
      { size: '15×1 L (pulverizador)', price: 42.50 }
    ],
    categories: ['automocion', 'hosteleria', 'industria', 'limpiadores'],
    image: '/productos/11.webp'
  },
  {
    id: 'ludex',
    name: 'LUDEX',
    description: 'Detergente especial para suelos y paredes muy sucias y engrasadas',
    fullDescription: 'LUDEX. Producto especial para la limpieza de suelos y paredes sucias y engrasadas, tales como cocinas, mataderos, salas de despiece, industrias, chacinera, etc. No necesita aclarado posterior y no deja velos. Es totalmente soluble en agua con reacción alcalina, debido a lo cual saponifica y disuelve las grasas. Óptimo rendimiento por metro cuadrado. Imprescindible en la limpieza diaria en aquellos sitios donde se requiera quitar cúmulos de grasa orgánica en superficies lavables.',
    presentations: [
      { size: '5 kg', price: 14.00 },
      { size: '10 kg', price: 26.60 },
      { size: '25 kg', price: 62.70 }
    ],
    categories: ['automocion', 'hosteleria', 'limpiadores'],
    image: '/productos/28.webp'
  },
  {
    id: 'ludex-e',
    name: 'LUDEX E',
    description: 'Detergente líquido para limpieza general en sector industrial o institucional',
    fullDescription: 'Detergente líquido para la limpieza general en el sector industrial o institucional. Su poderosa acción permite emulsionar y eliminar las grasas más tenaces de una forma rápida y eficaz. Mejora el aspecto y conservación de los suelos. Adecuado también su empleo en máquinas de lavar a presión. Óptimo rendimiento por metro cuadrado. Imprescindible en la limpieza diaria en aquellos sitios donde se requiera quitar cúmulos de grasa orgánica en superficies lavables. Deja un agradable perfume en el ambiente.',
    presentations: [
      { size: '5 kg', price: 14.50 },
      { size: '10 kg', price: 27.80 },
      { size: '25 kg', price: 66.30 }
    ],
    categories: ['automocion', 'hosteleria', 'limpiadores'],
    image: '/productos/32.webp'
  },
  {
    id: 'mkl-10',
    name: 'MKL-10',
    description: 'Limpiador desengrasante multifuncional de amplio espectro',
    fullDescription: 'MKL-10 es un limpiador desengrasante multifuncional que posee una gran variedad de aplicaciones entre las que se encuentran limpieza de mesas de formica hornos (ideal a 20°-30°) sartenes, paelleras, cacerolas, campanas y extractores, electrodomésticos, persianas, baños, etc. Realza la belleza del acero inoxidable. Si se aplica en el aluminio, hay que enjuagar inmediatamente. El desengrasante MKL-10 es un desengrasante muy potente que elimina todo tipo de grasas adheridas sobre cualquier superficie, dejando las en perfecto estado. Muy eficaz en la eliminación de manchas sobre tejidos de colores sólidos y zapatillas.',
    presentations: [
      { size: '5 kg', price: 20.60 },
      { size: '10 kg', price: 39.20 },
      { size: '25 kg', price: 96.70 },
      { size: '15×1 L (tapón)', price: 58.50 },
      { size: '15×1 L (pulverizador)', price: 62.30 }
    ],
    categories: ['automocion', 'hosteleria', 'industria', 'limpiadores'],
    image: '/productos/37.webp'
  },
  {
    id: 'oxidet',
    name: 'OXIDET',
    description: 'Aditivo blanqueante concentrado para lavandería',
    fullDescription: 'Aditivo blanqueante concentrado, especialmente indicado para uso en lavanderías comerciales, centros hospitalarios y OPL. El producto puede ser utilizado para todo tipo de ropa, excepto nylon, y debería ser aplicado en el lavado principal a temperaturas entre 70 y 90 °C. Puede utilizarse en la fase de lavado o solo en una fase posterior de blanqueo, donde se obtiene el máximo rendimiento.',
    presentations: [
      { size: '5 kg', price: 13.00 },
      { size: '10 kg', price: 24.80 },
      { size: '25 kg', price: 54.90 }
    ],
    categories: ['automocion', 'hosteleria', 'industria', 'limpiadores'],
    image: '/productos/9.webp'
  },
  {
    id: 'suavil',
    codigo: '1703',
    name: 'SUAVIL',
    description: 'Suavizante textil industrial',
    fullDescription: 'Suavizante textil. Suaviza la ropa y elimina la electricidad estática, disminuyendo el reensuciamiento y los problemas de calandrado. Evita olores desagradables en el ambiente de trabajo. Gran poder de rehumectado, ofreciendo una mayor capacidad de absorción de agua, comparado con cualquier otro producto similar. SUAVIL tiene unas propiedades que permite reducir el tiempo de secado, extrayendo mejor el agua con la centrifugadora. Agente suavizante y antiestático para utilizar en la colada industrial o doméstica en el último baño de aclarado. Uso fundamentalmente en hoteles, restaurantes, hospitales, lavanderías, instalaciones militares, residencias de ancianos y en general todo tipo de colectividades.',
    presentations: [
      { size: '5 kg', price: 16.30 },
      { size: '10 kg', price: 31.40 },
      { size: '25 kg', price: 75.20 }
    ],
    categories: ['automocion', 'hosteleria', 'industria', 'limpiadores','lavanderia'],
    image: '/productos/7.webp'
  },
  {
    id: 'supercal',
    name: 'SUPERCAL',
    description: 'Detergente líquido alcalino para lavavajillas automáticas, formulado para aguas duras',
    fullDescription: 'Detergente, líquido alcalino para el lavado de vajilla en máquina automática. Enérgico desengrasante de espuma, controlada y gran rendimiento de lavado. No ataca el cristal, la porcelana, la loza ni las partes metálicas de la máquina lavavajillas. Incorpora secuestrantes que le permiten actuar eficazmente en aguas DURAS.',
    presentations: [
      { size: '6 kg', price: 19.50 },
      { size: '12 kg', price: 37.20 },
      { size: '30 kg', price: 90.10 }
    ],
    categories: ['automocion', 'hosteleria', 'industria', 'limpiadores'],
    image: '/productos/44.webp'
  },
  {
    id: 'supercal-e',
    name: 'SUPERCAL-E',
    description: 'Versión extrema de SUPERCAL, para aguas de extrema dureza',
    fullDescription: 'Detergente, líquido alcalino para el lavado de vajilla en máquina automática. Enérgico desengrasante de espuma, controlada y gran rendimiento de lavado. Protege el cristal, la porcelana, la loza partes metálicas de la máquina de lavavajillas. Incorpora secuestrantes que permiten actuar eficazmente en aguas de extrema dureza. (Hasta 100°D/F)',
    presentations: [
      { size: '6 kg', price: 24.40 },
      { size: '12 kg', price: 46.80 },
      { size: '30 kg', price: 114.50 }
    ],
    categories: ['automocion', 'hosteleria', 'industria', 'limpiadores'],
    image: '/productos/40.webp'
  },
  {
    id: 'superkay-1000',
    name: 'SUPERKAY-1000',
    description: 'Lavavajillas manual concentrado para fregado de vajilla y menaje a mano',
    fullDescription: 'Lavavajillas manual para la limpieza de todo tipo de vajillas y menaje de cocina. También se puede utilizar para la limpieza general diaria de todo tipo de superficie lavables como suelos, azulejos, paredes, acero inoxidable, encimeras y muebles, vajillas y cristalería, menaje y cubertería, así como superficies del área de cocina.',
    presentations: [
      { size: '5 kg', price: 16.30 },
      { size: '10 kg', price: 31.40 },
      { size: '25 kg', price: 75.20 },
      { size: '15×1 L (tapón)', price: 52.80 }
    ],
    categories: ['hosteleria', 'industria', 'limpiadores'],
    image: '/productos/14.webp'
  },
  {
    id: 'superkay-500',
    name: 'SUPERKAY-500',
    description: 'Detergente lavavajillas manual para vajilla y menaje',
    fullDescription: 'Lavavajillas manual para la limpieza de todo tipo de vajillas y menaje de cocina. También se puede utilizar para la limpieza general diaria de todo tipo de superficie lavables como suelos, azulejos, paredes, acero inoxidable, encimeras y muebles, vajillas y cristalería, menaje y cubertería, así como superficies del área de cocina.',
    presentations: [
      { size: '5 kg', price: 15.00 },
      { size: '10 kg', price: 28.40 },
      { size: '25 kg', price: 68.80 },
      { size: '15×1 L (tapón)', price: 48.50 }
    ],
    categories: ['hosteleria', 'industria', 'lavanderia', 'limpiadores'],
    image: '/productos/16.webp'
  },
  {
    id: 'superkay-500-f',
    name: 'SUPERKAY-500 F',
    description: 'Variante de SUPERKAY-500 con fragancia especial',
    fullDescription: 'Lavavajillas manual para la limpieza de todo tipo de vajillas y menaje de cocina. También se puede utilizar para la limpieza general diaria de todo tipo de superficie lavables como suelos, azulejos, paredes, acero inoxidable, encimeras y muebles, vajillas y cristalería, menaje y cubertería, así como superficies del área de cocina.',
    presentations: [
      { size: '5 kg', price: 24.40 },
      { size: '10 kg', price: 47.20 },
      { size: '25 kg', price: 115.80 },
      { size: '15×1 L (tapón)', price: 68.90 }
    ],
    categories: ['hosteleria', 'industria', 'lavanderia', 'limpiadores'],
    image: '/productos/17.webp'
  },
  {
    id: 'superplac',
    name: 'SUPERPLAC',
    description: 'Producto especialmente diseñado para limpieza de planchas, hornos, freidoras y cocinas con grasa carbonizada',
    fullDescription: 'SUPERPLAC es un producto diseñado, especialmente para la limpieza de todo tipo de planchas, hornos, freidoras, cocinas, etc., las cuales presentan una fuerte capa de grasa carbonizada o carbonilla. Indispensable en la limpieza profesional de cocinas industriales. Es la solución para la limpieza de fogones, hornos, planchas, freidoras y restos requemados.',
    presentations: [
      { size: '6 kg', price: 23.50 },
      { size: '12 kg', price: 45.60 },
      { size: '30 kg', price: 110.00 }
    ],
    categories: ['automocion', 'hosteleria', 'industria', 'limpiadores'],
    image: '/productos/38.webp'
  },
  {
    id: 'abrillantador-n-10',
    name: 'ABRILLANTADOR N-10',
    description: 'Aditivo secante para el aclarado en máquinas lavavajillas',
    fullDescription: 'Aditivo secante para el aclarado en máquinas lavavajillas. Especialmente indicado para eliminar las manchas debido a gotas de agua. Facilita el secado de la vajilla. Producto formulado con una mezcla de tenso activos, no iónicos de baja espuma y aditivos, humectantes para el abrillantado de la vajilla y cristalería. Permite obtener unos resultados excelentes donde las aguas presentan una dureza baja, consiguiendo una brillante perfecto libre de velos. Idóneo para todo tipo de máquinas lavavajillas industriales.',
    presentations: [
      { size: '5 kg', price: 21.50 },
      { size: '10 kg', price: 40.80 },
      { size: '25 kg', price: 98.20 }
    ],
    categories: ['automocion', 'hosteleria', 'industria', 'limpiadores'],
    image: '/productos/35.webp'
  },
  {
    id: 'gel-manos-deterin-1',
    name: 'GEL DE MANOS DETERIN',
    description: 'Jabón líquido de manos que limpia y acondiciona',
    fullDescription: 'Jabón líquido de manos que limpia y acondiciona a base de tensión activos especiales. Por su rica formulación, deja una agradable sensación en las manos y permite un aclarado perfecto. De elevada concentración, altamente espumante y de rápido enjuague.',
    presentations: [
      { size: '5 kg', price: 18.90 },
      { size: '10 kg', price: 36.20 },
      { size: '25 kg', price: 87.50 }
    ],
    categories: ['hosteleria', 'industria', 'limpiadores'],
    image: '/productos/18.webp'
  },
  {
    id: 'gel-manos-deterin-2',
    name: 'GEL DE MANOS DETERIN',
    description: 'Jabón líquido de manos que limpia y acondiciona',
    fullDescription: 'Jabón líquido de manos que limpia y acondiciona a base de tensión activos especiales. Por su rica formulación, deja una agradable sensación en las manos y permite un aclarado perfecto. De elevada concentración, altamente espumante y de rápido enjuague.',
    presentations: [
      { size: '5 kg', price: 18.90 },
      { size: '10 kg', price: 36.20 },
      { size: '25 kg', price: 87.50 }
    ],
    categories: ['hosteleria', 'industria', 'limpiadores'],
    image: '/productos/19.webp'
  },
  {
    id: 'multiclean',
    codigo: 'X0013',
    name: 'MULTICLEAN',
    description: 'Eliminador de olores y limpiador multiusos',
    fullDescription: 'Eliminador de olores. Es un producto especialmente concebido para limpiar cualquier tipo de superficie lavable. Tiene una alta eficacia por su composición y asegura una higiene total. Presenta una particularidad importante y es la de limpiar prácticamente todo sin deteriorar y dejando una agradable olor residual. Actúa también como un excelente quitamanchas. No deja pelos ni rayas. Alto rendimiento y económico. Aplicaciones en vidrios y espejos, suelos, paredes, moquetas, maquinaria, plexiglás, cocinas, baños, ropa de trabajo, tapicerías, metales interiores y carrocerías de vehículos, clínicas, hospitales, guarderías, parques infantiles, etc.',
    presentations: [
      { size: '5 kg', price: 16.80 },
      { size: '10 kg', price: 32.40 },
      { size: '25 kg', price: 78.90 }
    ],
    categories: ['automocion', 'hosteleria', 'industria', 'limpiadores'],
    image: '/productos/8.webp'
  },
  {
    id: 'suavil-white',
    codigo: '1711',
    name: 'SUAVIL WHITE',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '5 kg', price: 0 },
      { size: '10 kg', price: 0 },
      { size: '25 kg', price: 0 }
    ],
    categories: ['lavanderia'],
    image: '/productos/7.webp'
  },
  {
    id: 'quitamanchas-ropa-blanca-solido',
    codigo: '1712',
    name: 'QUITAMANCHAS ROPA BLANCA SÓLIDO',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '10 kg', price: 0 }
    ],
    categories: [],
    image: 'sin-imagen'
  },
  {
    id: 'detergente-atomizado-deterin',
    codigo: '1704',
    name: 'DETERGENTE ATOMIZADO DETERIN',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '10 kg', price: 0 },
      { size: '20 kg', price: 0 }
    ],
    categories: [],
    image: 'sin-imagen'
  },
  {
    id: 'lejia-lavadora',
    codigo: '1721P',
    name: 'LEJÍA LAVADORA',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '16 kg', price: 0 }
    ],
    categories: [],
    image: 'sin-imagen'
  },
  {
    id: 't-90-orange',
    codigo: '3206',
    name: 'T-90 ORANGE',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '1 kg', price: 0 },
      { size: '5 kg', price: 0 }
    ],
    categories: [],
    image: 'sin-imagen'
  },
  {
    id: 'ambientador-deterin',
    codigo: '1022',
    name: 'AMBIENTADOR DETERIN',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '5 kg', price: 0 },
      { size: '10 kg', price: 0 },
      { size: '25 kg', price: 0 }
    ],
    categories: [],
    image: 'sin-imagen'
  },
  {
    id: 'ambientador-airlimp',
    codigo: '1024',
    name: 'AMBIENTADOR AIRLIMP',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '5 kg', price: 0 },
      { size: '10 kg', price: 0 },
      { size: '25 kg', price: 0 }
    ],
    categories: [],
    image: 'sin-imagen'
  },
  {
    id: 'ambientador-antitabaco',
    codigo: '1001',
    name: 'AMBIENTADOR ANTITABACO',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '5 kg', price: 0 },
      { size: '10 kg', price: 0 },
      { size: '15 kg', price: 0 },
      { size: '25 kg', price: 0 }
    ],
    categories: [],
    image: 'sin-imagen'
  },
  {
    id: 'ambientador-bacter',
    codigo: '1021',
    name: 'AMBIENTADOR BACTER',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '5 kg', price: 0 },
      { size: '10 kg', price: 0 },
      { size: '15 kg', price: 0 },
      { size: '25 kg', price: 0 }
    ],
    categories: [],
    image: 'sin-imagen'
  },
  {
    id: 'ambientador-alameda',
    codigo: '1015',
    name: 'AMBIENTADOR ALAMEDA',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '5 kg', price: 0 },
      { size: '10 kg', price: 0 },
      { size: '15 kg', price: 0 },
      { size: '25 kg', price: 0 }
    ],
    categories: [],
    image: 'sin-imagen'
  },
  {
    id: 'ambientador-pino',
    codigo: '1002',
    name: 'AMBIENTADOR PINO',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '5 kg', price: 0 },
      { size: '10 kg', price: 0 },
      { size: '15 kg', price: 0 },
      { size: '25 kg', price: 0 }
    ],
    categories: [],
    image: 'sin-imagen'
  },
  {
    id: 'ambientador-lavanda',
    codigo: '1005',
    name: 'AMBIENTADOR LAVANDA',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '5 kg', price: 0 },
      { size: '10 kg', price: 0 },
      { size: '15 kg', price: 0 },
      { size: '25 kg', price: 0 }
    ],
    categories: [],
    image: 'sin-imagen'
  },
  {
    id: 'ambientador-drak',
    codigo: '1004',
    name: 'AMBIENTADOR DRAK',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '5 kg', price: 0 },
      { size: '10 kg', price: 0 },
      { size: '15 kg', price: 0 },
      { size: '25 kg', price: 0 }
    ],
    categories: [],
    image: 'sin-imagen'
  },
  {
    id: 'ambientador-dolcegavana',
    codigo: '1009',
    name: 'AMBIENTADOR DOLCEGAVANA',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '5 kg', price: 0 },
      { size: '10 kg', price: 0 },
      { size: '15 kg', price: 0 },
      { size: '25 kg', price: 0 }
    ],
    categories: [],
    image: 'sin-imagen'
  },
  {
    id: 'ambientador-loeve',
    codigo: '1010',
    name: 'AMBIENTADOR LOEVE',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '5 kg', price: 0 },
      { size: '10 kg', price: 0 },
      { size: '15 kg', price: 0 },
      { size: '25 kg', price: 0 }
    ],
    categories: [],
    image: 'sin-imagen'
  },
  {
    id: 'ambientador-bulgary',
    codigo: '1007',
    name: 'AMBIENTADOR BULGARY',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '5 kg', price: 0 },
      { size: '10 kg', price: 0 },
      { size: '15 kg', price: 0 },
      { size: '25 kg', price: 0 }
    ],
    categories: [],
    image: 'sin-imagen'
  },
  {
    id: 'ambientador-her',
    codigo: '1011',
    name: 'AMBIENTADOR HER',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '5 kg', price: 0 },
      { size: '10 kg', price: 0 },
      { size: '15 kg', price: 0 },
      { size: '25 kg', price: 0 }
    ],
    categories: [],
    image: 'sin-imagen'
  },
  {
    id: 'ambientador-chupachups',
    codigo: '1025',
    name: 'AMBIENTADOR CHUPACHUPS',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '5 kg', price: 0 },
      { size: '10 kg', price: 0 },
      { size: '15 kg', price: 0 },
      { size: '25 kg', price: 0 }
    ],
    categories: [],
    image: 'sin-imagen'
  },
  {
    id: 'ambientador-piruleta',
    codigo: '1026',
    name: 'AMBIENTADOR PIRULETA',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '5 kg', price: 0 },
      { size: '10 kg', price: 0 },
      { size: '15 kg', price: 0 },
      { size: '25 kg', price: 0 }
    ],
    categories: [],
    image: 'sin-imagen'
  },
  {
    id: 'ambientador-limon',
    codigo: '1006',
    name: 'AMBIENTADOR LIMÓN',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '5 kg', price: 0 },
      { size: '10 kg', price: 0 },
      { size: '15 kg', price: 0 },
      { size: '25 kg', price: 0 }
    ],
    categories: [],
    image: 'sin-imagen'
  },
  {
    id: 'ambientador-manzana',
    codigo: '1014',
    name: 'AMBIENTADOR MANZANA',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '5 kg', price: 0 },
      { size: '10 kg', price: 0 },
      { size: '15 kg', price: 0 },
      { size: '25 kg', price: 0 }
    ],
    categories: [],
    image: 'sin-imagen'
  },
  {
    id: 'ambientador-mandarina',
    codigo: '1020',
    name: 'AMBIENTADOR MANDARINA',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '5 kg', price: 0 },
      { size: '10 kg', price: 0 },
      { size: '15 kg', price: 0 },
      { size: '25 kg', price: 0 }
    ],
    categories: [],
    image: 'sin-imagen'
  },
  {
    id: 'ambientador-mango',
    codigo: '1018',
    name: 'AMBIENTADOR MANGO',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '5 kg', price: 0 },
      { size: '10 kg', price: 0 },
      { size: '15 kg', price: 0 },
      { size: '25 kg', price: 0 }
    ],
    categories: [],
    image: 'sin-imagen'
  },
  {
    id: 'ambientador-wc-essencial',
    codigo: '1101',
    name: 'AMBIENTADOR WC ESSENCIAL',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '1 kg', price: 0 },
      { size: '5 kg', price: 0 },
      { size: '10 kg', price: 0 }
    ],
    categories: [],
    image: 'sin-imagen'
  },
  {
    id: 'ambientador-wc-floral-essencial',
    codigo: '1103',
    name: 'AMBIENTADOR WC FLORAL ESSENCIAL',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '1 kg', price: 0 },
      { size: '5 kg', price: 0 }
    ],
    categories: [],
    image: 'sin-imagen'
  },
  {
    id: 'ambientador-wc-canela-essencial',
    codigo: '1023',
    name: 'AMBIENTADOR WC CANELA ESSENCIAL',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '1 kg', price: 0 },
      { size: '5 kg', price: 0 }
    ],
    categories: [],
    image: 'sin-imagen'
  },
  {
    id: 'ambientador-wc-airlimp',
    codigo: '1104',
    name: 'AMBIENTADOR WC AIRLIMP',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '1 kg', price: 0 },
      { size: '5 kg', price: 0 }
    ],
    categories: [],
    image: 'sin-imagen'
  },
  {
    id: 'ambientador-wc-chupachups',
    codigo: '1106',
    name: 'AMBIENTADOR WC CHUPACHUPS',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '1 kg', price: 0 },
      { size: '5 kg', price: 0 }
    ],
    categories: [],
    image: 'sin-imagen'
  },
  {
    id: 'ambientador-wc-piruleta',
    codigo: '1107',
    name: 'AMBIENTADOR WC PIRULETA',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '1 kg', price: 0 },
      { size: '5 kg', price: 0 }
    ],
    categories: [],
    image: 'sin-imagen'
  },
  {
    id: 'ludex-x',
    codigo: '0704',
    name: 'LUDEX-X',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '5 kg', price: 0 },
      { size: '10 kg', price: 0 },
      { size: '25 kg', price: 0 }
    ],
    categories: ['automocion', 'hosteleria', 'limpiadores'],
    image: '/productos/28.webp'
  },
  {
    id: 'ludex-r',
    codigo: '0714',
    name: 'LUDEX-R',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '5 kg', price: 0 },
      { size: '10 kg', price: 0 },
      { size: '25 kg', price: 0 }
    ],
    categories: ['automocion', 'hosteleria', 'limpiadores'],
    image: '/productos/28.webp'
  },
  {
    id: 'ludex-manzana',
    codigo: '0712',
    name: 'LUDEX-MANZANA',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '5 kg', price: 0 },
      { size: '10 kg', price: 0 },
      { size: '25 kg', price: 0 }
    ],
    categories: ['automocion', 'hosteleria', 'limpiadores'],
    image: '/productos/28.webp'
  },
  {
    id: 'ludex-neutro',
    codigo: '0705',
    name: 'LUDEX-NEUTRO',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '5 kg', price: 0 },
      { size: '10 kg', price: 0 },
      { size: '25 kg', price: 0 }
    ],
    categories: ['automocion', 'hosteleria', 'limpiadores'],
    image: '/productos/28.webp'
  },
  {
    id: 'ludex-neutro-a',
    codigo: '0715',
    name: 'LUDEX-NEUTRO A',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '5 kg', price: 0 },
      { size: '10 kg', price: 0 },
      { size: '25 kg', price: 0 }
    ],
    categories: ['automocion', 'hosteleria', 'limpiadores'],
    image: '/productos/28.webp'
  },
  {
    id: 'dex-amoniacal',
    codigo: '0706',
    name: 'DEX AMONIACAL',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '5 kg', price: 0 },
      { size: '10 kg', price: 0 },
      { size: '25 kg', price: 0 }
    ],
    categories: [],
    image: 'sin-imagen'
  },
  {
    id: 'dex-limon',
    codigo: '0707',
    name: 'DEX-LIMÓN',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '5 kg', price: 0 },
      { size: '10 kg', price: 0 },
      { size: '25 kg', price: 0 }
    ],
    categories: [],
    image: 'sin-imagen'
  },
  {
    id: 'dextra',
    codigo: '0709',
    name: 'DEXTRA',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '5 kg', price: 0 },
      { size: '10 kg', price: 0 },
      { size: '25 kg', price: 0 }
    ],
    categories: [],
    image: 'sin-imagen'
  },
  {
    id: 'ludex-marsella',
    codigo: '0718',
    name: 'LUDEX MARSELLA',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '5 kg', price: 0 },
      { size: '10 kg', price: 0 },
      { size: '25 kg', price: 0 }
    ],
    categories: ['automocion', 'hosteleria', 'limpiadores'],
    image: '/productos/28.webp'
  },
  {
    id: 'ludex-multiuso',
    codigo: '0713',
    name: 'LUDEX MULTIUSO',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '5 kg', price: 0 },
      { size: '10 kg', price: 0 },
      { size: '25 kg', price: 0 }
    ],
    categories: ['automocion', 'hosteleria', 'limpiadores'],
    image: '/productos/28.webp'
  },
  {
    id: 'ludex-multiuso-a',
    codigo: '0711',
    name: 'LUDEX MULTIUSO-A',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '5 kg', price: 0 },
      { size: '10 kg', price: 0 },
      { size: '25 kg', price: 0 }
    ],
    categories: ['automocion', 'hosteleria', 'limpiadores'],
    image: '/productos/28.webp'
  },
  {
    id: 'ludex-ecolimp',
    codigo: '0719',
    name: 'LUDEX ECOLIMP',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '5 kg', price: 0 },
      { size: '10 kg', price: 0 },
      { size: '25 kg', price: 0 }
    ],
    categories: ['automocion', 'hosteleria', 'limpiadores'],
    image: '/productos/28.webp'
  },
  {
    id: 'ludex-marino',
    codigo: '0724',
    name: 'LUDEX MARINO',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '500 kg', price: 0 }
    ],
    categories: ['automocion', 'hosteleria', 'limpiadores'],
    image: '/productos/28.webp'
  },
  {
    id: 'ludex-pino',
    codigo: '0717',
    name: 'LUDEX-PINO',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '5 kg', price: 0 },
      { size: '10 kg', price: 0 },
      { size: '25 kg', price: 0 }
    ],
    categories: ['automocion', 'hosteleria', 'limpiadores'],
    image: '/productos/28.webp'
  },
  {
    id: 'ludex-bioalcohol',
    codigo: '0703',
    name: 'LUDEX-BIOALCOHOL',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '5 kg', price: 0 },
      { size: '10 kg', price: 0 },
      { size: '25 kg', price: 0 }
    ],
    categories: ['automocion', 'hosteleria', 'limpiadores'],
    image: '/productos/28.webp'
  },
  {
    id: 'ludex-multiuso-x',
    codigo: '0729',
    name: 'LUDEX-MULTIUSO X',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '5 kg', price: 0 },
      { size: '10 kg', price: 0 },
      { size: '30 kg', price: 0 }
    ],
    categories: ['automocion', 'hosteleria', 'limpiadores'],
    image: '/productos/28.webp'
  },
  {
    id: 'ludex-fresh',
    codigo: '0905',
    name: 'LUDEX-FRESH',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '5 kg', price: 0 },
      { size: '10 kg', price: 0 },
      { size: '25 kg', price: 0 }
    ],
    categories: ['automocion', 'hosteleria', 'limpiadores'],
    image: '/productos/28.webp'
  },
  {
    id: 'ceradet-roja',
    codigo: '0807',
    name: 'CERADET ROJA',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '5 kg', price: 0 },
      { size: '10 kg', price: 0 }
    ],
    categories: [],
    image: 'sin-imagen'
  },
  {
    id: 'ceradet-negra',
    codigo: '0808',
    name: 'CERADET NEGRA',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '5 kg', price: 0 },
      { size: '10 kg', price: 0 }
    ],
    categories: [],
    image: 'sin-imagen'
  },
  {
    id: 'novaterra',
    codigo: '0803',
    name: 'NOVATERRA',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '5 kg', price: 0 },
      { size: '10 kg', price: 0 },
      { size: '15 kg', price: 0 },
      { size: '25 kg', price: 0 }
    ],
    categories: [],
    image: 'sin-imagen'
  },
  {
    id: 'wash-soft',
    codigo: 'X0005',
    name: 'WASH SOFT (detergente gama económica)',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '6 kg', price: 0 },
      { size: '12 kg', price: 0 },
      { size: '28 kg', price: 0 }
    ],
    categories: [],
    image: 'sin-imagen'
  },
  {
    id: 'puliser',
    codigo: 'X0009',
    name: 'PULISER (abrillantador gama económica)',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '5 kg', price: 0 },
      { size: '10 kg', price: 0 },
      { size: '25 kg', price: 0 }
    ],
    categories: [],
    image: 'sin-imagen'
  },
  {
    id: 'kay-500-lemon',
    codigo: 'X0012',
    name: 'KAY 500 LEMON (lavado manual de vajillas)',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '5 kg', price: 0 },
      { size: '10 kg', price: 0 },
      { size: '15 kg', price: 0 }
    ],
    categories: [],
    image: 'sin-imagen'
  },
  {
    id: 'fryers',
    codigo: 'X0004',
    name: 'FRYERS (limpiaplanchas)',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '5 kg', price: 0 },
      { size: '10 kg', price: 0 },
      { size: '15 kg', price: 0 }
    ],
    categories: [],
    image: 'sin-imagen'
  },
  {
    id: 'degreaser',
    codigo: 'X0003',
    name: 'DEGREASER (desengrasante)',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '5 kg', price: 0 },
      { size: '10 kg', price: 0 },
      { size: '15 kg', price: 0 }
    ],
    categories: [],
    image: 'sin-imagen'
  },
  {
    id: 'bioclean',
    codigo: 'X0001',
    name: 'BIOCLEAN (fregasuelos con bioalcohol)',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '5 kg', price: 0 },
      { size: '10 kg', price: 0 }
    ],
    categories: [],
    image: 'sin-imagen'
  },
  {
    id: 'floorclean',
    codigo: 'X0002',
    name: 'FLOORCLEAN (fregasuelos amoniacal)',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '5 kg', price: 0 },
      { size: '10 kg', price: 0 }
    ],
    categories: [],
    image: 'sin-imagen'
  },
  {
    id: 'limp-cris-xenon',
    codigo: 'X0011',
    name: 'LIMP-CRIS XENON (limpiacristales)',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '5 kg', price: 0 },
      { size: '10 kg', price: 0 },
      { size: '15 kg', price: 0 }
    ],
    categories: [],
    image: 'sin-imagen'
  },
  {
    id: 'gel-fresa-nacarado',
    codigo: 'X017',
    name: 'GEL FRESA NACARADO (gel de manos)',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '5 kg', price: 0 },
      { size: '10 kg', price: 0 }
    ],
    categories: [],
    image: 'sin-imagen'
  },
  {
    id: 'deterlejia',
    codigo: 'X0014',
    name: 'DETERLEJIA (detergente con lejía)',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '5 kg', price: 0 },
      { size: '10 kg', price: 0 },
      { size: '25 kg', price: 0 }
    ],
    categories: [],
    image: 'sin-imagen'
  },
  {
    id: 'hipoclorito-envase',
    codigo: '3102O',
    name: 'HIPOCLORITO (Con envase)',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '30 kg', price: 0 }
    ],
    categories: [],
    image: 'sin-imagen'
  },
  {
    id: 'hipoclorito-desinfeccion-agua',
    codigo: '3103L',
    name: 'HIPOCLORITO APTO PARA DESINFECCIÓN DE AGUA PARA CONSUMO',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '25 kg', price: 0 }
    ],
    categories: [],
    image: 'sin-imagen'
  },
  {
    id: 'hipoclorito-calcico',
    codigo: '3103S',
    name: 'HIPOCLORITO CALCICO (Pastillas 200 Gr 3/5 ACCIONES)',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '5 kg', price: 0 }
    ],
    categories: [],
    image: 'sin-imagen'
  },
  {
    id: 'cloro-granulado',
    codigo: '3121x',
    name: 'CLORO GRANULADO',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '5 kg', price: 0 }
    ],
    categories: [],
    image: 'sin-imagen'
  },
  {
    id: 'sal-peladilla',
    codigo: '3103E',
    name: 'SAL PELADILLA',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '25 kg', price: 0 }
    ],
    categories: [],
    image: 'sin-imagen'
  },
  {
    id: 'bobina-celulosa-pasta',
    codigo: '6393C',
    name: 'BOBINA CELULOSA PASTA 4 KG (510 MTS)',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '4 kg', price: 0 }
    ],
    categories: ['complementos'],
    image: 'sin-imagen'
  },
  {
    id: 'bobina-celulosa-reciclada',
    codigo: '6392C',
    name: 'BOBINA CELULOSA RECICLADA 4 KG (410 MTS)',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '4 kg', price: 0 }
    ],
    categories: ['complementos'],
    image: 'sin-imagen'
  },
  {
    id: 'bobina-minichemine',
    codigo: '6391C',
    name: 'BOBINA MINICHEMINE 2 CP 700 GR (70 MTS)',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '700 gr', price: 0 }
    ],
    categories: ['complementos'],
    image: 'sin-imagen'
  },
  {
    id: 'bobina-chemine-pasta',
    codigo: '6390P',
    name: 'BOBINA CHEMINE PASTA 2 CP 1 KG (140 MTS)',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '1 kg', price: 0 }
    ],
    categories: ['complementos'],
    image: 'sin-imagen'
  },
  {
    id: 'bobina-chemine-laminada',
    codigo: '6390L',
    name: 'BOBINA CHEMINE LAMINADA PASTA 800 GR',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '800 gr', price: 0 }
    ],
    categories: [],
    image: 'sin-imagen'
  },
  {
    id: 'bobina-chemine-economica',
    codigo: '6394C',
    name: 'BOBINA CHEMINE ECONOMICA 800 GR',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '800 gr', price: 0 }
    ],
    categories: ['complementos'],
    image: 'sin-imagen'
  },
  {
    id: 'bobina-mini-servis',
    codigo: '6440O',
    name: 'MINI SERVIS 17 X 17 FORMATO PEQUEÑO',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '3000 unidades', price: 0 }
    ],
    categories: [],
    image: 'sin-imagen'
  },
  {
    id: 'bobina-mini-servis-tissu',
    codigo: '6440T',
    name: 'MINI SERVIS 17 X 17 TISSU',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '14 millares', price: 0 }
    ],
    categories: [],
    image: 'sin-imagen'
  },
  {
    id: 'bobina-mini-servis-deterin',
    codigo: '6440C',
    name: 'MINI SERVIS 17 X 17 DETERIN',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '14 millares', price: 0 }
    ],
    categories: [],
    image: 'sin-imagen'
  },
  {
    id: 'servilletas-20x20-blancas',
    codigo: '6416G',
    name: 'SERVILLETAS 20 X 20 2 CPAS BLANCAS',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '6000 unidades', price: 0 }
    ],
    categories: [],
    image: 'sin-imagen'
  },
  {
    id: 'servilletas-20x20-granate',
    codigo: '6428C',
    name: 'SERVILLETAS 20 X 20 2 CPS GRANATE',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '6000 unidades', price: 0 }
    ],
    categories: [],
    image: 'sin-imagen'
  },
  {
    id: 'servilletas-20x20-negras',
    codigo: '6398C',
    name: 'SERVILLETAS 20 X 20 2 CPS NEGRAS',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '6000 unidades', price: 0 }
    ],
    categories: [],
    image: 'sin-imagen'
  },
  {
    id: 'servilletas-20x20-serigrafiada',
    codigo: '6410C',
    name: 'SERVILLETAS 20 X 20 2 CPS SERIGRAFIADA 1 COLOR',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '9600 unidades', price: 0 }
    ],
    categories: [],
    image: 'sin-imagen'
  },
  {
    id: 'servilletas-20x20-econature',
    codigo: '6416E',
    name: 'SERVILLETAS 20 X 20 2 CPAS ECONATURE',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '6000 unidades', price: 0 }
    ],
    categories: [],
    image: 'sin-imagen'
  },
  {
    id: 'servilletas-20x20-azul',
    codigo: '6428A',
    name: 'SERVILLETAS 20 X 20 2 CPAS AZUL',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '6000 unidades', price: 0 }
    ],
    categories: [],
    image: 'sin-imagen'
  },
  {
    id: 'servilletas-30x30-blanca',
    codigo: '6421C',
    name: 'SERVILLETAS 30 X 30 1 CPS BLANCA',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '4800 unidades', price: 0 }
    ],
    categories: [],
    image: 'sin-imagen'
  },
  {
    id: 'servilletas-30x30-blanca-2c',
    codigo: '6422C',
    name: 'SERVILLETAS 30 X 30 2 CPS BLANCA',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '4000 unidades', price: 0 }
    ],
    categories: [],
    image: 'sin-imagen'
  },
  {
    id: 'servilletas-30x30-rojas',
    codigo: '6396C',
    name: 'SERVILLETAS 30 X 30 2 CPS ROJAS',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '4800 unidades', price: 0 }
    ],
    categories: [],
    image: 'sin-imagen'
  },
  {
    id: 'servilletas-33x33-blanca',
    codigo: '6425C',
    name: 'SERVILLETAS 33 X 33 1 CPA BLANCA',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '4800 unidades', price: 0 }
    ],
    categories: [],
    image: 'sin-imagen'
  },
  {
    id: 'servilletas-33x33-blanca-2c',
    codigo: '6426C',
    name: 'SERVILLETAS 33 X 33 2 CPS BLANCA',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '4000 unidades', price: 0 }
    ],
    categories: [],
    image: 'sin-imagen'
  },
  {
    id: 'servilletas-40x40-amarillas',
    codigo: '6433C',
    name: 'SERVILLETAS 40 X 40 2 CPS AMARILLAS',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '2400 unidades', price: 0 }
    ],
    categories: [],
    image: 'sin-imagen'
  },
  {
    id: 'servilletas-40x40-azul',
    codigo: '6423C',
    name: 'SERVILLETAS 40 X 40 2 CPS AZUL',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '2400 unidades', price: 0 }
    ],
    categories: [],
    image: 'sin-imagen'
  },
  {
    id: 'servilletas-40x40-bcas',
    codigo: '6412C',
    name: 'SERVILLETAS 40 X 40 2 CPS BCAS',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '2400 unidades', price: 0 }
    ],
    categories: [],
    image: 'sin-imagen'
  },
  {
    id: 'servilletas-40x40-granate',
    codigo: '6429C',
    name: 'SERVILLETAS 40 X 40 2 CPS GRANATE',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '2400 unidades', price: 0 }
    ],
    categories: [],
    image: 'sin-imagen'
  },
  {
    id: 'servilletas-40x40-negras',
    codigo: '6434C',
    name: 'SERVILLETAS 40 X 40 2 CPS NEGRAS',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '2400 unidades', price: 0 }
    ],
    categories: [],
    image: 'sin-imagen'
  },
  {
    id: 'servilletas-40x40-rojas',
    codigo: '6431C',
    name: 'SERVILLETAS 40 X 40 2 CPS ROJAS',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '2400 unidades', price: 0 }
    ],
    categories: [],
    image: 'sin-imagen'
  },
  {
    id: 'servilletas-40x40-salmon',
    codigo: '6417C',
    name: 'SERVILLETAS 40 X 40 2 CPS SALMON',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '2400 unidades', price: 0 }
    ],
    categories: [],
    image: 'sin-imagen'
  },
  {
    id: 'servilletas-40x40-verdes',
    codigo: '6432C',
    name: 'SERVILLETAS 40 X 40 2 CPS VERDES',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '2400 unidades', price: 0 }
    ],
    categories: [],
    image: 'sin-imagen'
  },
  {
    id: 'servilletas-40x40-pliegue-americano-blanca',
    codigo: '6415C',
    name: 'SERVILLETAS 40 X 40 PLIEGUE AMERICANO 2 C BLANCA',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '2400 unidades', price: 0 }
    ],
    categories: [],
    image: 'sin-imagen'
  },
  {
    id: 'servilletas-40x40-pliegue-americano-negro',
    codigo: '6399C',
    name: 'SERVILLETAS 40 X 40 PLIEGUE AMERICANO 2 C NEGRO',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '2400 unidades', price: 0 }
    ],
    categories: [],
    image: 'sin-imagen'
  },
  {
    id: 'servilletas-40x40-impresas',
    codigo: '6418C',
    name: 'SERVILLETAS 40X40 2 CPS IMPRESAS 1 COLOR',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '2400 unidades', price: 0 }
    ],
    categories: [],
    image: 'sin-imagen'
  },
  {
    id: 'servilletas-40x40-azul-serigrafia',
    codigo: '6383C',
    name: 'SERVILLETAS 40X40 2CP AZUL SERIG.A 1 COLOR',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '2400 unidades', price: 0 }
    ],
    categories: [],
    image: 'sin-imagen'
  },
  {
    id: 'servilletas-40x40-canguro-blancas-punta',
    codigo: '6435P',
    name: 'SERVILLETAS 40X40 CANGURO BLANCAS PUNTA-PUNTA',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '900 unidades', price: 0 }
    ],
    categories: [],
    image: 'sin-imagen'
  },
  {
    id: 'servilletas-40x40-canguro-blancas',
    codigo: '6435C',
    name: 'SERVILLETAS 40X40 CANGURO BLANCAS',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '960 unidades', price: 0 }
    ],
    categories: [],
    image: 'sin-imagen'
  },
  {
    id: 'servilletas-40x40-canguro-econature',
    codigo: '6435E',
    name: 'SERVILLETAS 40X40 CANGURO ECONATURE',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '960 unidades', price: 0 }
    ],
    categories: [],
    image: 'sin-imagen'
  },
  {
    id: 'servilletas-40x40-canguro-punta-econature',
    codigo: '6435PE',
    name: 'SERVILLETAS 40X40 CANGURO PUNTA-ECONATURE',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '900 unidades', price: 0 }
    ],
    categories: [],
    image: 'sin-imagen'
  },
  {
    id: 'servilletas-33x33-amarillas',
    codigo: '6433C',
    name: 'SERVILLETAS 33 X 33 2 CPS AMARILLAS',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '2400 unidades', price: 0 }
    ],
    categories: [],
    image: 'sin-imagen'
  },
  {
    id: 'servilletas-33x33-azul',
    codigo: '6423C',
    name: 'SERVILLETAS 33 X 33 2 CPS AZUL',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '2400 unidades', price: 0 }
    ],
    categories: [],
    image: 'sin-imagen'
  },
  {
    id: 'servilletas-33x33-bcas',
    codigo: '6412C',
    name: 'SERVILLETAS 33 X 33 2 CPS BCAS',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '2400 unidades', price: 0 }
    ],
    categories: [],
    image: 'sin-imagen'
  },
  {
    id: 'servilletas-33x33-granate',
    codigo: '6429C',
    name: 'SERVILLETAS 33 X 33 2 CPS GRANATE',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '2400 unidades', price: 0 }
    ],
    categories: [],
    image: 'sin-imagen'
  },
  {
    id: 'servilletas-33x33-negras',
    codigo: '6434C',
    name: 'SERVILLETAS 33 X 33 2 CPS NEGRAS',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '2400 unidades', price: 0 }
    ],
    categories: [],
    image: 'sin-imagen'
  },
  {
    id: 'servilletas-33x33-rojas',
    codigo: '6431C',
    name: 'SERVILLETAS 33 X 33 2 CPS ROJAS',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '2400 unidades', price: 0 }
    ],
    categories: [],
    image: 'sin-imagen'
  },
  {
    id: 'servilletas-33x33-salmon',
    codigo: '6417C',
    name: 'SERVILLETAS 33 X 33 2 CPS SALMON',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '2400 unidades', price: 0 }
    ],
    categories: [],
    image: 'sin-imagen'
  },
  {
    id: 'servilletas-33x33-verdes',
    codigo: '6432C',
    name: 'SERVILLETAS 33 X 33 2 CPS VERDES',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '2400 unidades', price: 0 }
    ],
    categories: [],
    image: 'sin-imagen'
  },
  {
    id: 'manteles-1x1-negro',
    codigo: '6470N',
    name: 'MANTELES 1 X 1 TNT NEGRO',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '150 unidades', price: 0 }
    ],
    categories: [],
    image: 'sin-imagen'
  },
  {
    id: 'manteles-1x1-azul',
    codigo: '6471C',
    name: 'MANTELES 1 X 1 AZUL LISO',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '400 unidades', price: 0 }
    ],
    categories: [],
    image: 'sin-imagen'
  },
  {
    id: 'manteles-1x1-blancos',
    codigo: '6452C',
    name: 'MANTELES 1 X 1 BLANCOS',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '500 unidades', price: 0 }
    ],
    categories: [],
    image: 'sin-imagen'
  },
  {
    id: 'manteles-1x1-cuadros-azules',
    codigo: '6454C',
    name: 'MANTELES 1 X 1 CUADROS AZULES',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '500 unidades', price: 0 }
    ],
    categories: [],
    image: 'sin-imagen'
  },
  {
    id: 'manteles-1x1-cuadros-marron',
    codigo: '6447C',
    name: 'MANTELES 1 X 1 CUADROS MARRON',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '500 unidades', price: 0 }
    ],
    categories: [],
    image: 'sin-imagen'
  },
  {
    id: 'manteles-1x1-cuadros-rojos',
    codigo: '6430C',
    name: 'MANTELES 1 X 1 CUADROS ROJOS',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '500 unidades', price: 0 }
    ],
    categories: [],
    image: 'sin-imagen'
  },
  {
    id: 'manteles-1x1-cuadros-verdes',
    codigo: '6453C',
    name: 'MANTELES 1 X 1 CUADROS VERDES',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '500 unidades', price: 0 }
    ],
    categories: [],
    image: 'sin-imagen'
  },
  {
    id: 'manteles-1x1-granate',
    codigo: '6462C',
    name: 'MANTELES 1 X 1 GRANATE LISO',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '400 unidades', price: 0 }
    ],
    categories: [],
    image: 'sin-imagen'
  },
  {
    id: 'manteles-1x1-verde',
    codigo: '6458C',
    name: 'MANTELES 1 X 1 VERDE LISO',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '400 unidades', price: 0 }
    ],
    categories: [],
    image: 'sin-imagen'
  },
  {
    id: 'manteles-1x1-20-blanco',
    codigo: '6459C',
    name: 'MANTELES 1 X 1,20 BLANCO',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '500 unidades', price: 0 }
    ],
    categories: [],
    image: 'sin-imagen'
  },
  {
    id: 'manteles-1-20x1-20',
    codigo: '6467C',
    name: 'MANTELES 1,20 X 1,20',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '500 unidades', price: 0 }
    ],
    categories: [],
    image: 'sin-imagen'
  },
  {
    id: 'manteles-30x40-blancos',
    codigo: '6457C',
    name: 'MANTELES 30X40 BLANCOS',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '1000 unidades', price: 0 }
    ],
    categories: [],
    image: 'sin-imagen'
  },
  {
    id: 'manteles-30x40-buen-provecho',
    codigo: '6457B',
    name: 'MANTELES 30X40 BUEN PROVECHO',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '1000 unidades', price: 0 }
    ],
    categories: [],
    image: 'sin-imagen'
  },
  {
    id: 'manteles-30x40-granate',
    codigo: '6457G',
    name: 'MANTELES 30X40 GRANATE',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '1000 unidades', price: 0 }
    ],
    categories: [],
    image: 'sin-imagen'
  },
  {
    id: 'manteles-30x40-negro',
    codigo: '6457N',
    name: 'MANTELES 30X40 NEGRO',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '1000 unidades', price: 0 }
    ],
    categories: [],
    image: 'sin-imagen'
  },
  {
    id: 'manteles-35x50-azul',
    codigo: '6439C',
    name: 'MANTELES 35X50 AZUL',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '1200 unidades', price: 0 }
    ],
    categories: [],
    image: 'sin-imagen'
  },
  {
    id: 'manteles-35x50-bco-serigrafiados',
    codigo: '6468C',
    name: 'MANTELES 35X50 BCO SERIGRAFIADOS 1C (MINIMO 20 CJ)',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '1000 unidades', price: 0 }
    ],
    categories: [],
    image: 'sin-imagen'
  },
  {
    id: 'manteles-35x50-indiv',
    codigo: '6460C/49C',
    name: 'MANTELES 35X50 INDIV. C/C Y S/ C BCO',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '1000 unidades', price: 0 }
    ],
    categories: [],
    image: 'sin-imagen'
  },
  {
    id: 'manteles-80x80-blancos',
    codigo: '6456C',
    name: 'MANTELES 80X80 BLANCOS',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '500 unidades', price: 0 }
    ],
    categories: [],
    image: 'sin-imagen'
  },
  {
    id: 'rollo-mantel-1x100',
    codigo: '6455C',
    name: 'ROLLO MANTEL 1 X 100 MTS',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '1 unidad', price: 0 }
    ],
    categories: [],
    image: 'sin-imagen'
  },
  {
    id: 'rollo-mantel-1x100-color',
    codigo: '6455R',
    name: 'ROLLO MANTEL 1 X 100 MTS COLOR',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '1 unidad', price: 0 }
    ],
    categories: [],
    image: 'sin-imagen'
  },
  {
    id: 'rollo-mantel-camino-granate',
    codigo: '6456G',
    name: 'ROLLO MANTEL CAMINO 4X12 GRANATE',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '1 unidad', price: 0 }
    ],
    categories: [],
    image: 'sin-imagen'
  },
  {
    id: 'rollo-mantel-camino-azul',
    codigo: '6456A',
    name: 'ROLLO MANTEL CAMINO 4X12 AZUL',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '1 unidad', price: 0 }
    ],
    categories: ['complementos'],
    image: 'sin-imagen'
  },
  {
    id: 'rollo-mantel-camino-blanco',
    codigo: '6456B',
    name: 'ROLLO MANTEL CAMINO 4X12 BLANCO',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '1 unidad', price: 0 }
    ],
    categories: ['complementos'],
    image: 'sin-imagen'
  },
  {
    id: 'rollo-mantel-camino-negro',
    codigo: '6456N',
    name: 'ROLLO MANTEL CAMINO 4X12 NEGRO',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '1 unidad', price: 0 }
    ],
    categories: ['complementos'],
    image: 'sin-imagen'
  },
  {
    id: 'rollo-mantel-camino-rojo',
    codigo: '6456R',
    name: 'ROLLO MANTEL CAMINO 4X12 ROJO',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '1 unidad', price: 0 }
    ],
    categories: ['complementos'],
    image: 'sin-imagen'
  },
  {
    id: 'rollo-mantel-camino-verde',
    codigo: '6456V',
    name: 'ROLLO MANTEL CAMINO 4X12 VERDE',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '1 unidad', price: 0 }
    ],
    categories: ['complementos'],
    image: 'sin-imagen'
  },
  {
    id: 'rollo-mantel-camino-verde-oscuro',
    codigo: '6456VO',
    name: 'ROLLO MANTEL CAMINO 4X12 VERDE OSCURO',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '1 unidad', price: 0 }
    ],
    categories: ['complementos'],
    image: 'sin-imagen'
  },
  {
    id: 'rollo-mantel-camino-violeta',
    codigo: '6456VI',
    name: 'ROLLO MANTEL CAMINO 4X12 VIOLETA',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '1 unidad', price: 0 }
    ],
    categories: ['complementos'],
    image: 'sin-imagen'
  },
  {
    id: 'rollo-mantel-camino-amarillo',
    codigo: '6456AM',
    name: 'ROLLO MANTEL CAMINO 4X12 AMARILLO',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '1 unidad', price: 0 }
    ],
    categories: ['complementos'],
    image: 'sin-imagen'
  },
  {
    id: 'rollo-mantel-camino-naranja',
    codigo: '6456NA',
    name: 'ROLLO MANTEL CAMINO 4X12 NARANJA',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '1 unidad', price: 0 }
    ],
    categories: ['complementos'],
    image: 'sin-imagen'
  },
  {
    id: 'rollo-mantel-camino-rosa',
    codigo: '6456RO',
    name: 'ROLLO MANTEL CAMINO 4X12 ROSA',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '1 unidad', price: 0 }
    ],
    categories: ['complementos'],
    image: 'sin-imagen'
  },
  {
    id: 'rollo-mantel-camino-salmon',
    codigo: '6456S',
    name: 'ROLLO MANTEL CAMINO 4X12 SALMON',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '1 unidad', price: 0 }
    ],
    categories: ['complementos'],
    image: 'sin-imagen'
  },
  {
    id: 'rollo-mantel-camino-celeste',
    codigo: '6456CE',
    name: 'ROLLO MANTEL CAMINO 4X12 CELESTE',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '1 unidad', price: 0 }
    ],
    categories: ['complementos'],
    image: 'sin-imagen'
  },
  {
    id: 'rollo-mantel-camino-marron',
    codigo: '6456M',
    name: 'ROLLO MANTEL CAMINO 4X12 MARRON',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '1 unidad', price: 0 }
    ],
    categories: ['complementos'],
    image: 'sin-imagen'
  },
  {
    id: 'rollo-mantel-camino-gris',
    codigo: '6456GR',
    name: 'ROLLO MANTEL CAMINO 4X12 GRIS',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '1 unidad', price: 0 }
    ],
    categories: ['complementos'],
    image: 'sin-imagen'
  },
  {
    id: 'rollo-mantel-camino-bordo',
    codigo: '6456BO',
    name: 'ROLLO MANTEL CAMINO 4X12 BORDO',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '1 unidad', price: 0 }
    ],
    categories: ['complementos'],
    image: 'sin-imagen'
  },
  {
    id: 'rollo-mantel-camino-lila',
    codigo: '6456L',
    name: 'ROLLO MANTEL CAMINO 4X12 LILA',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '1 unidad', price: 0 }
    ],
    categories: ['complementos'],
    image: 'sin-imagen'
  },
  {
    id: 'rollo-mantel-camino-turquesa',
    codigo: '6456T',
    name: 'ROLLO MANTEL CAMINO 4X12 TURQUESA',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '1 unidad', price: 0 }
    ],
    categories: ['complementos'],
    image: 'sin-imagen'
  },
  {
    id: 'rollo-mantel-camino-fucsia',
    codigo: '6456F',
    name: 'ROLLO MANTEL CAMINO 4X12 FUCSIA',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '1 unidad', price: 0 }
    ],
    categories: ['complementos'],
    image: 'sin-imagen'
  },
  {
    id: 'rollo-mantel-camino-dorado',
    codigo: '6456D',
    name: 'ROLLO MANTEL CAMINO 4X12 DORADO',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '1 unidad', price: 0 }
    ],
    categories: ['complementos'],
    image: 'sin-imagen'
  },
  {
    id: 'rollo-mantel-camino-plateado',
    codigo: '6456P',
    name: 'ROLLO MANTEL CAMINO 4X12 PLATEADO',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '1 unidad', price: 0 }
    ],
    categories: ['complementos'],
    image: 'sin-imagen'
  },
  {
    id: 'rollo-mantel-camino-beige',
    codigo: '6456BE',
    name: 'ROLLO MANTEL CAMINO 4X12 BEIGE',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '1 unidad', price: 0 }
    ],
    categories: ['complementos'],
    image: 'sin-imagen'
  },
  {
    id: 'rollo-mantel-camino-crema',
    codigo: '6456CR',
    name: 'ROLLO MANTEL CAMINO 4X12 CREMA',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '1 unidad', price: 0 }
    ],
    categories: ['complementos'],
    image: 'sin-imagen'
  },
  {
    id: 'rollo-mantel-camino-almendra',
    codigo: '6456AL',
    name: 'ROLLO MANTEL CAMINO 4X12 ALMENDRADO',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '1 unidad', price: 0 }
    ],
    categories: ['complementos'],
    image: 'sin-imagen'
  },
  {
    id: 'rollo-mantel-camino-cafe',
    codigo: '6456CA',
    name: 'ROLLO MANTEL CAMINO 4X12 CAFE',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '1 unidad', price: 0 }
    ],
    categories: ['complementos'],
    image: 'sin-imagen'
  },
  {
    id: 'rollo-mantel-camino-chocolate',
    codigo: '6456CH',
    name: 'ROLLO MANTEL CAMINO 4X12 CHOCOLATE',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '1 unidad', price: 0 }
    ],
    categories: ['complementos'],
    image: 'sin-imagen'
  },
  {
    id: 'rollo-mantel-camino-bronce',
    codigo: '6456BR',
    name: 'ROLLO MANTEL CAMINO 4X12 BRONCE',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '1 unidad', price: 0 }
    ],
    categories: ['complementos'],
    image: 'sin-imagen'
  },
  {
    id: 'rollo-mantel-camino-cobre',
    codigo: '6456CO',
    name: 'ROLLO MANTEL CAMINO 4X12 COBRE',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '1 unidad', price: 0 }
    ],
    categories: ['complementos'],
    image: 'sin-imagen'
  },
  {
    id: 'rollo-mantel-camino-oro',
    codigo: '6456OR',
    name: 'ROLLO MANTEL CAMINO 4X12 ORO',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '1 unidad', price: 0 }
    ],
    categories: ['complementos'],
    image: 'sin-imagen'
  },
  {
    id: 'rollo-mantel-camino-plata',
    codigo: '6456PL',
    name: 'ROLLO MANTEL CAMINO 4X12 PLATA',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '1 unidad', price: 0 }
    ],
    categories: ['complementos'],
    image: 'sin-imagen'
  },
  {
    id: 'rollo-mantel-camino-negro-mate',
    codigo: '6456NM',
    name: 'ROLLO MANTEL CAMINO 4X12 NEGRO MATE',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '1 unidad', price: 0 }
    ],
    categories: ['complementos'],
    image: 'sin-imagen'
  },
  {
    id: 'rollo-mantel-camino-blanco-mate',
    codigo: '6456BM',
    name: 'ROLLO MANTEL CAMINO 4X12 BLANCO MATE',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '1 unidad', price: 0 }
    ],
    categories: ['complementos'],
    image: 'sin-imagen'
  },
  {
    id: 'rollo-mantel-camino-transparente',
    codigo: '6456TR',
    name: 'ROLLO MANTEL CAMINO 4X12 TRANSPARENTE',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '1 unidad', price: 0 }
    ],
    categories: ['complementos'],
    image: 'sin-imagen'
  },
  {
    id: 'toallitas-papel-blancas',
    codigo: '6501C',
    name: 'TOALLITAS PAPEL BLANCAS',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '1000 unidades', price: 0 }
    ],
    categories: ['complementos'],
    image: 'sin-imagen'
  },
  {
    id: 'toallitas-papel-azules',
    codigo: '6502C',
    name: 'TOALLITAS PAPEL AZULES',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '1000 unidades', price: 0 }
    ],
    categories: ['complementos'],
    image: 'sin-imagen'
  },
  {
    id: 'toallitas-papel-rosas',
    codigo: '6503C',
    name: 'TOALLITAS PAPEL ROSAS',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '1000 unidades', price: 0 }
    ],
    categories: ['complementos'],
    image: 'sin-imagen'
  },
  {
    id: 'toallitas-papel-verdes',
    codigo: '6504C',
    name: 'TOALLITAS PAPEL VERDES',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '1000 unidades', price: 0 }
    ],
    categories: ['complementos'],
    image: 'sin-imagen'
  },
  {
    id: 'bolsas-basura-30l',
    codigo: '6601C',
    name: 'BOLSAS DE BASURA 30L',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '25 unidades', price: 0 }
    ],
    categories: ['complementos'],
    image: 'sin-imagen'
  },
  {
    id: 'bolsas-basura-50l',
    codigo: '6602C',
    name: 'BOLSAS DE BASURA 50L',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '25 unidades', price: 0 }
    ],
    categories: ['complementos'],
    image: 'sin-imagen'
  },
  {
    id: 'bolsas-basura-100l',
    codigo: '6603C',
    name: 'BOLSAS DE BASURA 100L',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '10 unidades', price: 0 }
    ],
    categories: ['complementos'],
    image: 'sin-imagen'
  },
  {
    id: 'bolsas-basura-120l',
    codigo: '6604C',
    name: 'BOLSAS DE BASURA 120L',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '10 unidades', price: 0 }
    ],
    categories: ['complementos'],
    image: 'sin-imagen'
  },
  {
    id: 'bolsas-basura-160l',
    codigo: '6605C',
    name: 'BOLSAS DE BASURA 160L',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '10 unidades', price: 0 }
    ],
    categories: ['complementos'],
    image: 'sin-imagen'
  },
  {
    id: 'bolsas-basura-240l',
    codigo: '6606C',
    name: 'BOLSAS DE BASURA 240L',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '10 unidades', price: 0 }
    ],
    categories: ['complementos'],
    image: 'sin-imagen'
  },
  {
    id: 'bobina-celulosa-industrial',
    codigo: '6701C',
    name: 'BOBINA CELULOSA INDUSTRIAL',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '2 unidades', price: 0 }
    ],
    categories: ['complementos'],
    image: 'sin-imagen'
  },
  {
    id: 'bobina-celulosa-mini',
    codigo: '6702C',
    name: 'BOBINA CELULOSA MINI',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '6 unidades', price: 0 }
    ],
    categories: ['complementos'],
    image: 'sin-imagen'
  },
  {
    id: 'bobina-celulosa-jumbo',
    codigo: '6703C',
    name: 'BOBINA CELULOSA JUMBO',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '6 unidades', price: 0 }
    ],
    categories: ['complementos'],
    image: 'sin-imagen'
  },
  {
    id: 'bobina-celulosa-seca-manos',
    codigo: '6704C',
    name: 'BOBINA CELULOSA SECA MANOS',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '6 unidades', price: 0 }
    ],
    categories: ['complementos'],
    image: 'sin-imagen'
  },
  {
    id: 'bobina-celulosa-cocina',
    codigo: '6705C',
    name: 'BOBINA CELULOSA COCINA',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '6 unidades', price: 0 }
    ],
    categories: ['complementos'],
    image: 'sin-imagen'
  },
  {
    id: 'detergente-liquido-industrial',
    codigo: '6801C',
    name: 'DETERGENTE LIQUIDO INDUSTRIAL',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '5 litros', price: 0 }
    ],
    categories: ['complementos'],
    image: 'sin-imagen'
  },
  {
    id: 'detergente-liquido-concentrado',
    codigo: '6802C',
    name: 'DETERGENTE LIQUIDO CONCENTRADO',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '5 litros', price: 0 }
    ],
    categories: ['complementos'],
    image: 'sin-imagen'
  },
  {
    id: 'detergente-polvo-industrial',
    codigo: '6803C',
    name: 'DETERGENTE POLVO INDUSTRIAL',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '5 kg', price: 0 }
    ],
    categories: ['complementos'],
    image: 'sin-imagen'
  },
  {
    id: 'desinfectante-liquido',
    codigo: '6804C',
    name: 'DESINFECTANTE LIQUIDO',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '5 litros', price: 0 }
    ],
    categories: ['complementos'],
    image: 'sin-imagen'
  },
  {
    id: 'desinfectante-concentrado',
    codigo: '6805C',
    name: 'DESINFECTANTE CONCENTRADO',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '5 litros', price: 0 }
    ],
    categories: ['complementos'],
    image: 'sin-imagen'
  },
  {
    id: 'limpiador-multiuso',
    codigo: '6806C',
    name: 'LIMPIADOR MULTIUSO',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '5 litros', price: 0 }
    ],
    categories: ['complementos'],
    image: 'sin-imagen'
  },
  {
    id: 'limpiador-cristales',
    codigo: '6807C',
    name: 'LIMPIADOR CRISTALES',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '5 litros', price: 0 }
    ],
    categories: ['complementos'],
    image: 'sin-imagen'
  },
  {
    id: 'limpiador-pisos',
    codigo: '6808C',
    name: 'LIMPIADOR PISOS',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '5 litros', price: 0 }
    ],
    categories: ['complementos'],
    image: 'sin-imagen'
  },
  {
    id: 'limpiador-banos',
    codigo: '6809C',
    name: 'LIMPIADOR BAÑOS',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '5 litros', price: 0 }
    ],
    categories: ['complementos'],
    image: 'sin-imagen'
  },
  {
    id: 'limpiador-cocinas',
    codigo: '6810C',
    name: 'LIMPIADOR COCINAS',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '5 litros', price: 0 }
    ],
    categories: ['complementos'],
    image: 'sin-imagen'
  },
  {
    id: 'desengrasante-industrial',
    codigo: '6811C',
    name: 'DESENGRASANTE INDUSTRIAL',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '5 litros', price: 0 }
    ],
    categories: ['complementos'],
    image: 'sin-imagen'
  },
  {
    id: 'desengrasante-concentrado',
    codigo: '6812C',
    name: 'DESENGRASANTE CONCENTRADO',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '5 litros', price: 0 }
    ],
    categories: ['complementos'],
    image: 'sin-imagen'
  },
  {
    id: 'jabon-liquido-manos',
    codigo: '6813C',
    name: 'JABON LIQUIDO MANOS',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '5 litros', price: 0 }
    ],
    categories: ['complementos'],
    image: 'sin-imagen'
  },
  {
    id: 'jabon-liquido-concentrado',
    codigo: '6814C',
    name: 'JABON LIQUIDO CONCENTRADO',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '5 litros', price: 0 }
    ],
    categories: ['complementos'],
    image: 'sin-imagen'
  },
  {
    id: 'jabon-pastilla-industrial',
    codigo: '6815C',
    name: 'JABON PASTILLA INDUSTRIAL',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '100 unidades', price: 0 }
    ],
    categories: ['complementos'],
    image: 'sin-imagen'
  },
  {
    id: 'limpiador-metales',
    codigo: '6816C',
    name: 'LIMPIADOR METALES',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '5 litros', price: 0 }
    ],
    categories: ['complementos'],
    image: 'sin-imagen'
  },
  {
    id: 'abrillantador-pisos',
    codigo: '6817C',
    name: 'ABRILLANTADOR PISOS',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '5 litros', price: 0 }
    ],
    categories: ['complementos'],
    image: 'sin-imagen'
  },
  {
    id: 'abrillantador-muebles',
    codigo: '6818C',
    name: 'ABRILLANTADOR MUEBLES',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '5 litros', price: 0 }
    ],
    categories: ['complementos'],
    image: 'sin-imagen'
  },
  {
    id: 'papel-higienico-industrial',
    codigo: '6901C',
    name: 'PAPEL HIGIENICO INDUSTRIAL',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '48 rollos', price: 0 }
    ],
    categories: ['complementos'],
    image: 'sin-imagen'
  },
  {
    id: 'papel-higienico-premium',
    codigo: '6902C',
    name: 'PAPEL HIGIENICO PREMIUM',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '48 rollos', price: 0 }
    ],
    categories: ['complementos'],
    image: 'sin-imagen'
  },
  {
    id: 'toallas-papel-industrial',
    codigo: '6903C',
    name: 'TOALLAS PAPEL INDUSTRIAL',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '1000 unidades', price: 0 }
    ],
    categories: ['complementos'],
    image: 'sin-imagen'
  },
  {
    id: 'toallas-papel-premium',
    codigo: '6904C',
    name: 'TOALLAS PAPEL PREMIUM',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '1000 unidades', price: 0 }
    ],
    categories: ['complementos'],
    image: 'sin-imagen'
  },
  {
    id: 'guantes-latex-talla-m',
    codigo: '7001C',
    name: 'GUANTES LATEX TALLA M',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '100 unidades', price: 0 }
    ],
    categories: ['complementos'],
    image: 'sin-imagen'
  },
  {
    id: 'guantes-latex-talla-l',
    codigo: '7002C',
    name: 'GUANTES LATEX TALLA L',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '100 unidades', price: 0 }
    ],
    categories: ['complementos'],
    image: 'sin-imagen'
  },
  {
    id: 'guantes-latex-talla-xl',
    codigo: '7003C',
    name: 'GUANTES LATEX TALLA XL',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '100 unidades', price: 0 }
    ],
    categories: ['complementos'],
    image: 'sin-imagen'
  },
  {
    id: 'guantes-nitrilo-talla-m',
    codigo: '7004C',
    name: 'GUANTES NITRILO TALLA M',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '100 unidades', price: 0 }
    ],
    categories: ['complementos'],
    image: 'sin-imagen'
  },
  {
    id: 'guantes-nitrilo-talla-l',
    codigo: '7005C',
    name: 'GUANTES NITRILO TALLA L',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '100 unidades', price: 0 }
    ],
    categories: ['complementos'],
    image: 'sin-imagen'
  },
  {
    id: 'guantes-nitrilo-talla-xl',
    codigo: '7006C',
    name: 'GUANTES NITRILO TALLA XL',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '100 unidades', price: 0 }
    ],
    categories: ['complementos'],
    image: 'sin-imagen'
  },
  {
    id: 'mascarillas-desechables',
    codigo: '7007C',
    name: 'MASCARILLAS DESECHABLES',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '100 unidades', price: 0 }
    ],
    categories: ['complementos'],
    image: 'sin-imagen'
  },
  {
    id: 'mascarillas-kn95',
    codigo: '7008C',
    name: 'MASCARILLAS KN95',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '50 unidades', price: 0 }
    ],
    categories: ['complementos'],
    image: 'sin-imagen'
  },
  {
    id: 'contenedores-plasticos-10l',
    codigo: '7101C',
    name: 'CONTENEDORES PLASTICOS 10L',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '10 unidades', price: 0 }
    ],
    categories: ['complementos'],
    image: 'sin-imagen'
  },
  {
    id: 'contenedores-plasticos-20l',
    codigo: '7102C',
    name: 'CONTENEDORES PLASTICOS 20L',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '10 unidades', price: 0 }
    ],
    categories: ['complementos'],
    image: 'sin-imagen'
  },
  {
    id: 'contenedores-plasticos-50l',
    codigo: '7103C',
    name: 'CONTENEDORES PLASTICOS 50L',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '5 unidades', price: 0 }
    ],
    categories: ['complementos'],
    image: 'sin-imagen'
  },
  {
    id: 'organizadores-estanteria',
    codigo: '7104C',
    name: 'ORGANIZADORES ESTANTERIA',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '10 unidades', price: 0 }
    ],
    categories: ['complementos'],
    image: 'sin-imagen'
  },
  {
    id: 'escobas-industrial',
    codigo: '7201C',
    name: 'ESCOBAS INDUSTRIAL',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '10 unidades', price: 0 }
    ],
    categories: ['complementos'],
    image: 'sin-imagen'
  },
  {
    id: 'escobas-cocina',
    codigo: '7202C',
    name: 'ESCOBAS COCINA',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '10 unidades', price: 0 }
    ],
    categories: ['complementos'],
    image: 'sin-imagen'
  },
  {
    id: 'trapo-microfibra',
    codigo: '7203C',
    name: 'TRAPO MICROFIBRA',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '50 unidades', price: 0 }
    ],
    categories: ['complementos'],
    image: 'sin-imagen'
  },
  {
    id: 'trapo-algodon',
    codigo: '7204C',
    name: 'TRAPO ALGODON',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '50 unidades', price: 0 }
    ],
    categories: ['complementos'],
    image: 'sin-imagen'
  },
  {
    id: 'trapo-celulosa',
    codigo: '7205C',
    name: 'TRAPO CELULOSA',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '100 unidades', price: 0 }
    ],
    categories: ['complementos'],
    image: 'sin-imagen'
  },
  {
    id: 'bayetas-industrial',
    codigo: '7206C',
    name: 'BAYETAS INDUSTRIAL',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '50 unidades', price: 0 }
    ],
    categories: ['complementos'],
    image: 'sin-imagen'
  },
  {
    id: 'bayetas-cocina',
    codigo: '7207C',
    name: 'BAYETAS COCINA',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '50 unidades', price: 0 }
    ],
    categories: ['complementos'],
    image: 'sin-imagen'
  },
  {
    id: 'estropajos-acero',
    codigo: '7208C',
    name: 'ESTROPAJOS ACERO',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '100 unidades', price: 0 }
    ],
    categories: ['complementos'],
    image: 'sin-imagen'
  },
  {
    id: 'estropajos-plastico',
    codigo: '7209C',
    name: 'ESTROPAJOS PLASTICO',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '100 unidades', price: 0 }
    ],
    categories: ['complementos'],
    image: 'sin-imagen'
  },
  {
    id: 'cepillos-industrial',
    codigo: '7210C',
    name: 'CEPILLOS INDUSTRIAL',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '20 unidades', price: 0 }
    ],
    categories: ['complementos'],
    image: 'sin-imagen'
  },
  {
    id: 'cepillos-cocina',
    codigo: '7211C',
    name: 'CEPILLOS COCINA',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '20 unidades', price: 0 }
    ],
    categories: ['complementos'],
    image: 'sin-imagen'
  },
  {
    id: 'cepillos-banos',
    codigo: '7212C',
    name: 'CEPILLOS BAÑOS',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '20 unidades', price: 0 }
    ],
    categories: ['complementos'],
    image: 'sin-imagen'
  },
  {
    id: 'secadores-manos',
    codigo: '7301C',
    name: 'SECADORES MANOS',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '1 unidad', price: 0 }
    ],
    categories: ['complementos'],
    image: 'sin-imagen'
  },
  {
    id: 'dispensadores-jabon',
    codigo: '7302C',
    name: 'DISPENSADORES JABON',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '5 unidades', price: 0 }
    ],
    categories: ['complementos'],
    image: 'sin-imagen'
  },
  {
    id: 'dispensadores-papel',
    codigo: '7303C',
    name: 'DISPENSADORES PAPEL',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '5 unidades', price: 0 }
    ],
    categories: ['complementos'],
    image: 'sin-imagen'
  },
  {
    id: 'dispensadores-celulosa',
    codigo: '7304C',
    name: 'DISPENSADORES CELULOSA',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '5 unidades', price: 0 }
    ],
    categories: ['complementos'],
    image: 'sin-imagen'
  },
  {
    id: 'papeleras-industrial',
    codigo: '7401C',
    name: 'PAPELERAS INDUSTRIAL',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '5 unidades', price: 0 }
    ],
    categories: ['complementos'],
    image: 'sin-imagen'
  },
  {
    id: 'papeleras-oficina',
    codigo: '7402C',
    name: 'PAPELERAS OFICINA',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '10 unidades', price: 0 }
    ],
    categories: ['complementos'],
    image: 'sin-imagen'
  },
  {
    id: 'papeleras-cocina',
    codigo: '7403C',
    name: 'PAPELERAS COCINA',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '10 unidades', price: 0 }
    ],
    categories: ['complementos'],
    image: 'sin-imagen'
  },
  {
    id: 'señalizacion-seguridad',
    codigo: '7501C',
    name: 'SEÑALIZACION SEGURIDAD',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '10 unidades', price: 0 }
    ],
    categories: ['complementos'],
    image: 'sin-imagen'
  },
  {
    id: 'alfombras-entrada',
    codigo: '7502C',
    name: 'ALFOMBRAS ENTRADA',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '5 unidades', price: 0 }
    ],
    categories: ['complementos'],
    image: 'sin-imagen'
  },
  {
    id: 'alfombras-antideslizantes',
    codigo: '7503C',
    name: 'ALFOMBRAS ANTIDESLIZANTES',
    description: '',
    fullDescription: '',
    presentations: [
      { size: '5 unidades', price: 0 }
    ],
    categories: ['complementos'],
    image: 'sin-imagen'
  },
  
]

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => {
    const inCategory = product.categories.includes(category);
    const hasPrice = Array.isArray(product.presentations) && product.presentations.some(p => Number(p.price) > 0);
    return inCategory && hasPrice;
  });
};

export const getAllCategories = (): string[] => {
  const categories = new Set<string>();
  products.forEach(product => {
    product.categories.forEach(category => categories.add(category));
  });
  return Array.from(categories);
};
