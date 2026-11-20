/* DATOS EDITABLES DEL PROYECTO
 * Estos archivos se cargan antes que js/app.js para permitir abrir index.html
 * también directamente desde la computadora, sin servidor de desarrollo.
 * Mantener los nombres de las constantes: el sitio los utiliza internamente.
 */
/* Mapa: imagen y sus límites geográficos (grados) */
const MAPA={src:"imagenes/mapa/mapa-satelital.jpg",ancho:1400,alto:2832,oeste:-64.344,este:-64.324,sur:-32.788,norte:-32.754};
/* En cada zona: fondo = foto del entorno desde la perspectiva del recorrido;
   fotos = 2 registros de líquenes con plantilla + 1 foto del muestreo. */
const ZONAS=[
 {id:"plaza",nombre:"Plaza",color:"#f0c419",
  desc:"Una plaza pública con muchos árboles, casi todos exóticos (de otras regiones). No hay basura de las casas en el suelo y pasa bastante gente.",
  cobertura:30.89, clorofila:1.07,
  biotipos:["Foliosos","Crustosos"],
  fondo:"imagenes/zonas/plaza/entorno.webp",
  fotos:[
    {src:"imagenes/zonas/plaza/liquen-1.webp",clase:"liquen",pie:"Líquenes registrados con la plantilla en la plaza"},
    {src:"imagenes/zonas/plaza/liquen-2.webp",clase:"liquen",pie:"Segundo registro de líquenes con la plantilla en la plaza"},
    {src:"imagenes/zonas/plaza/muestreo.webp",clase:"proceso",pie:"Actividad de observación y muestreo en la plaza"}
  ],
  
  /* ---- Geometría (viene de QGIS, no hace falta tocarla) ---- */
  poligono:[[-64.334892,-32.757975],[-64.333025,-32.758336],[-64.333391,-32.759789],[-64.335176,-32.759423],[-64.334892,-32.757975]],
  transectas:[{"n":"T1","linea":[[-64.334574,-32.75855],[-64.334327,-32.758401],[-64.334052,-32.758645],[-64.333654,-32.75855],[-64.333583,-32.758748],[-64.333789,-32.75902],[-64.333748,-32.759307],[-64.334008,-32.759333],[-64.334197,-32.759156],[-64.334493,-32.759215],[-64.334714,-32.759005]]}]},
 {id:"basural",nombre:"Ex basural",color:"#e5483a",
  desc:"Una calle con árboles, todos exóticos. Hay mucha basura de las casas en el suelo y pasa bastante gente.",
  cobertura:25.64, clorofila:1.01,
  biotipos:["Foliosos","Crustosos"],
  fondo:"imagenes/zonas/ex-basural/entorno.webp",
  fotos:[
    {src:"imagenes/zonas/ex-basural/liquen-1.webp",clase:"liquen",pie:"Líquenes registrados con la plantilla en el ex basural"},
    {src:"imagenes/zonas/ex-basural/liquen-2.webp",clase:"liquen",pie:"Segundo registro de líquenes con la plantilla en el ex basural"},
    {src:"imagenes/zonas/ex-basural/muestreo.webp",clase:"proceso",pie:"Actividad de observación y muestreo en el ex basural"}
  ],
  
  /* ---- Geometría (viene de QGIS, no hace falta tocarla) ---- */
  poligono:[[-64.329949,-32.75799],[-64.330029,-32.758377],[-64.326019,-32.759092],[-64.325522,-32.757086],[-64.325797,-32.757021],[-64.326258,-32.758779],[-64.329639,-32.758099],[-64.329949,-32.75799]],
  transectas:[{"n":"T1","linea":[[-64.329759,-32.758142],[-64.329493,-32.758367],[-64.329076,-32.758272],[-64.328642,-32.758574],[-64.328308,-32.758467],[-64.327882,-32.758698],[-64.327498,-32.758589],[-64.327262,-32.758828],[-64.326916,-32.758695],[-64.32668,-32.758905],[-64.326304,-32.758816],[-64.326195,-32.758985],[-64.325988,-32.758766],[-64.326077,-32.758453],[-64.325867,-32.75821],[-64.325932,-32.757909],[-64.32574,-32.757761],[-64.325814,-32.757442],[-64.325628,-32.757217]]}]},
 {id:"laguna",nombre:"Laguna",color:"#45c04f",
  desc:"Una zona pública con pocos árboles, casi todos exóticos. Hay algunos restos de la actividad agrícola en el suelo y pasa poca gente. El agua está muy turbia y se ve blanquecina. Al sudeste hay un frigorífico que produce olores fuertes.",
  cobertura:32.76, clorofila:1.67,
  biotipos:["Foliosos","Crustosos"],
  fondo:"imagenes/zonas/laguna/entorno.webp",
  fotos:[
    {src:"imagenes/zonas/laguna/liquen-1.webp",clase:"liquen",pie:"Líquenes registrados con la plantilla en la laguna"},
    {src:"imagenes/zonas/laguna/liquen-2.webp",clase:"liquen",pie:"Segundo registro de líquenes con la plantilla en la laguna"},
    {src:"imagenes/zonas/laguna/muestreo.webp",clase:"proceso",pie:"Actividad de observación y muestreo junto a la laguna"}
  ],
  
  /* ---- Geometría (viene de QGIS, no hace falta tocarla) ---- */
  poligono:[[-64.342325,-32.778896],[-64.339831,-32.779337],[-64.337271,-32.779859],[-64.336875,-32.782761],[-64.336425,-32.785937],[-64.336325,-32.786667],[-64.336635,-32.786916],[-64.337782,-32.786209],[-64.339626,-32.787509],[-64.341836,-32.786091],[-64.342935,-32.784223],[-64.343101,-32.782202],[-64.342935,-32.780961],[-64.342451,-32.780406],[-64.342332,-32.779478],[-64.342325,-32.778896]],
  transectas:[{"n":"T2","linea":[[-64.336795,-32.784546],[-64.336771,-32.7848],[-64.336706,-32.785308],[-64.336617,-32.785985],[-64.336653,-32.786437],[-64.336484,-32.786638],[-64.336422,-32.786384],[-64.336514,-32.786112]]},{"n":"T1","linea":[[-64.342269,-32.779061],[-64.342241,-32.778961],[-64.342019,-32.778995],[-64.34187,-32.779138]]}]}
];

