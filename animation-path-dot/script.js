const path = document.getElementById('trailPath');
const circle = document.getElementById('movingCircle');
const pathLength = path.getTotalLength();

function animateCircle() {
  const animationDuration = 10000; // mesma duração que a animação CSS
  const start = performance.now();

  function step(timestamp) {
    const elapsed = timestamp - start;
    
    // Verifica se a animação já foi concluída
    if (elapsed < animationDuration) {
      const progress = elapsed / animationDuration;

      // Calcula o ponto atual ao longo do caminho
      const point = path.getPointAtLength(progress * pathLength);
      circle.setAttribute('cx', point.x);
      circle.setAttribute('cy', point.y);

      requestAnimationFrame(step); // Continua a animação
    } else {
      // Garante que o círculo esteja na última posição ao final da animação
      const point = path.getPointAtLength(pathLength);
      circle.setAttribute('cx', point.x);
      circle.setAttribute('cy', point.y);
    }
  }

  requestAnimationFrame(step);
}

// Inicia a animação
animateCircle();
