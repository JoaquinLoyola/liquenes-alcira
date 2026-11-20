/* V9 · Galerías de fotografía, apertura accesible con <dialog>. Sin dependencias externas. */
(function(){
  "use strict";
  const grids = [
   {name:"lupa",dest:"galeria-lupa",photos:GALERIA_LUPA},
   {name:"visita",dest:"galeria-visita",photos:GALERIA_VISITA}
  ];
  const groups={lupa:[...GALERIA_LUPA,{src:"imagenes/experiencia/lupa/corteza-detalle.webp",alt:"Corteza con líquenes a simple vista",pie:"Observación sobre la corteza"}],visita:[FOTO_GRUPAL_VISITA,...GALERIA_VISITA]};
  for(const {name,dest,photos} of grids){
   const root=document.getElementById(dest);if(!root)continue;
   photos.forEach((data,i)=>{
    const figure=document.createElement('figure');figure.className='v9-foto-tarjeta';
    const a=document.createElement('a');a.href=data.src;a.className='v9-lightbox-link';a.dataset.group=name;a.dataset.index=String(name==='visita'?i+1:i);a.setAttribute('aria-label','Ampliar fotografía: '+data.pie);
    const img=document.createElement('img');img.src=data.src;img.alt=data.alt;img.loading='lazy';img.decoding='async';
    a.append(img);const figcap=document.createElement('figcaption');figcap.textContent=data.pie;
    figure.append(a,figcap);root.append(figure);
   });
  }
  const dialog=document.getElementById('v9-foto-dialog');
  if(!dialog || typeof dialog.showModal!=='function')return;
  const full=document.getElementById('v9-foto-ampliada'),caption=document.getElementById('v9-foto-descripcion');
  const prev=document.getElementById('v9-foto-anterior'),next=document.getElementById('v9-foto-siguiente'),close=document.getElementById('v9-foto-cerrar');
  let group='lupa',index=0,returnFocus=null;
  function show(){
   const photos=groups[group];const data=photos[index];
   full.src=data.src;full.alt=data.alt;caption.textContent=(index+1)+' / '+photos.length+' · '+data.pie;
  }
  function move(change){const photos=groups[group];index=(index+change+photos.length)%photos.length;show();}
  document.addEventListener('click',(event)=>{
    const a=event.target.closest('.v9-lightbox-link');if(!a)return;
    event.preventDefault();group=a.dataset.group;index=Number(a.dataset.index)||0;returnFocus=a;show();dialog.showModal();
  });
  prev.addEventListener('click',()=>move(-1));next.addEventListener('click',()=>move(1));
  close.addEventListener('click',()=>dialog.close());
  dialog.addEventListener('click',(event)=>{if(event.target===dialog)dialog.close()});
  dialog.addEventListener('keydown',(event)=>{if(event.key==='ArrowLeft'){event.preventDefault();move(-1)}if(event.key==='ArrowRight'){event.preventDefault();move(1)}});
  dialog.addEventListener('close',()=>{full.removeAttribute('src');if(returnFocus)returnFocus.focus({preventScroll:true})});
})();
