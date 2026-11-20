# Guía práctica para incorporar nuevas fotografías (V8)

## Estructura actual

```text
imagenes/zonas/
  plaza/
    liquen-1.webp         # instalado
    muestreo.webp         # instalado
    destacada.webp        # imagen destacada independiente
    entorno.webp          # PENDIENTE
    liquen-2.webp         # PENDIENTE
  ex-basural/
    liquen-1.webp         # instalado
    muestreo.webp         # instalado
    entorno.webp          # PENDIENTE
    liquen-2.webp         # PENDIENTE
  laguna/
    entorno.webp          # instalado
    liquen-1.webp         # instalado
    muestreo.webp         # instalado
    liquen-2.webp         # PENDIENTE
```

## Cómo agregar una fotografía faltante manualmente

1. Prepará la imagen (mantené una copia original sin editar). Guardala como WebP con calidad aproximada de 80–85. No cambies ni exageres colores si sirven para reconocer un talo. Eliminá metadatos EXIF/GPS al exportarla.
2. Poné el archivo en `imagenes/zonas/<zona>/` con su nombre definitivo, por ejemplo `imagenes/zonas/laguna/liquen-2.webp`. No uses espacios, tildes ni mayúsculas en los nombres.
3. Abrí `datos/zonas.js` con un editor como VS Code. En la constante `ZONAS`, buscá la zona por su `id`: `plaza`, `basural` o `laguna` (la carpeta del basural se llama `ex-basural`).
4. Si agregaste `liquen-2.webp`, modificá solamente el objeto de la segunda foto, cambiando `src:""` por `src:"imagenes/zonas/laguna/liquen-2.webp"` y adecuá el `pie`.
5. Si agregaste un entorno, modificá `fondo:""` por `fondo:"imagenes/zonas/plaza/entorno.webp"`, usando la zona correcta.
6. Guardá, abrí `index.html`, elegí la zona en el mapa y comprobá que no hay imágenes rotas. Si ya está publicada, subí los cambios a GitHub y comprobá el sitio actualizado.

**Muy importante:** no cambies ni borres los campos `id`, `cobertura`, `clorofila`, `poligono`, `transectas`, porque corresponden a datos y geometrias del proyecto.

## Recomendaciones de formato

- `entorno.webp`: horizontal 16:9, 3:2, aproximadamente 1400–1600 píxeles de ancho.
- `liquen-1.webp` / `liquen-2.webp`: vertical 3:4 si se ve la plantilla. Las fotos se muestran sin recorte automático.
- `muestreo.webp`: vertical 3:4 o 4:5, se muestra completa dentro de su contenedor.
- `destacada.webp`: foto de observación de la plaza; se usa en la sección independiente «Un árbol que nos llamó la atención» y se puede abrir completa.

## Archivos del ZIP editado original que se incorporaron

| Archivo original | Nuevo archivo |
| --- | --- |
| `Muestreo plaza.jpeg` | `imagenes/zonas/plaza/muestreo.webp` |
| `Plaza arbol 1.jpg` | `imagenes/zonas/plaza/liquen-1.webp` |
| `Liquen plaza (arbol mas lleno).jpg` | `imagenes/zonas/plaza/destacada.webp` |
| `Muestreo ex basural.jpg` | `imagenes/zonas/ex-basural/muestreo.webp` |
| `Arbol 1 Ex basural.jpg` | `imagenes/zonas/ex-basural/liquen-1.webp` |
| `muestreo laguna.jpg` | `imagenes/zonas/laguna/muestreo.webp` |
| `Laguna arbol 1 .jpg` | `imagenes/zonas/laguna/liquen-1.webp` |
| `Laguna, contexto.jpg` | `imagenes/zonas/laguna/entorno.webp` |

## Sobre fotografías de estudiantes

Este paquete contiene fotos de una actividad con personas identificables. **Antes de compartir el repositorio público o publicar el sitio, confirmar el consentimiento y las autorizaciones institucionales correspondientes** (en particular si aparecen niñas, niños o adolescentes). Para mostrar el sitio mientras se tramitan, usar una copia privada sin imágenes identificables o reemplazarlas por fotografías que no permitan identificar a personas.

Para una futura galería de la visita al laboratorio, conviene crear una sección aparte con 3–6 fotos y epígrafes de la experiencia, diferenciada de los registros científicos de cada zona. Todavía no está implementada.
