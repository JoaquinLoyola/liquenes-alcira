/* DATOS EDITABLES DEL PROYECTO
 * Estos archivos se cargan antes que js/app.js para permitir abrir index.html
 * también directamente desde la computadora, sin servidor de desarrollo.
 * Mantener los nombres de las constantes: el sitio los utiliza internamente.
 */
const TITULO="Líquenes: los detectives del ambiente";
const BAJADA="Con lupa y microscopio, los chicos de 5.º grado del Centro Educativo José María Paz, de Alcira Gigena, analizaron los líquenes para averiguar cómo está el aire del pueblo.";
const LOGOS=[
 {nombre:"ECOMA, Laboratorio de Ecología Microbiana Ambiental",src:"imagenes/logos/ecoma.png"},
 {nombre:"ICBIA, CONICET y UNRC",src:"imagenes/logos/icbia-unrc-conicet.png"},
 {nombre:"Facultad de Ciencias Exactas, Físico-Químicas y Naturales, UNRC",src:"imagenes/logos/facultad-exactas-unrc.png"},
 {nombre:"Centro Educativo José María Paz, Alcira Gigena",src:"imagenes/logos/escuela-jose-maria-paz.png"}
];
const INFO=[
 {t:"¿Qué es un liquen?",d:"Un liquen es un equipo: un hongo y un alga o una cianobacteria que viven juntos. El alga y la cianobacteria fabrican el alimento con la luz del sol (fotosíntesis) y el hongo forma el cuerpo del liquen. No tienen raíces: toman casi todo lo que necesitan del aire y de la lluvia."},
 {t:"¿Por qué avisan cómo está el aire?",d:"Los líquenes viven muchos años, se encuentran durante todo el año y en muchos lugares distintos. Como toman lo que necesitan del aire, se ven afectados cuando está contaminado. Por eso son <b>bioindicadores</b>: seres vivos que nos avisan cómo está el ambiente."},
 {t:"¿Qué medimos?",d:"<b>Cobertura:</b> qué porcentaje de la corteza está tapado por líquenes. Donde hay más contaminación suele haber menos.<br><b>Biotipos:</b> sus formas de crecer: Crustosos, Foliosos y Fructiculosos.<br><b>Índice de clorofila:</b> la clorofila es el pigmento verde con el que el alga y la cianobacteria hacen su alimento, y la contaminación puede dañarla. Sacamos la clorofila del liquen, medimos cuánta luz de dos colores absorbe y dividimos un valor por el otro: <i>cuanto más bajo el número, más dañada está</i>."},
 {t:"¿Qué nos dicen los biotipos?",d:"Los líquenes fructiculosos (con aspecto de pequeñas barbas o arbolitos) son los más sensibles y viven donde el aire está más limpio. Los foliosos (con forma de hojitas) aguantan un poco más, y los crustosos (como costras pegadas al tronco) son los más resistentes. En las tres zonas encontramos foliosos y crustosos."},
 {t:"Una aclaración",d:"Los líquenes nos orientan sobre el estado del ambiente, pero no reemplazan las mediciones hechas con instrumentos. Nuestras mediciones se hicieron una sola vez en cada zona."}];
/* Bibliografía (se muestra al final de la página, desplegable) */
const BIBLIO=[
 "Arndt, U., Nobel, W. y Schweizer, B. (1987). Bioindikatoren. Möglichkeiten, Grenzen und neue Erkenntnisse. Stuttgart: Eugen Ulmer.",
 "Hawksworth, D. L., Iturriaga, T. y Crespo, A. (2005). Líquenes como bioindicadores inmediatos de contaminación y cambios medio-ambientales en los trópicos. Revista Iberoamericana de Micología, 22, 71-82.",
 "Nimis, P. L., Scheidegger, C. y Wolseley, P. A. (2002). Monitoring with lichens – monitoring lichens: an introduction. En Monitoring with Lichens – Monitoring Lichens (pp. 1-4). Dordrecht: Springer.",
 "Ronen, R. y Galun, M. (1984). Pigment extraction from lichens with dimethyl sulfoxide (DMSO) and estimation of chlorophyll degradation. Environmental and Experimental Botany, 24(3), 239-245.",
 "Yang, J., Oh, S. O. y Hur, J. S. (2023). Lichen as bioindicators: assessing their response to heavy metal pollution in their native ecosystem. Mycobiology, 51(5), 343-353."];
const PIE=`<div class="pie-creditos"><p><strong>Una experiencia de práctica sociocomunitaria</strong></p><p>Materia Ecología Microbiana de la carrera de Microbiología · Universidad Nacional de Río Cuarto · junto a 5.º grado del Centro Educativo José María Paz, Alcira Gigena · 2026.</p><p class="pie-secundario">Zonas y transectas: elaboración propia. Imagen satelital del mapa: Google Satellite (© Google), utilizada con fines educativos. Registros fotográficos: equipo y participantes de la práctica sociocomunitaria. Fotografía de contexto de la Plaza: publicación de la Municipalidad de Alcira Gigena.</p></div>`;
