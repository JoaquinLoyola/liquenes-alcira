
(function(){
  const closingImage = document.createElement('img');
  closingImage.src = 'imagenes/liquenito/presentando.webp';
  closingImage.alt = 'Liquenito, el investigador, presentando los resultados con su puntero y una pizarra';
  closingImage.className = 'lq-photo lq-photo-completa';
  const cl = document.getElementById('cl');
  if (cl) cl.replaceChildren(closingImage);
  // Mantener siempre visible la pose al cambiar el detalle de un paso.
  const oldIrPaso = window.irPaso;
  if(typeof oldIrPaso === 'function'){
    window.irPaso = function(i, hablar){
      oldIrPaso(i, hablar);
      document.querySelectorAll('.p7').forEach(card => {
        card.setAttribute('aria-selected', String(Number(card.dataset.i) === ((i % 7 + 7)%7)));
      });
    };
    window.irPaso(0, false);
  }
  // Al llegar al cierre, ocultar el Liquenito flotante: ya está presente en la escena.
  const cierre = document.querySelector('.cierre');
  if(cierre && 'IntersectionObserver' in window){
    const o = new IntersectionObserver(entries => {
      document.body.classList.toggle('liquenito-en-cierre', entries.some(e=>e.isIntersecting));
    }, { threshold: 0.10 });
    o.observe(cierre);
  }
  // La galería de metodología mantiene los textos completos y la navegación con flechas.
})();
