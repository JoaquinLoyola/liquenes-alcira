# ¿Dónde se editan los datos?

- **`contenido.js`**: título, bajada, textos educativos (`INFO`), bibliografía, logos y créditos (`PIE`).
- **`zonas.js`**: información y resultados de las tres zonas (`ZONAS`), enlaces a sus fotos, geometrías del mapa y referencia a su imagen base (`MAPA`).
- **`liquenes.js`**: fichas de géneros, filtros y fotografías, referencias (`LIQUENES`).

Los datos son objetos JavaScript con estructura equivalente a JSON. Se eligió este formato para **conservar la posibilidad de abrir `index.html` haciendo doble clic**, incluso sin un servidor HTTP; para datos en archivos `.json` puros habría que cargar con `fetch` y usar un servidor durante el desarrollo. Si más adelante se construye un portal con una API o bases de datos, se pueden exportar estos arreglos fácilmente a JSON.

## Agregar las fotografías de una zona

1. Colocar las fotos en `imagenes/zonas/plaza/`, `ex-basural/` o `laguna/`.
2. Convertirlas preferentemente a **WebP** o JPEG, y evitar imágenes originales de 10–20 MB.
3. Editar exclusivamente `fondo` y las rutas `src` en el bloque de esa zona en `zonas.js`.

Por ejemplo, en la zona Plaza:

```js
fondo:"imagenes/zonas/plaza/entorno.webp",
fotos:[
  {src:"imagenes/zonas/plaza/liquen-1.webp", clase:"liquen", pie:"Liquen con plantilla (1)"},
  {src:"imagenes/zonas/plaza/liquen-2.webp", clase:"liquen", pie:"Liquen con plantilla (2)"},
  {src:"imagenes/zonas/plaza/muestreo.webp", clase:"proceso", pie:"Registro del muestreo"}
],
```

**Importante:** las URLs son relativas a `index.html`, no al archivo `.js`. No agregar `/` al principio ni cambiar el valor `id` de cada zona.

## Antes de publicar

- No publicar fotos donde puedan identificarse alumnos menores de edad sin autorización institucional adecuada.
- Verificar derechos de las fotografías y de la imagen satelital.
- Las correcciones de Andrea en textos o resultados deben realizarse sobre el archivo de datos correspondiente, sin modificar el motor del mapa.
