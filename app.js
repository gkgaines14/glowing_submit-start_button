let button = document.getElementById('btn-component');
let glow = document.getElementById('btn-glow');

button.addEventListener('click', () => {
  glow.style.opacity = '1';

  setTimeout(() => {
    glow.style.opacity = '0';
  }, '670');
});
