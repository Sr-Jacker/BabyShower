document.addEventListener("DOMContentLoaded", function() {

  const options = ["Kit de aseo ( cortaúñas ,peine etc)", "Bañera", "Pañales etapa 1 y pañitos", "Pañales etapa 2 y pañitos", "Crema antipañalitis y medias", "Shampoo y jabón", "Ropita", "Toallas de baño", "Baberos y mameluco", "Kit de teteros", "Tapete de bebé","Libro para bebés o albun de bebe ", "Pijamas", "Termo para bebé"];

  const ruletaCirculo = document.getElementById('ruleta-circulo');
  const ruletaBoton = document.getElementById('ruleta-boton');
  const resultado = document.getElementById('resultado');

  let rotation = 0;
  let spinning = false;

  ruletaBoton.addEventListener('click', () => {
    if (!spinning) {
      spinning = true;
      rotation += Math.floor(Math.random() * 360) + 720; // Gira entre 2 y 3 vueltas completas

      ruletaCirculo.style.transition = 'none';
      ruletaCirculo.style.transform = `rotate(${rotation}deg)`;

      setTimeout(() => {
        ruletaCirculo.style.transition = 'transform 3s cubic-bezier(0.25, 0.1, 0.25, 1)';
        ruletaCirculo.style.transform = `rotate(${rotation + 360}deg)`; // Agrega una vuelta completa más
        setTimeout(() => {
          const index = Math.floor(rotation / 36) % options.length;
          const selectedOption = options[index];
          resultado.textContent = `${selectedOption}`;
          ruletaBoton.style.display="none";
          spinning = false;
        }, 3000);
      }, 50);
    }
  });
});



