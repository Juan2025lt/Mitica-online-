import { MenuCategory, MenuItem } from '../types';

export const MENU_CATEGORIES: MenuCategory[] = [
  { id: 'entradas', name: 'Entradas', subtitle: 'Aperturas para despertar los sentidos' },
  { id: 'pastas', name: 'Pastas', subtitle: 'Elaboración propia con sémola de grano duro' },
  { id: 'carnes', name: 'Carnes', subtitle: 'Cortes seleccionados madurados al fuego' },
  { id: 'pescados-mariscos', name: 'Pescados & Mariscos', subtitle: 'Pesca fresca de estación y frutos de mar' },
  { id: 'sushi-frios', name: 'Sushi Fríos', subtitle: 'Nigiris, sashimis y rolls de autor' },
  { id: 'sushi-calientes', name: 'Sushi Calientes', subtitle: 'Rolls tempurados y sellados al soplete' },
  { id: 'sushi-combinados', name: 'Sushi Combinados', subtitle: 'Degustaciones de barra con combinados especiales' },
  { id: 'dulces', name: 'Dulces', subtitle: 'Postres de autor y finales sutiles' },
  {
    id: 'vinos',
    name: 'Vinos & Cava',
    subtitle: 'Cava con más de 100 etiquetas seleccionadas de terruños nacionales e internacionales',
    subcategories: [
      'Todos',
      'Malbec',
      'Cabernet Sauvignon',
      'Blends y Bivarietales',
      'Otras Cepas',
      'Magnum',
      'Blancos',
      'Rosados',
      'Espumantes & Champagne'
    ]
  },
  { id: 'copas', name: 'Copas', subtitle: 'Selección de vinos por copa rotativos' },
  { id: 'tragos-autor', name: 'Tragos de Autor', subtitle: 'Coctelería conceptual de nuestra barra' },
  { id: 'tragos-clasicos', name: 'Tragos Clásicos', subtitle: 'Recetas eternas ejecutadas con destilados premium' },
  { id: 'aperitivos', name: 'Aperitivos', subtitle: 'El ritual del vermouth y antesalas digestivas' },
  {
    id: 'destilados',
    name: 'Destilados',
    subtitle: 'Espirituosos de guarda y orígenes nobles',
    subcategories: [
      'Todos',
      'Vodka',
      'Ron',
      'Gin',
      'Tequila',
      'Grappa',
      'Vermouth',
      'Cognac',
      'Whisky y Maltas'
    ]
  },
  { id: 'licores', name: 'Licores', subtitle: 'Digestivos y elixires botánicos' },
  { id: 'bebidas-sin-alcohol', name: 'Bebidas sin alcohol', subtitle: 'Aguas, gaseosas y mocktails artesanales' },
  { id: 'cafeteria', name: 'Cafetería', subtitle: 'Café de especialidad tostado fresco' }
];

export const MENU_ITEMS: MenuItem[] = [
  // --- ENTRADAS ---
  {
    id: 'e1',
    name: 'Tataki de bife angosto',
    category: 'entradas',
    price: 21000,
    description: 'Con puré de arvejas y wasabi, koshō y pepinos encurtidos.',
    tag: 'NUEVO',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'e2',
    name: 'Carpaccio de lomo con trufa',
    category: 'entradas',
    price: 19500,
    description: 'Finas láminas de lomo, alcaparras crocantes, parmesano reggiano de 24 meses y aceite de trufa blanca.',
    image: 'https://images.unsplash.com/photo-1514944298352-78097d745c47?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'e3',
    name: 'Tiradito nikkei de pesca blanca',
    category: 'entradas',
    price: 22500,
    description: 'Pesca del día curada, leche de tigre al ají amarillo, camote glaseado y aceite de sésamo tostado.',
    tag: 'HAPPY HOUR',
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'e4',
    name: 'Mollejitas crocantes laqueadas',
    category: 'entradas',
    price: 23000,
    description: 'Laqueadas en miel de caña y jengibre sobre emulsión de coliflor tostada y chips de ajo.',
    tag: 'RECOMENDADO'
  },

  // --- PASTAS ---
  {
    id: 'p1',
    name: 'Pappardelle & mollejas trufadas',
    category: 'pastas',
    price: 33000,
    description: 'Masa casera al huevo, mollejas doradas al fuego vivo, manteca de trufa, fondo de cocción y ciboulette fresca.',
    tag: 'RECOMENDADO',
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'p2',
    name: 'Agnolottis de ossobuco braseado',
    category: 'pastas',
    price: 29500,
    description: 'Rellenos de ossobuco cocido 12 horas en vino Malbec, fondo denso de cocción y salvia crocante.',
    image: 'https://images.unsplash.com/photo-1587740908075-9e245070dfaa?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'p3',
    name: 'Raviolones negros de salmón y langostinos',
    category: 'pastas',
    price: 34000,
    description: 'Pasta con tinta de calamar, emulsión de azafrán, zest de lima y pistachos tostados.'
  },

  // --- CARNES ---
  {
    id: 'c1',
    name: 'Ojo de bife',
    category: 'carnes',
    price: 65000,
    description: 'Masa frizza, demi-glace y ensalada de remolacha.',
    tag: 'RECOMENDADO',
    image: 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'c2',
    name: 'Bife de chorizo madurado dry-aged 45 días',
    category: 'carnes',
    price: 68000,
    description: 'Corte noble de pastura argentina con maduración en seco, manteca de hierbas serranas y milhojas de papa al carbón.'
  },
  {
    id: 'c3',
    name: 'Lomo Mítica al sartenazo',
    category: 'carnes',
    price: 58000,
    description: 'Medallón de lomo envuelto en cenizas de puerro, reducción de oporto y puré cremoso ahumado con nuez moscada.'
  },

  // --- PESCADOS & MARISCOS ---
  {
    id: 'pm1',
    name: 'Pulpo Mítica',
    category: 'pescados-mariscos',
    price: 59000,
    description: 'Tentáculo cocido 6hs en té azul oolong, soja y azúcar mascabo, papines caolín, espuma de su propio colágeno y ali-oli.',
    tag: 'RECOMENDADO',
    image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'pm2',
    name: 'Salmón rosado en costra de sésamo y pistacho',
    category: 'pescados-mariscos',
    price: 54000,
    description: 'Punto jugoso a la plancha, wok de vegetales baby al sésamo y reducción teriyaki de ciruelas negras.'
  },
  {
    id: 'pm3',
    name: 'Pesca blanca del día a la brasa',
    category: 'pescados-mariscos',
    price: 46000,
    description: 'Con beurre blanc de limón sutil, alcaparras fritas y espárragos verdes asados con sal de Maldon.'
  },

  // --- SUSHI FRÍOS ---
  {
    id: 'sf1',
    name: 'Merken Roll',
    category: 'sushi-frios',
    price: 24000,
    description: 'Láminas de salmón, merken, relleno de salmón ahumado, palta y maíz cancha (9p).',
    tag: 'RECOMENDADO',
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'sf2',
    name: 'Geishas de salmón trufado (5p)',
    category: 'sushi-frios',
    price: 19500,
    description: 'Láminas de salmón fresco envolviendo palta hass y queso crema philadelphia, gotas de aceite de trufa y ciboulette.'
  },
  {
    id: 'sf3',
    name: 'Sashimi Mítica Selection (12p)',
    category: 'sushi-frios',
    price: 26000,
    description: 'Cortes precisos de salmón fresco, pesca blanca madurada y pulpo al vacío con wasabi natural de raíz rallada.'
  },
  {
    id: 'sf4',
    name: 'Tuna Passion Roll (9p)',
    category: 'sushi-frios',
    price: 25000,
    description: 'Atún rojo sellado, langostinos panizados, palta, coronado con reducción de maracuyá y masa wantán crocante.'
  },

  // --- SUSHI CALIENTES ---
  {
    id: 'sc1',
    name: 'Hot Crispy Tartar (8p)',
    category: 'sushi-calientes',
    price: 23500,
    description: 'Roll rebozado en panko crocante, coronado con tartar de salmón flameado, salsa tare y ciboulette.',
    tag: 'HAPPY HOUR',
    image: 'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'sc2',
    name: 'Aburi Salmon Smoke (9p)',
    category: 'sushi-calientes',
    price: 24500,
    description: 'Roll sellado al soplete con manteca japonesa de ajo, langostino tempura y queso crema en el centro.'
  },

  // --- SUSHI COMBINADOS ---
  {
    id: 'sco1',
    name: 'Combinado Degustación Omakase (18p)',
    category: 'sushi-combinados',
    price: 46000,
    description: 'Selección del itamae con piezas clásicas, autor y sashimis premium para compartir en dos personas.',
    tag: 'RECOMENDADO',
    image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'sco2',
    name: 'Gran Combinado Mítica (30p)',
    category: 'sushi-combinados',
    price: 72000,
    description: 'La máxima experiencia de nuestra barra de sushi a la vista: rolls fríos, calientes, nigiris especiales y geishas.'
  },

  // --- DULCES ---
  {
    id: 'd1',
    name: 'Miel en panal',
    category: 'dulces',
    price: 16000,
    description: 'Panal de miel natural de Traslasierra, crema de queso de cabra, crocante de polen y helado artesanal de tomillo.',
    tag: 'NUEVO',
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'd2',
    name: 'Volcán de chocolate belga 70%',
    category: 'dulces',
    price: 15500,
    description: 'Corazón fluido de chocolate amargo, helado de pistacho siciliano y crocante de nibs de cacao.',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'd3',
    name: 'Némesis de dulce de leche y sal marina',
    category: 'dulces',
    price: 14500,
    description: 'Texturas de dulce de leche casero, crocante de almendras y escamas de flor de sal patagónica.'
  },

  // --- VINOS & CAVA ---
  // Rango desde $13.000 hasta $1.800.000 en vinos de alta gama como Dom Pérignon
  {
    id: 'v1',
    name: 'Dom Pérignon Vintage Brut',
    category: 'vinos',
    subcategory: 'Espumantes & Champagne',
    price: 1800000,
    description: 'Épernay, Champagne, Francia. Notas complejas de brioche tostado, cítricos secos y mineralidad absoluta.',
    tag: 'ALTA GAMA',
    details: 'Champagne · 750ml'
  },
  {
    id: 'v2',
    name: 'Krug Grande Cuvée 170th Edition',
    category: 'vinos',
    subcategory: 'Espumantes & Champagne',
    price: 1650000,
    description: 'Reims, Champagne, Francia. Ensamblaje magistral de más de 120 vinos de más de 10 añadas.',
    tag: 'ALTA GAMA',
    details: 'Champagne · 750ml'
  },
  {
    id: 'v3',
    name: 'Catena Zapata Estiba Reservada',
    category: 'vinos',
    subcategory: 'Blends y Bivarietales',
    price: 780000,
    description: 'Agrelo, Luján de Cuyo, Mendoza. Vino ícono argentino de elegancia y potencia refinada en barricas francesas.',
    tag: 'ALTA GAMA',
    details: 'Corte de guarda · 750ml'
  },
  {
    id: 'v4',
    name: 'Cobos Malbec Marchiori Vineyard',
    category: 'vinos',
    subcategory: 'Malbec',
    price: 640000,
    description: 'Viña Cobos, Paul Hobbs. Perdriel, Mendoza. Expresión cúspide del Malbec de terroir centenario.',
    tag: 'ALTA GAMA',
    details: 'Malbec 100% · 750ml'
  },
  {
    id: 'v5',
    name: 'Cheval des Andes',
    category: 'vinos',
    subcategory: 'Blends y Bivarietales',
    price: 490000,
    description: 'Château Cheval Blanc & Terrazas de los Andes. Las Compuertas. Fusión bordelesa con altura andina.',
    tag: 'ALTA GAMA',
    details: 'Malbec / Cabernet Sauvignon · 750ml'
  },
  {
    id: 'v6',
    name: 'Felipe Rutini Cabernet-Merlot',
    category: 'vinos',
    subcategory: 'Blends y Bivarietales',
    price: 290000,
    description: 'Gualtallary, Valle de Uco. Crianza 24 meses en roble francés nuevo. Estructura y finura.',
    details: 'Corte icónico · 750ml'
  },
  {
    id: 'v7',
    name: 'Enzo Bianchi Gran Corte Magnum (1.5L)',
    category: 'vinos',
    subcategory: 'Magnum',
    price: 360000,
    description: 'San Rafael & Valle de Uco. Botella Magnum de 1.5 litros en estuche de madera de nogal.',
    details: 'Formato Magnum 1500ml'
  },
  {
    id: 'v8',
    name: 'Zuccardi Finca Piedra Infinita',
    category: 'vinos',
    subcategory: 'Malbec',
    price: 320000,
    description: 'Paraje Altamira, Valle de Uco. Pura mineralidad de suelos calcáreos, vinificado en piletas de concreto.',
    tag: 'RECOMENDADO',
    details: 'Malbec Paraje Altamira'
  },
  {
    id: 'v9',
    name: 'Matias Riccitelli Republica del Malbec',
    category: 'vinos',
    subcategory: 'Malbec',
    price: 85000,
    description: 'Vistalba, Luján de Cuyo. Viñedo plantado en 1927. Fruta roja profunda y taninos sedosos.',
    details: 'Malbec Single Vineyard'
  },
  {
    id: 'v10',
    name: 'Rutini Cabernet Sauvignon Single Vineyard',
    category: 'vinos',
    subcategory: 'Cabernet Sauvignon',
    price: 78000,
    description: 'Gualtallary, Tupungato. Notas de pimiento asado, pimienta negra, cedro y ciruela madura.',
    details: 'Cabernet Sauvignon 100%'
  },
  {
    id: 'v11',
    name: 'Susana Balbo Signature Brioso',
    category: 'vinos',
    subcategory: 'Blends y Bivarietales',
    price: 68000,
    description: 'Agrelo, Mendoza. Blend de Cabernet Sauvignon, Malbec, Cabernet Franc y Petit Verdot.',
    details: 'Blend de altura'
  },
  {
    id: 'v12',
    name: 'El Enemigo Cabernet Franc',
    category: 'vinos',
    subcategory: 'Otras Cepas',
    price: 42000,
    description: 'Alejandro Vigil. Gualtallary, Valle de Uco. Especiado, con gran acidez fresca y tensión calcárea.',
    tag: 'RECOMENDADO',
    details: 'Cabernet Franc 85%, Malbec 15%'
  },
  {
    id: 'v13',
    name: 'Colomé Auténtico Malbec Sin Madera',
    category: 'vinos',
    subcategory: 'Malbec',
    price: 38000,
    description: 'Molinos, Valles Calchaquíes, Salta (2.300 msnm). Expresión pura de sol y fruta silvestre.',
    details: 'Valles Calchaquíes'
  },
  {
    id: 'v14',
    name: 'Lagarde Primeras Viñas Chardonnay',
    category: 'vinos',
    subcategory: 'Blancos',
    price: 39000,
    description: 'Gualtallary, Valle de Uco. Fermentado y criado en barricas de roble francés, fresco y untuoso.',
    details: 'Chardonnay Gran Reserva'
  },
  {
    id: 'v15',
    name: 'Luigi Bosca De Sangre White Blend',
    category: 'vinos',
    subcategory: 'Blancos',
    price: 31000,
    description: 'Chardonnay, Semillón y Sauvignon Blanc. Complejidad aromática cítrica y mineral.',
    details: 'Blend de Blancas'
  },
  {
    id: 'v16',
    name: 'Chandon Cuvée Réserve Pinot Noir Rosé',
    category: 'vinos',
    subcategory: 'Rosados',
    price: 24000,
    description: 'Valle de Uco. Delicada burbuja, aromas a frutos rojos silvestres y final seco y crujiente.',
    details: 'Espumante Rosado Método Tradicional'
  },
  {
    id: 'v17',
    name: 'DV Catena Malbec-Malbec',
    category: 'vinos',
    subcategory: 'Malbec',
    price: 28000,
    description: 'Corte de viñedos Angélica y La Pirámide. Clásico de elegancia, taninos redondos y café moka.',
    details: 'Malbec ensamblado'
  },
  {
    id: 'v18',
    name: 'Nicasia Vineyards Red Blend',
    category: 'vinos',
    subcategory: 'Blends y Bivarietales',
    price: 18500,
    description: 'Malbec, Cabernet Franc y Petit Verdot de viñedos de altura.',
    details: 'Red Blend de altura'
  },
  {
    id: 'v19',
    name: 'Alaris de Trapiche Malbec de Guarda',
    category: 'vinos',
    subcategory: 'Malbec',
    price: 13000,
    description: 'Luján de Cuyo, Mendoza. Notas de ciruelas maduras, vainilla y final amigable para iniciar la velada.',
    details: 'Etiqueta de entrada'
  },

  // --- COPAS ---
  {
    id: 'cp1',
    name: 'Copa de Gran Malbec Reserva de la Cava',
    category: 'copas',
    price: 7500,
    description: 'Servido con sistema Coravin para preservar la frescura del terroir seleccionado de la semana.',
    tag: 'HAPPY HOUR'
  },
  {
    id: 'cp2',
    name: 'Copa de Chardonnay de Altura',
    category: 'copas',
    price: 6800,
    description: 'Valle de Uco, criado sobre lías con notas mantecosas y acidez vibrante.'
  },
  {
    id: 'cp3',
    name: 'Copa de Espumante Extra Brut Método Tradicional',
    category: 'copas',
    price: 6500,
    description: 'Burbuja fina y persistente ideal para maridar con ostras o sushi.'
  },

  // --- TRAGOS DE AUTOR ---
  {
    id: 'ta1',
    name: 'Mítico',
    category: 'tragos-autor',
    price: 12000,
    description: 'Gin, reducción de frutos rojos, pomelo y tónica.',
    tag: 'RECOMENDADO',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ta2',
    name: 'Gauss 5447',
    category: 'tragos-autor',
    price: 12500,
    description: 'Bourbon añejo, cordial de higos serranos, bitter aromático ahumado con madera de manzano.',
    tag: 'NUEVO'
  },
  {
    id: 'ta3',
    name: 'Villa Belgrano Sunset',
    category: 'tragos-autor',
    price: 11500,
    description: 'Vodka infusionado en té earl grey, cordial de lima kaffir, espumante rosé y perfume de jazmín.',
    tag: 'HAPPY HOUR'
  },
  {
    id: 'ta4',
    name: 'Cobre & Humo',
    category: 'tragos-autor',
    price: 13000,
    description: 'Mezcal artesanal, licor de damasco, jugo de lima fresca y sal de merkén en el borde.',
    tag: 'RECOMENDADO'
  },

  // --- TRAGOS CLÁSICOS ---
  {
    id: 'tc1',
    name: 'Negroni Clásico Reserva',
    category: 'tragos-clasicos',
    price: 10500,
    description: 'Gin Tanqueray London Dry, Campari bitter italiano y Vermouth Rosso Antica Formula con piel de naranja.',
    tag: 'HAPPY HOUR'
  },
  {
    id: 'tc2',
    name: 'Old Fashioned',
    category: 'tragos-clasicos',
    price: 11000,
    description: 'Bourbon Maker\'s Mark, terrón de azúcar mascabo, angostura bitters y hielo de cristal tallado a mano.'
  },
  {
    id: 'tc3',
    name: 'Dry Martini',
    category: 'tragos-clasicos',
    price: 10500,
    description: 'Gin Hendrick\'s o Vodka Grey Goose, Noilly Prat dry vermouth, twist de limón o aceituna rellena.'
  },

  // --- APERITIVOS ---
  {
    id: 'ap1',
    name: 'Aperol Spritz',
    category: 'aperitivos',
    price: 9500,
    description: 'Aperol, prosecco italiano, golpe de soda y rodaja de naranja fresca.',
    tag: 'HAPPY HOUR'
  },
  {
    id: 'ap2',
    name: 'Vermouth de Grifo Mítica con soda sifón',
    category: 'aperitivos',
    price: 7500,
    description: 'Elaboración artesanal con 24 botánicos serranos, hielo roca y aceituna verde gordal.',
    tag: 'HAPPY HOUR'
  },
  {
    id: 'ap3',
    name: 'Campari Orange / Tonic',
    category: 'aperitivos',
    price: 8500,
    description: 'El clásico amargo de Milán servido con jugo exprimido de naranja al momento o agua tónica premium.'
  },

  // --- DESTILADOS ---
  {
    id: 'des1',
    name: 'Macallan 12 Años Double Cask',
    category: 'destilados',
    subcategory: 'Whisky y Maltas',
    price: 62000,
    description: 'Speyside Single Malt Scotch Whisky. Añejado en roble americano y europeo sazonado en Jerez.',
    tag: 'ALTA GAMA',
    details: 'Single Malt · 50ml'
  },
  {
    id: 'des2',
    name: 'Johnnie Walker Blue Label',
    category: 'destilados',
    subcategory: 'Whisky y Maltas',
    price: 75000,
    description: 'Mezcla legendaria de whiskies escoceses raros y añejos. Notas aterciopeladas y humo delicado.',
    tag: 'ALTA GAMA',
    details: 'Blended Scotch · 50ml'
  },
  {
    id: 'des3',
    name: 'Lagavulin 16 Años',
    category: 'destilados',
    subcategory: 'Whisky y Maltas',
    price: 68000,
    description: 'Islay Single Malt. Rico en turba profunda, yodo marino y final eterno.',
    details: 'Islay Single Malt · 50ml'
  },
  {
    id: 'des4',
    name: 'Grey Goose Vodka',
    category: 'destilados',
    subcategory: 'Vodka',
    price: 18000,
    description: 'Francia. Destilado del mejor trigo de invierno de la región de Picardía con agua de manantial de Gensac.',
    details: 'Vodka Ultra Premium · 50ml'
  },
  {
    id: 'des5',
    name: 'Belvedere Pure Vodka',
    category: 'destilados',
    subcategory: 'Vodka',
    price: 17500,
    description: 'Polonia. Centeno dorado Dankowskie con pureza cuádruple destilada.',
    details: 'Vodka · 50ml'
  },
  {
    id: 'des6',
    name: 'Zacapa Centenario 23 Solera Gran Reserva',
    category: 'destilados',
    subcategory: 'Ron',
    price: 34000,
    description: 'Guatemala. Añejado en las alturas sobre el nivel del mar con miel virgen de caña de azúcar.',
    details: 'Ron añejo solera · 50ml'
  },
  {
    id: 'des7',
    name: 'Monkey 47 Schwarzwald Dry Gin',
    category: 'destilados',
    subcategory: 'Gin',
    price: 32000,
    description: 'Selva Negra, Alemania. 47 botánicos cuidadosamente infusionados con arándanos rojos.',
    details: 'Gin artesanal · 50ml'
  },
  {
    id: 'des8',
    name: 'Don Julio 1942 Añejo Tequila',
    category: 'destilados',
    subcategory: 'Tequila',
    price: 85000,
    description: 'Jalisco, México. 100% agave azul tequilana Weber, envejecido al menos dos años y medio.',
    tag: 'ALTA GAMA',
    details: 'Tequila Extra Añejo · 50ml'
  },
  {
    id: 'des9',
    name: 'Hennessy X.O Cognac',
    category: 'destilados',
    subcategory: 'Cognac',
    price: 95000,
    description: 'Cognac, Francia. El ícono original de la casa Hennessy creado en 1870.',
    tag: 'ALTA GAMA',
    details: 'Cognac X.O · 50ml'
  },
  {
    id: 'des10',
    name: 'Grappa Poli Sassicaia',
    category: 'destilados',
    subcategory: 'Grappa',
    price: 45000,
    description: 'Véneto, Italia. Destilación de orujos del mítico vino Sassicaia en barricas de roble.',
    details: 'Grappa reserva · 50ml'
  },
  {
    id: 'des11',
    name: 'Carpano Antica Formula',
    category: 'destilados',
    subcategory: 'Vermouth',
    price: 12000,
    description: 'Torino, Italia. La receta original de 1786 con azafrán y vainilla de Madagascar.',
    details: 'Vermouth Rosso · 60ml'
  },

  // --- LICORES ---
  {
    id: 'lic1',
    name: 'Limoncello Casero Mítica',
    category: 'licores',
    price: 6500,
    description: 'Maceración de limones de las sierras cordobesas servido a -18°C.',
    details: 'Copa digestiva'
  },
  {
    id: 'lic2',
    name: 'Fernet Branca Selección Especial',
    category: 'licores',
    price: 7500,
    description: 'El clásico de la cultura cordobesa con golpe de hielo cristal.',
    details: 'Amargo de hierbas'
  },
  {
    id: 'lic3',
    name: 'Amaretto Disaronno Originale',
    category: 'licores',
    price: 8500,
    description: 'Licor de almendras dulces con notas de caramelo tostado.',
    details: 'Digestivo italiano'
  },

  // --- BEBIDAS SIN ALCOHOL ---
  {
    id: 'bsa1',
    name: 'Limonada artesanal Mítica',
    category: 'bebidas-sin-alcohol',
    price: 5200,
    description: 'Jugo fresco de limón, menta del huerto, jengibre natural y azúcar mascabo.',
    tag: 'RECOMENDADO'
  },
  {
    id: 'bsa2',
    name: 'Pomelada con romero quemado',
    category: 'bebidas-sin-alcohol',
    price: 5400,
    description: 'Pomelo rosado exprimido, almíbar de romero quemado y toque de soda.'
  },
  {
    id: 'bsa3',
    name: 'Agua mineral con o sin gas (500ml)',
    category: 'bebidas-sin-alcohol',
    price: 3200,
    description: 'En botella de vidrio retornable de manantial puro.'
  },
  {
    id: 'bsa4',
    name: 'Agua tónica premium',
    category: 'bebidas-sin-alcohol',
    price: 3800,
    description: 'Burbuja fina con quinina natural.'
  },

  // --- CAFETERÍA ---
  {
    id: 'caf1',
    name: 'Espresso Doble de Especialidad',
    category: 'cafeteria',
    price: 4500,
    description: 'Granos de origen único tostados localmente. Perfil notas de cacao amargo y avellanas.',
    tag: 'RECOMENDADO'
  },
  {
    id: 'caf2',
    name: 'Flat White Mítica',
    category: 'cafeteria',
    price: 5200,
    description: 'Doble ristretto con microespuma de leche sedosa y latte art.'
  },
  {
    id: 'caf3',
    name: 'Cold Brew con piel de naranja',
    category: 'cafeteria',
    price: 5800,
    description: 'Infusión en frío durante 18 horas, servido sobre esfera de hielo cristal.',
    tag: 'NUEVO'
  },
  {
    id: 'caf4',
    name: 'Té en hebras en tetera de hierro fundido',
    category: 'cafeteria',
    price: 4900,
    description: 'Selección de té verde sencha, oolong azul o blend serrano con flores silvestres.'
  }
];
