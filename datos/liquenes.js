/* DATOS EDITABLES DEL PROYECTO
 * Estos archivos se cargan antes que js/app.js para permitir abrir index.html
 * también directamente desde la computadora, sin servidor de desarrollo.
 * Mantener los nombres de las constantes: el sitio los utiliza internamente.
 */
/* Líquenes de Córdoba: un bloque { } por género. Las fotos están en fotos/liquenes/ (podés poner varias por género). */
const LIQUENES=[
 {nombre:"Caloplaca",tipo:"Crustosos",
  desc:"Forma costras de color naranja pegadas a rocas y cortezas. El naranja lo da una sustancia llamada parietina. También hay especies blanquecinas.",
  fotos:[{src:"imagenes/liquenes/caloplaca.jpg",pie:"Caloplaca"}]},
 {nombre:"Candelariella",tipo:"Crustosos",
  desc:"Forma una costra de color verde amarillento a naranja amarillento sobre la corteza. Se parece mucho a Caloplaca: para distinguirlas se mira el aspecto y se hace una prueba con un reactivo (prueba K), que da color rojizo en Candelariella y violeta en Caloplaca.",
  fotos:[{src:"imagenes/liquenes/candelariella.jpg",pie:"Candelariella"}]},
 {nombre:"Parmotrema",tipo:"Foliosos",
  desc:"Es un liquen grande (casi siempre de más de 5 cm), grisáceo, con forma de hojas, y se despega fácilmente de la corteza. Es un género muy diverso, con muchísimas especies.",
  fotos:[{src:"imagenes/liquenes/parmotrema.jpg",pie:"Parmotrema"}]},
 {nombre:"Physcia",tipo:"Foliosos",
  desc:"Tiene forma circular o algo irregular y es de color gris blanquecino a gris azulado. Por debajo tiene unos filamentos (rizinas) que lo sujetan, y por dentro es blanquecino.",
  fotos:[{src:"imagenes/liquenes/physcia-1.jpg",pie:"Physcia sobre una piedra"},{src:"imagenes/liquenes/physcia-2.jpg",pie:"Physcia con apotecios oscuros"}]},
 {nombre:"Punctelia",tipo:"Foliosos",
  desc:"Es de color gris a gris verdoso, con lóbulos de puntas redondeadas y sin pelitos. Está flojamente pegado a la corteza. Es un grupo muy amplio, con muchas especies.",
  fotos:[{src:"imagenes/liquenes/punctelia.jpg",pie:"Punctelia"}]},
 {nombre:"Cladonia",tipo:"Fructiculosos",
  desc:"Está formado por dos partes distintas: una base y tallitos que se levantan, que en la foto tienen forma de copitas. Sus estructuras para reproducirse (apotecios) están perforadas.",
  fotos:[{src:"imagenes/liquenes/cladonia.jpg",pie:"Cladonia"}]},
 {nombre:"Ramalina",tipo:"Fructiculosos",
  desc:"Forma talos grandes, derechos o algo colgantes, aplanados y de color gris verdoso. Sus apotecios cambian mucho en ubicación, tamaño, forma y color.",
  fotos:[{src:"imagenes/liquenes/ramalina.jpg",pie:"Ramalina"}]},
 {nombre:"Usnea",tipo:"Fructiculosos",
  desc:"Parece una barba o una cabellera colgante de color amarillo verdoso. Algunas especies miden más de dos metros y otras solo unos centímetros. Tiene ácido úsnico, una sustancia con propiedades antibióticas, y por eso algunas especies, como la “barba de piedra”, se usan en la medicina naturista.",
  fotos:[{src:"imagenes/liquenes/usnea-1.jpg",pie:"Usnea"},{src:"imagenes/liquenes/usnea-2.jpg",pie:"Usnea angulata"},{src:"imagenes/liquenes/usnea-3.jpg",pie:"Usnea en un bosque",credito:"Foto: Luciana Mestre"}]}
];
const CREDITO_FOTOS="Imagen del libro de referencia (ver fuente).";
const REFERENCIA="Rodriguez, J. M., Estrabou, C., Filippini, E. R. y Díaz Domínguez, R. E. (2021). Líquenes del centro de Argentina (1.ª ed.). Córdoba: Editorial de la UNC. ISBN 978-987-707-191-7.";
