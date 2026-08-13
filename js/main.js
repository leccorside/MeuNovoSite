const body = document.body;
const menuButton = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const header = document.querySelector('.site-header');

menuButton.addEventListener('click', () => {
  const open = body.classList.toggle('menu-open');
  menuButton.setAttribute('aria-expanded', open);
  menuButton.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  mobileMenu.setAttribute('aria-hidden', !open);
});
mobileMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  body.classList.remove('menu-open'); menuButton.setAttribute('aria-expanded', 'false'); mobileMenu.setAttribute('aria-hidden', 'true');
}));

window.addEventListener('scroll', () => header.classList.toggle('scrolled', scrollY > 40), {passive: true});

document.querySelectorAll('a[href^="#"]').forEach(link => link.addEventListener('click', event => {
  const target = document.querySelector(link.getAttribute('href'));
  if (target) { event.preventDefault(); target.scrollIntoView({behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'}); }
}));

const lightbox = document.querySelector('.lightbox');
const lightboxImage = lightbox.querySelector('img');
const lightboxCaption = lightbox.querySelector('figcaption');
const lightboxLink = lightbox.querySelector('.lightbox-link');
let currentGallery = []; let currentImage = 0;

function showLightbox(images, index, title, links = []) {
  currentGallery = images; currentImage = index;
  lightboxImage.src = currentGallery[currentImage];
  lightboxImage.alt = `${title} — imagem ${currentImage + 1} de ${currentGallery.length}`;
  lightboxCaption.textContent = `${title} · ${String(currentImage + 1).padStart(2, '0')} / ${String(currentGallery.length).padStart(2, '0')}`;
  const projectUrl = links[currentImage];
  lightboxLink.hidden = !projectUrl;
  if (projectUrl) {
    lightboxLink.href = projectUrl;
    lightboxLink.setAttribute('aria-label', `Visitar ${title} em uma nova aba`);
  }
  if (!lightbox.open) lightbox.showModal();
}
function moveLightbox(step) {
  currentImage = (currentImage + step + currentGallery.length) % currentGallery.length;
  const title = lightboxCaption.textContent.split(' · ')[0];
  const project = window.portfolioProjects.find(item => item.name === title);
  showLightbox(currentGallery, currentImage, title, project?.links);
}
document.addEventListener('click', event => {
  const projectTrigger = event.target.closest('[data-project][data-image]');
  if (projectTrigger) { const project = window.portfolioProjects[projectTrigger.dataset.project]; showLightbox(project.images, Number(projectTrigger.dataset.image), project.name, project.links); }
});
lightbox.querySelector('.lightbox-close').addEventListener('click', () => lightbox.close());
lightbox.querySelector('.lightbox-prev').addEventListener('click', () => moveLightbox(-1));
lightbox.querySelector('.lightbox-next').addEventListener('click', () => moveLightbox(1));
lightbox.addEventListener('click', event => { if (event.target === lightbox) lightbox.close(); });
document.addEventListener('keydown', event => {
  if (!lightbox.open) return;
  if (event.key === 'ArrowLeft') moveLightbox(-1);
  if (event.key === 'ArrowRight') moveLightbox(1);
});

if (matchMedia('(pointer:fine)').matches) {
  const cursor = document.querySelector('.cursor');
  let mouseX = -100, mouseY = -100, cursorX = -100, cursorY = -100;
  addEventListener('mousemove', e => { mouseX = e.clientX; mouseY = e.clientY; });
  const renderCursor = () => { cursorX += (mouseX - cursorX) * .16; cursorY += (mouseY - cursorY) * .16; cursor.style.transform = `translate3d(${cursorX}px,${cursorY}px,0)`; requestAnimationFrame(renderCursor); }; renderCursor();
  document.querySelectorAll('a,button,[data-cursor]').forEach(el => {
    el.addEventListener('mouseenter', () => { cursor.classList.add('active'); cursor.classList.toggle('view', el.dataset.cursor === 'VIEW'); });
    el.addEventListener('mouseleave', () => cursor.classList.remove('active', 'view'));
  });
  document.querySelectorAll('.magnetic').forEach(el => el.addEventListener('mousemove', e => {
    const rect = el.getBoundingClientRect(); el.style.transform = `translate(${(e.clientX - rect.left - rect.width / 2) * .12}px, ${(e.clientY - rect.top - rect.height / 2) * .12}px)`;
  }));
  document.querySelectorAll('.magnetic').forEach(el => el.addEventListener('mouseleave', () => el.style.transform = ''));
}

console.log('%c👋 Hey developer.\nThanks for checking the source.\nBuilt with HTML, CSS & JavaScript.', 'color:#ff4b16;font:16px monospace');
