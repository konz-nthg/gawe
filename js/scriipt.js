const drawMode = document.getElementById('drawMode');
const stopMode = document.getElementById('stopMode');

const btnDraw = document.getElementById('btnDraw');
const btnStop = document.getElementById('btnStop');

btnDraw.addEventListener('click', () => {
  drawMode.classList.add('active');
  stopMode.classList.remove('active');
});

btnStop.addEventListener('click', () => {
  stopMode.classList.add('active');
  drawMode.classList.remove('active');
});