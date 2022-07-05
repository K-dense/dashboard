const sidebar = document.getElementById('sidebar');
const hamburguer = document.getElementById('ham-menu');
const closeBtn = document.getElementById('close-btn');

hamburguer.addEventListener('click', e => {
  e.stopPropagation();
  sidebar.classList.toggle('open');
})

closeBtn.addEventListener('click', e => {
  e.stopPropagation();
  sidebar.classList.toggle('open');
});

sidebar.addEventListener("click", (event) => {
  event.stopPropagation();
});

document.body.addEventListener('click', () => {
  if (sidebar.classList.contains('open')) {
     sidebar.classList.remove('open');
  }
});