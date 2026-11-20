# V9 — Galería de lupa y visita a la UNRC (revisión privada)

Base: **V8**. Se conservaron los datos científicos, geometrías del mapa, resultados, fichas de zonas, metodología, logos y créditos.

## Qué se añadió

- `imagenes/experiencia/lupa/`: 4 fotografías de lupa y una nueva fotografía de la corteza.
- `imagenes/experiencia/visita/`: 6 fotografías de actividades de laboratorio y una fotografía grupal.
- `datos/experiencia.js`: ubicación y pies de foto de ambas galerías.
- `js/galerias-v9.js`: ampliación de imágenes con navegación y soporte de teclado.
- Estilos adaptables a escritorio y celular; imágenes WebP sin metadatos EXIF.

## Cómo cambiar o agregar fotografías

1. Colocá el archivo `.webp` en la carpeta `imagenes/experiencia/lupa/` o `imagenes/experiencia/visita/`. Conservá una copia original de máxima calidad.
2. Abrí `datos/experiencia.js` con VS Code. Buscá `GALERIA_LUPA`, `GALERIA_VISITA` o `FOTO_GRUPAL_VISITA`.
3. Cambiá o añadí un elemento con `{src:"ruta", alt:"descripción para accesibilidad", pie:"texto visible"}`.
4. Guardá y abrí `index.html`. Tocá una fotografía para ampliarla. Probá las flechas y la tecla Esc.

## IMPORTANTE — PRIVACIDAD Y AUTORIZACIONES

Esta copia está destinada a **revisión privada/local**. Incluye fotografías con personas menores de edad reconocibles, tomadas durante la visita al laboratorio y en el trabajo de campo. **No publicar el ZIP ni subir la carpeta completa a un repositorio público de GitHub hasta verificar que existen las autorizaciones de uso de imagen para publicación web abierta**, según lo indicado por la escuela y la UNRC. Evitar incluir apellidos, datos personales o identificaciones individuales de estudiantes. Las versiones WebP se generaron sin datos EXIF de geolocalización.

También está pendiente resolver el permiso de publicación/atribución de la imagen satelital del mapa. La presencia de logos institucionales no equivale por sí sola a aprobación de publicación.

## Archivos originales

No se alteraron las fotografías de origen del ZIP entregado por el equipo; los WebP son copias optimizadas para la web. Los nombres originales pueden consultarse en `CAMBIOS_V9.md`.
