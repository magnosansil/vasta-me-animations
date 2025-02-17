const path = document.getElementById('trailPath');
const circle = document.getElementById('movingCircle');
const pathLength = path.getTotalLength();

function animateCircle() {
  const animationDuration = 10000;
  const start = performance.now();

  function step(timestamp) {
    const elapsed = timestamp - start;
    if (elapsed < animationDuration) {
      const progress = elapsed / animationDuration;

      const point = path.getPointAtLength(progress * pathLength);
      circle.setAttribute('cx', point.x);
      circle.setAttribute('cy', point.y);

      requestAnimationFrame(step); 
    } else {

      const point = path.getPointAtLength(pathLength);
      circle.setAttribute('cx', point.x);
      circle.setAttribute('cy', point.y);
    }
  }

  requestAnimationFrame(step);
}

animateCircle();
