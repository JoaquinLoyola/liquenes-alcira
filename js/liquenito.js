
(function(){
 const ART={"explorador": "imagenes/liquenito/explorador.png", "investigador": "imagenes/liquenito/investigador.png", "idea": "imagenes/liquenito/idea.png", "computadora": "imagenes/liquenito/computadora.png", "microscopio": "imagenes/liquenito/microscopio.png", "anotando": "imagenes/liquenito/anotando.png", "celebrando": "imagenes/liquenito/celebrando.png", "guia": "imagenes/liquenito/guia.png", "principal": "imagenes/liquenito/principal.png"};
 function img(pose,alt){let i=document.createElement('img');i.className='lq-photo';i.src=ART[pose]||ART.principal;i.alt=alt||'Liquenito, nuestro guía científico';return i}
 function replace(sel,pose){const el=document.querySelector(sel);if(el)el.replaceChildren(img(pose))}
 replace('#heroL','explorador');replace('#cl','guia');replace('#who','principal');
 const mini=document.querySelector('.lq-mini');if(mini)mini.replaceChildren(img('investigador'));
 const poses=['explorador','explorador','anotando','computadora','microscopio','idea','celebrando'];
 const old=window.irPaso;
 if(typeof old==='function')window.irPaso=function(i,hablar){old(i,hablar);const m=document.querySelector('.lq-mini');if(m)m.replaceChildren(img(poses[(i+7)%7]));};
 const stage=document.querySelector('#lq .who');if(stage){stage.addEventListener('click',()=>{stage.replaceChildren(img('celebrando'));setTimeout(()=>stage.replaceChildren(img('principal')),1300)})}
})();
