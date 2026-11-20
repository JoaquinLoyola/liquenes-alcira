"""Revisa referencias locales, archivos críticos e imágenes externas. Ejecutar: python verificar_proyecto.py"""
from pathlib import Path
import re, sys
root=Path(__file__).resolve().parent
files=list(root.rglob('*'))
critical=['index.html','css/estilos.css','js/app.js','js/liquenito.js','js/presentacion-v5.js','datos/contenido.js','datos/zonas.js','datos/liquenes.js']
missing=[x for x in critical if not (root/x).is_file()]
for fname in critical:
    if not (root/fname).is_file(): continue
    text=(root/fname).read_text(encoding='utf-8')
    for url in re.findall(r'(?:(?:href|src)=["\']|src:["\']|fondo:["\'])(imagenes/[^"\']+)',text):
        if not (root/url).exists(): missing.append(url)
for data in root.rglob('*.js'):
    s=data.read_text(encoding='utf-8')
    for rel in re.findall(r'["\'](imagenes/[^"\']+)["\']',s):
        if not (root/rel).is_file():missing.append(rel)
print('Archivos:', len([p for p in files if p.is_file()]))
print('Tamaño total:', round(sum(p.stat().st_size for p in files if p.is_file())/1024/1024,2),'MB')
if missing:
    print('FALTAN referencias:',sorted(set(missing)));sys.exit(1)
print('Todas las rutas locales encontradas existen.')
