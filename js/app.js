
/* ======================================================================
   CÓMO EDITAR ESTA PÁGINA  (todo lo que cambia está en este bloque)
   • Textos, créditos y bibliografía: datos/contenido.js.
   • Logos: datos/contenido.js (LOGOS).
   • Zonas y mapa: datos/zonas.js. Fotos en imagenes/zonas/<zona>/.
   • Paso a paso: los textos están en PASOS y las ilustraciones en imagenes/metodologia/.
   • Las líneas "poligono" y "transectas" vienen de QGIS: no hace falta tocarlas.
   ====================================================================== */
/* Los datos del proyecto están separados en datos/contenido.js,
 * datos/liquenes.js y datos/zonas.js, cargados antes de este archivo.
 */
/* ===================== CÓDIGO (no hace falta tocarlo) ===================== */
const $=s=>document.querySelector(s),NS="http://www.w3.org/2000/svg";
const E=(t,a,p)=>{const e=document.createElementNS(NS,t);for(const k in a)e.setAttribute(k,a[k]);p&&p.appendChild(e);return e};
const fmt=n=>n.toLocaleString("es-AR",{minimumFractionDigits:2,maximumFractionDigits:2});
document.title=TITULO;$("#titulo").textContent=TITULO;$("#bajada").textContent=BAJADA;$("#pie").innerHTML=PIE+`<details><summary>Bibliografía de la práctica</summary><ul>${BIBLIO.map(x=>`<li>${x}</li>`).join("")}</ul></details>`;
$("#logos").innerHTML=LOGOS.map(l=>`<div class="logo">${l.src?`<img src="${l.src}" alt="${l.nombre}">`:l.nombre}</div>`).join("");
/* Ilustraciones científicas de cada paso: una misma familia visual, sin texto incrustado. */

/* ---- Liquenito: personaje (poses: lupa, hola, puntero) ---- */
function blob(cx,cy,r,n,b){let d="",P=i=>{const a=i*2*Math.PI/n;return[cx+r*Math.cos(a),cy+r*Math.sin(a)]},C=i=>{const a=(i+.5)*2*Math.PI/n;return[cx+(r+b)*Math.cos(a),cy+(r+b)*Math.sin(a)]};d="M"+P(0).map(x=>x.toFixed(1));for(let i=0;i<n;i++){d+="Q"+C(i).map(x=>x.toFixed(1))+" "+P(i+1).map(x=>x.toFixed(1))}return d+"Z"}
let _u=0;
function LIQ(pose){const id="g"+(++_u),G="#9db86f",arm=(x,y)=>`<ellipse cx="${x}" cy="${y}" rx="11" ry="9" fill="#a9c47b" stroke="#5f7d4c" stroke-width="3"/>`;
 let extra="";
 if(pose==="lupa")extra=`<g><path d="M160 150 L184 112" stroke="#7a5236" stroke-width="9" stroke-linecap="round"/><circle cx="176" cy="68" r="34" fill="#cfe9f7" fill-opacity=".55" stroke="#4a6f95" stroke-width="7"/><path d="M158 56 Q164 44 178 42" stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round"/>${arm(160,152)}</g>`;
 else if(pose==="puntero")extra=`<g><path d="M158 140 L196 60" stroke="#6b4a33" stroke-width="5" stroke-linecap="round"/>${arm(158,142)}</g>`;
 else extra=`<g class="hola">${arm(160,148)}<path d="M160 148 L176 126" stroke="#a9c47b" stroke-width="10" stroke-linecap="round"/><circle cx="178" cy="122" r="9" fill="#a9c47b" stroke="#5f7d4c" stroke-width="3"/></g>`;
 return `<svg class="lq-s" viewBox="0 0 210 240" role="img" aria-label="Liquenito, la mascota científica"><defs><radialGradient id="${id}" cx="40%" cy="35%"><stop offset="0" stop-color="#e6f0c4"/><stop offset="1" stop-color="${G}"/></radialGradient></defs>
 <g class="lq-body"><path d="M52 160 Q100 142 148 160 L158 236 H42Z" fill="#fff" stroke="#3c5a45" stroke-width="3.5"/><path d="M82 152 L100 190 L118 152" fill="#8fae66" stroke="#3c5a45" stroke-width="3"/><path d="M100 190 V236" stroke="#cfd8cc" stroke-width="3"/><rect x="58" y="204" width="22" height="18" rx="3" fill="#f1f5ec" stroke="#b9c7b5"/>
 ${arm(46,178)}${extra}
 <path d="${blob(100,92,64,13,13)}" fill="url(#${id})" stroke="#5f7d4c" stroke-width="4" stroke-linejoin="round"/>
 <g fill="#fff" fill-opacity=".45"><circle cx="58" cy="52" r="6"/><circle cx="142" cy="46" r="5"/><circle cx="46" cy="104" r="4"/><circle cx="150" cy="120" r="5"/></g>
 <g fill="#fff" stroke="#1d2a22" stroke-width="5"><circle cx="72" cy="92" r="23"/><circle cx="128" cy="92" r="23"/></g><path d="M95 90 H105" stroke="#1d2a22" stroke-width="5"/>
 <g class="pup"><circle cx="74" cy="94" r="11" fill="#1d2a22"/><circle cx="130" cy="94" r="11" fill="#1d2a22"/><circle cx="78" cy="89" r="4" fill="#fff"/><circle cx="134" cy="89" r="4" fill="#fff"/></g>
 <path d="M72 128 Q100 156 128 128Z" fill="#8b2f2f" stroke="#1d2a22" stroke-width="3.5" stroke-linejoin="round"/><path d="M86 140 Q100 132 114 140 Q100 150 86 140Z" fill="#ec8a8a"/>
 <circle cx="52" cy="122" r="7" fill="#f2a7a0" fill-opacity=".6"/><circle cx="148" cy="122" r="7" fill="#f2a7a0" fill-opacity=".6"/></g></svg>`}
/* ---- Paso a paso: [título, texto corto, detalle, ilustración] ---- */
const R=(x,y,r,c="#b7cf8a")=>`<path d="${blob(x,y,r,9,r*.28)}" fill="${c}" stroke="#5f7d4c" stroke-width="2"/><circle cx="${x}" cy="${y}" r="${r*.3}" fill="#e3edc3"/>`;
const S=(b,l)=>`<svg class="sc" viewBox="0 0 160 150" role="img" aria-label="${l}">${b}</svg>`;
/* V5: ilustraciones científicas transparentes, conservadas dentro del HTML. */
const METODO_ARTE=["imagenes/metodologia/01-zonas.webp", "imagenes/metodologia/02-arboles.webp", "imagenes/metodologia/03-muestreo.webp", "imagenes/metodologia/04-imagej.webp", "imagenes/metodologia/05-microscopia.webp", "imagenes/metodologia/06-clorofila.webp", "imagenes/metodologia/07-resultados.webp"];
const METODO_ALT=["Mapa ilustrado de tres zonas de estudio marcadas con pines", "Árbol vivo de corteza rugosa con líquenes y un detalle ampliado", "Plantilla cuadrada sobre un tronco con líquenes y registro fotográfico", "Computadora que analiza la cobertura de líquenes sobre una fotografía", "Microscopio y ampliación de estructuras internas del liquen", "Extracto de clorofila en tubo y curva ilustrativa de absorbancia", "Planilla con gráficos para comparar e interpretar los resultados"];
const PASOS=[
["Elegimos las zonas","Recorrimos Alcira Gigena y marcamos puntos con probabilidad de tener distintos niveles de contaminación.","Junto con los chicos de 5.º grado recorrimos el pueblo y marcamos tres zonas con distintas condiciones para comparar entre sí.",
 S(`<path d="M12 40 L52 28 L96 42 L148 30 V112 L100 126 L54 112 L12 124Z" fill="#dfe8c9" stroke="#8aa077" stroke-width="3" stroke-linejoin="round"/><path d="M52 28 V112 M96 42 V126" stroke="#b9c9a5" stroke-width="2"/><path d="M20 100 Q60 70 140 64" stroke="#f1d58a" stroke-width="5" fill="none"/><path d="M104 96 Q130 86 142 104 Q120 118 104 96Z" fill="#9fc9e0"/><g class="pop" fill="#d9483b" stroke="#7d1f18" stroke-width="2"><path d="M40 72 q-12-18 0-26 q12 8 0 26z"/><path d="M84 94 q-12-18 0-26 q12 8 0 26z"/><path d="M122 56 q-12-18 0-26 q12 8 0 26z"/></g>`,"Mapa con tres puntos marcados")],
["Seleccionamos árboles","Elegimos árboles vivos, de corteza rugosa y con líquenes a la vista.","Los árboles que alojan líquenes se llaman forófitos. Buscamos los de corteza rugosa, vivos y con líquenes visibles.",
 S(`<rect x="66" y="82" width="14" height="52" rx="4" fill="#8a6446"/><g fill="#6c9a4f" stroke="#43703a" stroke-width="2"><circle cx="48" cy="62" r="26"/><circle cx="86" cy="52" r="30"/><circle cx="68" cy="34" r="24"/></g><ellipse cx="72" cy="138" rx="46" ry="6" fill="#9eb49a" opacity=".4"/><g class="pop"><circle cx="112" cy="96" r="32" fill="#f4f1e2" stroke="#3c5a45" stroke-width="4"/>${R(112,96,19)}</g>`,"Árbol con un liquen ampliado")],
["Recolectamos muestras","Usamos una plantilla sobre el tronco para fotografiar y tomar la muestra.","Apoyamos en el tronco, a 1 metro del suelo, un cuadrado de medidas conocidas (5 × 5 o 10 × 10 cm), fotografiamos lo que había adentro y guardamos pedacitos en bolsas de papel rotuladas.",
 S(`<rect x="8" y="8" width="144" height="134" rx="8" fill="#8a6446"/><g stroke="#5e4029" stroke-width="3" stroke-linecap="round"><path d="M30 8 V142 M62 8 L58 142 M96 8 L100 142 M128 8 V142"/></g>${R(60,60,16,"#a9c87f")}<rect x="30" y="34" width="62" height="56" rx="4" fill="none" stroke="#d6dad6" stroke-width="8"/><rect x="30" y="34" width="62" height="56" rx="4" fill="none" stroke="#737b78" stroke-width="2"/><g class="pop"><path d="M150 130 L116 118 Q108 104 118 94 L134 88 L150 94Z" fill="#4a9bd6" stroke="#2a6192" stroke-width="3"/></g>`,"Plantilla cuadrada sobre un tronco, con guante azul")],
["Procesamos las imágenes","Analizamos las fotos con el programa ImageJ para medir la cobertura (porción del tronco ocupada por líquenes).","En la computadora, con ImageJ, calculamos qué parte de cada foto estaba cubierta por líquenes: ese es el porcentaje de cobertura.",
 S(`<rect x="22" y="22" width="106" height="74" rx="8" fill="#e8ecee" stroke="#4d5a5f" stroke-width="4"/><rect x="28" y="28" width="94" height="62" fill="#8a6f55"/><path d="${blob(72,60,20,8,7)}" fill="#a9c87f" stroke="#f2c522" stroke-width="3.5"/><path d="M8 104 H142 L132 116 H18Z" fill="#c4ccd0" stroke="#4d5a5f" stroke-width="3" stroke-linejoin="round"/><g class="pop"><rect x="92" y="62" width="56" height="52" rx="9" fill="#fff" stroke="#c7ced0" stroke-width="2"/><path d="M110 98 V84 M118 98 V76 M126 98 V90" stroke="#f0a41a" stroke-width="5" stroke-linecap="round"/><text x="120" y="110" text-anchor="middle" font-family="Nunito" font-size="10" font-weight="900" fill="#333">ImageJ</text></g>`,"Computadora con el programa ImageJ")],
["Observamos al microscopio","Estudiamos las muestras a nivel microscópico.","Los chicos de 5.º vinieron a la universidad y miraron con lupa y microscopio los líquenes que ellos mismos muestrearon: el hongo, el alga y las estructuras con las que se reproducen.",
 S(`<ellipse cx="62" cy="136" rx="46" ry="8" fill="#cfd6d6"/><rect x="26" y="122" width="72" height="12" rx="6" fill="#eef1f1" stroke="#5b6769" stroke-width="3"/><path d="M52 122 Q36 90 62 56" stroke="#5b6769" stroke-width="12" fill="none" stroke-linecap="round"/><path d="M52 122 Q36 90 62 56" stroke="#f4f6f6" stroke-width="7" fill="none" stroke-linecap="round"/><rect x="48" y="26" width="22" height="44" rx="5" transform="rotate(25 59 48)" fill="#f4f6f6" stroke="#5b6769" stroke-width="3"/><rect x="30" y="106" width="40" height="7" rx="3" fill="#33403f"/><g class="pop"><circle cx="112" cy="94" r="34" fill="#eef2dc" stroke="#3c5a45" stroke-width="4"/><g fill="#7cae5e" stroke="#4a7f3a" stroke-width="2"><circle cx="100" cy="84" r="8"/><circle cx="122" cy="88" r="8"/><circle cx="108" cy="106" r="8"/><circle cx="126" cy="108" r="6"/></g></g>`,"Microscopio con células de alga ampliadas")],
["Calculamos el índice de clorofila","Medimos el contenido de clorofila de los líquenes.","Extrajimos la clorofila con un líquido especial y medimos cuánta luz absorbe a distintas longitudes de onda para saber si estaba dañada por la contaminación.",
 S(`<g class="pop"><rect x="16" y="26" width="28" height="104" rx="12" fill="#fff" fill-opacity=".7" stroke="#6b8a78" stroke-width="4"/><path d="M20 58 H40 V116 Q40 126 30 126 Q20 126 20 116Z" fill="#5fae45"/><rect x="12" y="20" width="36" height="9" rx="4" fill="#d9483b"/></g><path d="M66 20 V118 H148" stroke="#3c5a45" stroke-width="2.5" fill="none"/><path d="M72 108 Q92 100 100 56 Q108 28 118 56 Q126 92 144 100" stroke="#3f8a4a" stroke-width="3.5" fill="none" stroke-linecap="round"/><circle cx="108" cy="36" r="4" fill="#3f8a4a"/><text x="112" y="136" text-anchor="middle" font-family="Nunito" font-size="12" font-weight="900" fill="#3c5a45">λ (nm)</text>`,"Tubo con extracto verde y curva de absorción")],
["Analizamos los resultados","Interpretamos los datos y sacamos conclusiones.","Comparamos cobertura, biotipos e índice de clorofila entre las tres zonas. Son datos de una sola medición por zona: nos orientan, pero no reemplazan las mediciones con instrumentos.",
 S(`<rect x="30" y="16" width="100" height="126" rx="9" fill="#d9b88a" stroke="#6b5136" stroke-width="4"/><rect x="38" y="26" width="84" height="108" rx="4" fill="#fff"/><rect x="62" y="8" width="36" height="16" rx="6" fill="#4a5256"/><g class="pop" stroke="#4a9a55" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M46 44 l5 5 l9-10"/><path d="M46 64 l5 5 l9-10"/></g><path d="M68 44 H114 M68 64 H114" stroke="#9aa5a0" stroke-width="3"/><g fill="#6aa65c"><rect x="48" y="112" width="12" height="14"/><rect x="66" y="102" width="12" height="24"/><rect x="84" y="92" width="12" height="34"/><rect x="102" y="82" width="12" height="44"/></g>`,"Portapapeles con tildes y gráfico de barras")]];
const FASES=[["📍","En el pueblo",[0,1,2]],["💻","En la computadora",[3]],["🔬","En el laboratorio",[4,5,6]]];
$("#ps").innerHTML=FASES.map(f=>`<section class="fase7"><div class="pill"><span aria-hidden="true">${f[0]}</span>${f[1]}</div><ol class="cards">${f[2].map(i=>{const p=PASOS[i];return `<li class="p7" data-i="${i}" tabindex="0"><span class="num">${i+1}</span><h4>${p[0]}</h4><p>${p[1]}</p><div class="art"><img class="metodo-img" src="${METODO_ARTE[i]}" alt="${METODO_ALT[i]}" loading="eager" decoding="async"></div></li>`}).join("")}</ol></section>`).join("");
$("#pdet").innerHTML=`<div class="lq lq-mini">${LIQ("hola")}</div><div><h3 id="pdt"></h3><p id="pdd"></p></div><div class="nav"><button id="pp" aria-label="Paso anterior">←</button><button id="pn" aria-label="Paso siguiente">→</button></div>`;
let paso=0;
function irPaso(i,hablar){paso=(i+7)%7;const p=PASOS[paso];document.querySelectorAll(".p7").forEach(e=>e.classList.toggle("on",+e.dataset.i===paso));$("#pdt").textContent=(paso+1)+". "+p[0];$("#pdd").textContent=p[2];hablar&&decir(["¡Paso "+(paso+1)+"! "+p[1]])}
document.querySelectorAll(".p7").forEach(e=>{e.onclick=()=>irPaso(+e.dataset.i,1);e.onkeydown=k=>{if(k.key==="Enter"||k.key===" "){k.preventDefault();irPaso(+e.dataset.i,1)}}});
$("#pp").onclick=()=>irPaso(paso-1,1);$("#pn").onclick=()=>irPaso(paso+1,1);irPaso(0);
const rv=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add("v");rv.unobserve(x.target)}}),{threshold:.2});
document.querySelectorAll(".p7").forEach((e,i)=>{e.style.transitionDelay=(i*70)+"ms,0s,0s,0s";rv.observe(e)});
/* ---- Liquenito: compañero que acompaña el recorrido ---- */
$("#heroL").innerHTML=LIQ("lupa");$("#cl").innerHTML=LIQ("puntero");
const lq=$("#lq"),bub=$("#bub"),btxt=$("#btxt");let bt,mudo=false;
function decir(a,ms=7000){if(mudo)return;btxt.textContent=Array.isArray(a)?a[Math.floor(Math.random()*a.length)]:a;bub.classList.add("s");clearTimeout(bt);bt=setTimeout(()=>bub.classList.remove("s"),ms)}
$("#who").innerHTML=LIQ("hola");
$("#bx").onclick=()=>{mudo=true;bub.classList.remove("s")};
const DATOS=["¿Sabías que un liquen es un equipo? Un hongo y un alga viven juntos.","Los líquenes no tienen raíces: toman casi todo del aire y de la lluvia.","Los fructiculosos, con aspecto de barbitas, son los más sensibles al aire contaminado.","La clorofila es el pigmento verde con el que el alga fabrica su alimento.","Hay líquenes que viven muchísimos años: ¡son testigos del ambiente!"];
$("#who").onclick=()=>{mudo=false;const w=$("#who");w.classList.remove("jump");void w.offsetWidth;w.classList.add("jump");decir(DATOS,8000)};
const ESC={hero:"¡Hola! Soy Liquenito. Te acompaño a descubrir cómo está el aire de Alcira Gigena 🔍",mapa:"Tocá una zona del mapa para ver qué encontramos en cada lugar.",pasos:"Así trabajamos: del pueblo a la computadora y al laboratorio. ¡Tocá cada paso!",info:"Los líquenes son bioindicadores: seres vivos que nos avisan cómo está el ambiente.",lic:"Estos son algunos líquenes de Córdoba. ¿Reconocés alguno?",cierre:"¡Entre todos podemos cuidar el aire de Alcira Gigena!"};
const so=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting&&!x.target.dataset.d){x.target.dataset.d=1;decir(ESC[x.target.dataset.lq])}}),{threshold:.35});
document.querySelectorAll("[data-lq]").forEach(s=>so.observe(s));
addEventListener("pointermove",e=>document.querySelectorAll(".pup").forEach(p=>{const r=p.ownerSVGElement.getBoundingClientRect(),dx=e.clientX-(r.left+r.width/2),dy=e.clientY-(r.top+r.height/2),d=Math.hypot(dx,dy)||1,k=Math.min(5,d/40);p.style.transform=`translate(${dx/d*k}px,${dy/d*k}px)`}),{passive:true});
const _ab=abrir;abrir=function(id){_ab(id);const z=ZONAS.find(x=>x.id===id);document.body.classList.toggle("sheet-open",!!z);z&&decir("En "+z.nombre+" los líquenes cubrían el "+fmt(z.cobertura)+" % de la corteza.")};

$("#info").innerHTML=INFO.map(i=>`<div><h3>${i.t}</h3><p>${i.d}</p></div>`).join("");
let filtro="Todos";
const foto=(f,n)=>f.src?`<img src="${f.src}" alt="${n}" loading="lazy">`:`<div class="nop">Foto pendiente</div>`;
function liquenes(){
 $("#lf").innerHTML=["Todos","Crustosos","Foliosos","Fructiculosos"].map(t=>`<button class="chip" data-f="${t}" aria-pressed="${t===filtro}">${t}</button>`).join("");
 $("#lf").querySelectorAll(".chip").forEach(b=>b.onclick=()=>{filtro=b.dataset.f;liquenes()});
 $("#lg").innerHTML=LIQUENES.map((l,i)=>[l,i]).filter(([l])=>filtro==="Todos"||l.tipo===filtro).map(([l,i])=>`<article class="lc"><div id="fw${i}">${foto(l.fotos[0],l.nombre)}</div>
 ${l.fotos.length>1?`<div class="th">${l.fotos.map((f,k)=>`<button class="${k?"":"on"}" data-i="${i}" data-k="${k}" aria-label="Ver foto ${k+1} de ${l.nombre}"><img src="${f.src}" alt=""></button>`).join("")}</div>`:""}
 <div class="t"><h3>${l.nombre}</h3><span class="tags"><span>${l.tipo}</span></span><p>${l.desc}</p><small id="cr${i}">${l.fotos[0].credito||CREDITO_FOTOS}</small></div></article>`).join("");
 $("#lg").querySelectorAll(".th button").forEach(b=>b.onclick=()=>{const i=+b.dataset.i,f=LIQUENES[i].fotos[+b.dataset.k];
  $("#fw"+i).innerHTML=foto(f,LIQUENES[i].nombre);$("#cr"+i).textContent=f.credito||CREDITO_FOTOS;
  b.parentNode.querySelectorAll("button").forEach(x=>x.classList.toggle("on",x===b))});
}
liquenes();
$("#ref").innerHTML="<b>Fuente de las imágenes y descripciones:</b> "+REFERENCIA+" Las descripciones son versiones simplificadas de las del libro.";
const px=c=>[(c[0]-MAPA.oeste)/(MAPA.este-MAPA.oeste)*MAPA.ancho,(MAPA.norte-c[1])/(MAPA.norte-MAPA.sur)*MAPA.alto];
const pts=a=>a.map(c=>px(c).map(n=>n.toFixed(1)).join(",")).join(" ");
const svg=$("#mapa"),stage=$("#stage"),tip=$("#tip"),panel=$("#panel");
svg.setAttribute("viewBox",`0 0 ${MAPA.ancho} ${MAPA.alto}`);
E("image",{href:MAPA.src,width:MAPA.ancho,height:MAPA.alto},svg);
ZONAS.forEach(z=>{
 const g=E("g",{class:"zg",tabindex:0,role:"button","aria-label":"Zona "+z.nombre,"data-z":z.id},svg),p=pts(z.poligono);
 E("polygon",{points:p,class:"zp",fill:z.color,stroke:z.color},g);
 z.transectas.forEach(t=>{E("polyline",{points:pts(t.linea),class:"tc"},g);E("polyline",{points:pts(t.linea),class:"td"},g)});
 E("polygon",{points:p,fill:"transparent",stroke:"transparent","stroke-width":50,"pointer-events":"all"},g);
 const q=z.poligono.map(px),xs=q.map(a=>a[0]),ys=q.map(a=>a[1]);
 const x=Math.min(Math.max((Math.min(...xs)+Math.max(...xs))/2,130),MAPA.ancho-130);
 E("text",{x,y:Math.min(...ys)-26,class:"zl"},g).textContent=z.nombre;
 g.onmousemove=e=>{const r=stage.getBoundingClientRect();tip.textContent=z.nombre;tip.style.left=(e.clientX-r.left)+"px";tip.style.top=(e.clientY-r.top)+"px";tip.style.opacity=1};
 g.onmouseleave=()=>tip.style.opacity=0;
 g.onclick=()=>abrir(z.id);
 g.onkeydown=e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();abrir(z.id)}};
});
$("#chips").innerHTML=ZONAS.map(z=>`<button class="chip" data-z="${z.id}"><i style="background:${z.color}"></i>${z.nombre}</button>`).join("");
$("#chips").querySelectorAll(".chip").forEach(b=>b.onclick=()=>abrir(b.dataset.z));
/* Escala (500 m) según el tamaño en pantalla */
function escala(){const mAlto=(MAPA.norte-MAPA.sur)*111132;$("#eb").style.width=(500*stage.clientWidth*(MAPA.alto/MAPA.ancho)/mAlto)+"px"}
addEventListener("resize",escala);escala();
function barras(k,max,suf){return ZONAS.map(z=>`<button class="row" data-go="${z.id}"><span>${z.nombre}</span><span class="bar"><span style="width:${z[k]/max*100}%;background:${z.color}"></span></span><b>${fmt(z[k])}${suf}</b></button>`).join("")}
function resumen(){return `<h2>Comparemos las zonas</h2><p>Elegí una zona en el mapa para ver sus datos, o tocá una barra.</p>
 <h4>Cobertura de líquenes</h4>${barras("cobertura",100," %")}
 <h4>Índice de clorofila</h4>${barras("clorofila",Math.max(...ZONAS.map(z=>z.clorofila)),"")}`}
function ficha(z){
 const fotos=z.fotos.map(f=>`<figure class="ph ${f.clase==="proceso"?"proceso":"liquen"}">${f.src?`<img src="${f.src}" alt="${f.pie}" loading="lazy" decoding="async">`:`<div class="nop ${f.clase||"liquen"}"><span>${f.clase==="proceso"?"TRABAJO DE CAMPO":"LIQUEN + PLANTILLA"}</span></div>`}<figcaption>${f.pie}</figcaption></figure>`).join("");
 return `<button class="back" data-go="">← Ver todas las zonas</button>
 ${z.fondo?"":`<div class="zona-cover-pendiente"><small>Fotografía del entorno · pendiente</small><strong>Una mirada desde el lugar</strong><span>Imagen panorámica tomada durante el recorrido por esta zona</span></div>`}
 <h2><span class="dot" style="background:${z.color}"></span>${z.nombre}</h2><p>${z.desc}</p>
 <div class="stats"><div class="stat"><span>Cobertura de líquenes</span><strong>${fmt(z.cobertura)} %</strong></div><div class="stat"><span>Índice de clorofila</span><strong>${fmt(z.clorofila)}</strong></div></div>
 <h4>Biotipos encontrados</h4><div class="tags">${z.biotipos.map(b=>`<span>${b}</span>`).join("")}</div>
 <h4>Transectas de muestreo</h4><div class="tags">${z.transectas.map(t=>`<span>${t.n}</span>`).join("")}</div>
 <h4>Registros del trabajo de campo</h4><div class="gal">${fotos}</div>`}
function abrir(id){
 const z=ZONAS.find(x=>x.id===id);tip.style.opacity=0;
 panel.innerHTML=z?ficha(z):resumen();panel.classList.toggle("fondo",!!(z&&z.fondo));panel.style.backgroundImage=z&&z.fondo?`linear-gradient(rgba(10,20,14,.58),rgba(10,20,14,.88)),url("${z.fondo}")`:"";panel.classList.toggle("sheet",!!z);panel.scrollTop=0;
 svg.querySelectorAll(".zg").forEach(g=>g.classList.toggle("on",g.dataset.z===id));
 panel.querySelectorAll("[data-go]").forEach(b=>b.onclick=()=>abrir(b.dataset.go));
}
document.addEventListener("keydown",e=>{if(e.key==="Escape")abrir("")});
abrir("");
