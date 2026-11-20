# Guía para subir «Líquenes: los detectives del ambiente» a GitHub

## Estado de esta copia

- Base utilizada: **V10.6**, con el mapa y las tres zonas funcionando en las pruebas previas.
- Estructura apta para GitHub Pages: `index.html`, `css/`, `js/`, `datos/`, `imagenes/` y `.nojekyll` en la raíz.
- No contiene base de datos ni procesos de compilación.
- Se agrega `.github/workflows/verificar-sitio.yml` para comprobar automáticamente rutas y sintaxis al subir cambios a `main`.
- La web y sus archivos gráficos no se han publicado desde este paquete.

## Antes de publicar (imprescindible)

1. **Fotografías de menores:** confirmar que la escuela y los responsables autorizaron específicamente la **difusión pública en internet** de las imágenes de los chicos, no solamente su toma o uso interno. En caso de duda, no publicar esas imágenes.
2. **Base satelital:** `imagenes/mapa/mapa-satelital.jpg` se atribuye a Google Satellite. Antes de redistribuirla públicamente, comprobar las condiciones de uso o sustituirla por cartografía con licencia apta. Un crédito o uso educativo no garantizan el permiso.
3. **Foto de contexto de Plaza:** verificar que la Municipalidad de Alcira Gigena permite reproducirla y, de ser posible, obtener el original.
4. Revisar otros créditos y autoría de las fotografías/ilustraciones.
5. Se actualizó el pie para mencionar la procedencia de la fotografía de Plaza y retirar el aviso de registros pendientes.

## A. Primera subida (recomendación: repositorio privado hasta resolver permisos)

1. Iniciá sesión en github.com. Elegí **New repository**.
2. Nombre sugerido: `liquenes-alcira`. Elegí **Private** mientras no estén resueltos los permisos de difusión.
3. Crear sin inicializar con README (el proyecto ya tiene uno).
4. En el repositorio, usá **Add file → Upload files**.
5. **Descomprimí el ZIP y arrastrá su contenido**, no el ZIP como único archivo ni una carpeta que deje `index.html` dentro de una subcarpeta. Verificá que `index.html` aparezca junto a `README.md` en la raíz.
6. Hacé el commit, por ejemplo: «Primera versión de Líquenes de Alcira Gigena».
7. En la pestaña **Actions** comprobá que `Verificar sitio` termine con una marca verde. Si falla, abrí el registro del error para corregirlo.

**Atención:** un repositorio privado evita exponer el código en GitHub, pero **GitHub Pages publica el sitio en internet** incluso si el repositorio es privado y tu plan permite desplegarlo. No habilites Pages con fotos de menores sin las autorizaciones correspondientes.

## B. Activar GitHub Pages (una vez confirmadas las autorizaciones)

1. Confirmá que el repositorio y las imágenes se puedan hacer públicos. Con GitHub Free, normalmente tendrás que usar un repositorio **Public** para GitHub Pages.
2. Abrí **Settings → Pages**.
3. En **Build and deployment**, elegí **Deploy from a branch**.
4. Elegí rama **main**, carpeta **/(root)** y guardá.
5. La URL debería tener este patrón: `https://TU_USUARIO.github.io/liquenes-alcira/` (reemplazando TU_USUARIO).
6. Probá en una ventana privada y en un teléfono: mapa, Plaza, Ex basural, Laguna, tarjetas, galería de lupa, visita a la UNRC, Liquenito y créditos.
7. Para actualizarla, modificá los archivos en el repositorio y hacé un nuevo commit: Pages volverá a publicarlos.

**Importante:** las rutas actuales (`imagenes/...`, `css/...`, `js/...`) son relativas y sirven para un repositorio de proyecto cuyo sitio está en `/liquenes-alcira/`. No las cambies por rutas que empiecen con `/`.

## C. Si preferís cargar desde tu PC con Git

Desde una terminal ubicada dentro de la carpeta del proyecto, y después de crear el repositorio remoto vacío:

```bash
git init
git branch -M main
git add .
git commit -m "Primera version de Liquenes de Alcira Gigena"
git remote add origin https://github.com/TU_USUARIO/liquenes-alcira.git
git push -u origin main
```

Reemplazá `TU_USUARIO` por tu usuario. Git solicitará autenticación a través de sus mecanismos actuales; no coloques contraseñas ni tokens en archivos de la web.

## D. Pruebas adicionales

En la carpeta del proyecto podés ejecutar:

```bash
python verificar_proyecto.py
node --check datos/zonas.js
node --check js/app.js
```

Si no tenés Python o Node.js, no son requisitos para visitar la página; solo herramientas de comprobación.

## E. Siguiente etapa

Cuando el sitio esté publicado, puede crearse un QR de acceso. Si más adelante se muda al servidor de la UNRC, para que el QR continúe funcionando conviene mantener una dirección estable o una redirección desde su URL original.
