// Mobile nav
const toggle = document.querySelector('.menu-toggle');
const navList = document.getElementById('nav-list');

toggle?.addEventListener('click', (e) => {
  e.stopPropagation(); // prevent immediate close when clicking button
  const open = navList.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});

// Close nav when clicking outside
document.addEventListener('click', (e) => {
  if (
    navList.classList.contains('open') && 
    !navList.contains(e.target) && 
    !toggle.contains(e.target)
  ) {
    navList.classList.remove('open');
    toggle.setAttribute('aria-expanded', "false");
  }
});


// Lightbox
const lightbox = document.getElementById('lightbox');
const iframe = document.getElementById('lightbox-iframe');

function openLightbox(src){
  iframe.src = src;
  lightbox.classList.add('open');
  lightbox.setAttribute('aria-hidden','false');
}

function closeLightbox(){
  iframe.src = '';
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden','true');
}

document.querySelectorAll('[data-video]').forEach(btn=>{
  btn.addEventListener('click', ()=> openLightbox(btn.dataset.video));
});
lightbox?.addEventListener('click', e=>{
  if (e.target.hasAttribute('data-close')) closeLightbox();
});
document.addEventListener('keydown', e=>{
  if (e.key === 'Escape' && lightbox.classList.contains('open')) closeLightbox();
});

// Carousel
const track = document.querySelector('.carousel-track');
const prev = document.querySelector('.carousel-prev');
const next = document.querySelector('.carousel-next');

function scrollByCard(dir=1){
  if(!track) return;
  const card = track.querySelector('.testimonial');
  if(!card) return;
  const w = card.getBoundingClientRect().width + 16;
  track.scrollBy({ left: w*dir, behavior:'smooth' });
}
prev?.addEventListener('click', ()=> scrollByCard(-1));
next?.addEventListener('click', ()=> scrollByCard(1));

// Year
document.getElementById('year').textContent = new Date().getFullYear();




