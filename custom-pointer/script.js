const interactiveElement = document.querySelector('.interactive-element');
const customPointer = document.querySelector('.custom-pointer');
const customPopup = document.querySelector('.custom-popup');

function updatePointerPosition(event) {
  const { clientX, clientY } = event;

  customPointer.style.left = `${clientX}px`;
  customPointer.style.top = `${clientY}px`;

  customPopup.style.left = `${clientX + 7}px`;
  customPopup.style.top = `${clientY - 2}px`;
}

interactiveElement.addEventListener('mouseenter', () => {
  document.body.style.cursor = 'none';
  customPointer.style.display = 'block';
  customPopup.style.display = 'block';
});

interactiveElement.addEventListener('mouseleave', () => {
  document.body.style.cursor = 'default';
  customPointer.style.display = 'none';
  customPopup.style.display = 'none';
});

interactiveElement.addEventListener('mousemove', updatePointerPosition);
