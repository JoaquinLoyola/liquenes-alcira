> **Copia preparada para GitHub — V10.6.** Para instrucciones de carga y despliegue, ver [PUBLICACION_GITHUB.md](PUBLICACION_GITHUB.md). Antes de hacer pública la web, confirmar las autorizaciones de las fotos con menores y los derechos de uso de la base satelital.

## Aviso importante — V9 (revisión privada)

La V9 incorpora imágenes de niños y docentes identificables durante la visita al laboratorio. **No publicar en GitHub Pages ni compartir este ZIP públicamente hasta contar con autorizaciones institucionales para la difusión de fotografías de menores.** Para editar la nueva sección, ver `GUIA_GALERIAS_V9.md`.

---

# Líquenes: los detectives del ambiente 🌿

Web interactiva de una práctica sociocomunitaria de **Ecología Microbiana (Universidad Nacional de Río Cuarto)**, realizada junto a **5.º grado del Centro Educativo José María Paz, Alcira Gigena (Córdoba)**. Versión V7 organizada a partir del prototipo V5, con las correcciones textuales de Andrea, los créditos del equipo, el mapa, las fichas, la metodología ilustrada y Liquenito.

## 🖥️ Probarla localmente

Abrí **`index.html`** con un navegador moderno (doble clic). No hay instalación, base de datos ni programas obligatorios.

## 🚀 Publicar en GitHub Pages

1. En GitHub, creá un **repositorio público** (por ejemplo, `liquenes-alcira`).
2. Extraé el ZIP y subí **los archivos y carpetas de su interior** a la raíz del repositorio. No subas solamente el `.zip` ni pongas una carpeta extra alrededor: `index.html` tiene que verse en la raíz.
3. Abrí **Settings → Pages → Build and deployment → Deploy from a branch**.
4. Elegí rama `main`, carpeta `/(root)`, y guardá.
5. Cuando termine el despliegue, la dirección será similar a `https://TU-USUARIO.github.io/liquenes-alcira/`.
6. Probá mapa, selección de zonas, galería de líquenes, botones de metodología, Liquenito y vista desde el teléfono.

> GitHub Pages publica archivos estáticos (no admite por sí solo una base de datos o código del servidor). Para este proyecto actual no hace falta ninguno de los dos. Todos los cambios subidos al repositorio público serán visibles a cualquiera.

## 📁 Qué editar y dónde

| Para cambiar... | Modificar... |
|---|---|
| Título, explicaciones, pie de página y bibliografía | `datos/contenido.js` |
| Textos cortos y detalles de los siete pasos | `js/app.js` (constante `PASOS`) |
| Créditos del equipo y de la escuela | `index.html` (sección `id="equipo"`) |
| Logos de las fichas de créditos | `imagenes/logos/unrc-escudo.png` y `imagenes/logos/escuela-jose-maria-paz.png` |
| Zonas, porcentajes, índice de clorofila y fotografías | `datos/zonas.js` |
| Fichas y fotos de los géneros de líquenes | `datos/liquenes.js` |
| Fotos reales de la plaza | `imagenes/zonas/plaza/` |
| Fotos reales del ex basural | `imagenes/zonas/ex-basural/` |
| Fotos reales de la laguna | `imagenes/zonas/laguna/` |
| Esquemas científicos | `imagenes/metodologia/` |
| Variantes de Liquenito | `imagenes/liquenito/` |
| Diseño y versión móvil | `css/estilos.css` |
| Funciones del mapa y la navegación | `js/app.js` |
| Interacciones de Liquenito | `js/liquenito.js` y `js/presentacion-v5.js` |

Los datos se mantienen en archivos `.js` **separados del código funcional**, para que la web siga abriendo localmente sin servidor. Consultá `datos/LEEME.md` para ejemplos de edición de imágenes.

## 📷 Recomendaciones para fotos

- Para cada zona: **1 foto horizontal del entorno** (fondo) + **2 fotos de líquenes con marco de muestreo** + **1 foto del proceso de muestreo**.
- Idealmente exportar imágenes en WebP de calidad 75–85; ancho orientativo 1200–1600 px para fondos y 900–1200 px para fotos dentro de la ficha. Es una sugerencia, no una limitación técnica.
- Utilizar nombres cortos sin tildes ni espacios: `entorno.webp`, `liquen-1.webp`, `liquen-2.webp`, `muestreo.webp`.
- Antes de subirlas, revisar autorizaciones para imágenes de menores, metadatos GPS/EXIF y derechos de autor de todas las fotografías.
- Cambiar las imágenes actualizando `src` o `fondo` en `datos/zonas.js`, no alterando la geometría QGIS.

## ⚠️ Revisión antes de publicar

- **Revisión científica y pedagógica:** se incorporaron las correcciones textuales recibidas de Andrea; validar cualquier observación adicional del equipo en `datos/contenido.js`, `js/app.js` y `datos/zonas.js`.
- **Créditos del equipo:** ya se añadieron Andrea Nesci, Natalia Girardi, Aluminé Fessia y Joaquín Loyola, con sus funciones, además de los estudiantes universitarios, el alumnado de 5.º grado y docentes del colegio. Confirmar la redacción institucional final antes de publicar.
- **Privacidad de menores:** ninguna fotografía que identifique estudiantes sin consentimientos/autorizaciones apropiados y visto bueno de la escuela.
- **Mapa satelital:** la versión actual conserva una imagen de Google Satellite procedente del prototipo, con una atribución en el pie. **Esa atribución no implica automáticamente permiso de redistribución de la imagen en un sitio público**. Confirmar expresamente las condiciones de licencia o sustituir por una base cartográfica cuya reutilización esté permitida (con la atribución correspondiente) antes de lanzar públicamente la web.
- **Fotografías de líquenes y recursos externos:** comprobar origen, licencias, créditos y autorización para uso en web; educación no equivale automáticamente a permiso de publicación.
- **Accesibilidad:** comprobar el funcionamiento por teclado y legibilidad en celulares.
- **Datos:** no publicar información personal, accesos, contraseñas, archivos internos ni información de terceros no autorizada.

## 🔁 Migración futura a servidor UNRC

Copiar el contenido de este repositorio a la carpeta pública que establezca la universidad. Las rutas de imágenes y archivos son **relativas**, por lo que no dependen de la URL personal de GitHub. La universidad puede definir un dominio o subdominio y un flujo de aprobación de cambios. Guardar historial y copia del repositorio; una migración no necesita una base de datos ni reescribir el mapa.

## Estructura

```text
index.html
css/estilos.css
js/app.js, liquenito.js, presentacion-v5.js
datos/contenido.js, zonas.js, liquenes.js
imagenes/logos/, mapa/, metodologia/, liquenito/, liquenes/, zonas/
documentos/
README.md
```

**Estado:** V7 con correcciones de Andrea, créditos institucionales con escudos y espacio de fotografías verticales, fotos reales de zonas aún pendientes y revisión de derechos de uso previa a la publicación. Ningún sitio se publicó desde este paquete. No se publicó ningún sitio ni se modificó el repositorio de GitHub del usuario.

## Guía concreta para cargar fotografías

Consultar **`GUIA_FOTOGRAFIAS.md`**, con nombres, dimensiones, ejemplo de modificación de `datos/zonas.js` y recomendaciones de composición y privacidad.


## Actualización V8 — Fotografías de campo

Las primeras fotografías ya están incorporadas; ver `GUIA_FOTOGRAFIAS.md` y `CAMBIOS_V8.md`. Hay cinco fotografías de las fichas pendientes. La foto destacada de la plaza tiene su propia sección. **No publicar las fotografías con personas identificables hasta contar con las autorizaciones de difusión**.

## Corrección V10.1

La segunda imagen agregada para el Ex basural en V10 correspondía en realidad a la **Plaza**. En V10.1 quedó en `imagenes/zonas/plaza/liquen-2.webp`. Sigue pendiente el segundo registro con plantilla del Ex basural y las imágenes de entorno de Plaza y Ex basural.
