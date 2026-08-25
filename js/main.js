const body = document.body;
const menuButton = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const header = document.querySelector('.site-header');

if (menuButton && mobileMenu) {
  menuButton.addEventListener('click', () => {
    const open = body.classList.toggle('menu-open');
    menuButton.setAttribute('aria-expanded', open);
    menuButton.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    mobileMenu.setAttribute('aria-hidden', !open);
  });
  mobileMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    body.classList.remove('menu-open'); menuButton.setAttribute('aria-expanded', 'false'); mobileMenu.setAttribute('aria-hidden', 'true');
  }));
}

if (header) {
  window.addEventListener('scroll', () => header.classList.toggle('scrolled', scrollY > 40), {passive: true});
}

document.querySelectorAll('a[href^="#"]').forEach(link => link.addEventListener('click', event => {
  const targetId = link.getAttribute('href');
  if (targetId && targetId !== '#') {
    const target = document.querySelector(targetId);
    if (target) {
      event.preventDefault();
      target.scrollIntoView({behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'});
    }
  }
}));

const lightbox = document.querySelector('.lightbox');
const lightboxImage = lightbox ? lightbox.querySelector('img') : null;
const lightboxCaption = lightbox ? lightbox.querySelector('figcaption') : null;
const lightboxLink = lightbox ? lightbox.querySelector('.lightbox-link') : null;
let currentGallery = []; let currentImage = 0;

function showLightbox(images, index, title, links = []) {
  if (!lightbox || !lightboxImage || !lightboxCaption) return;
  currentGallery = images; currentImage = index;
  lightboxImage.src = currentGallery[currentImage];
  lightboxImage.alt = `${title} — imagem ${currentImage + 1} de ${currentGallery.length}`;
  lightboxCaption.textContent = `${title} · ${String(currentImage + 1).padStart(2, '0')} / ${String(currentGallery.length).padStart(2, '0')}`;
  const projectUrl = links[currentImage];
  if (lightboxLink) {
    lightboxLink.hidden = !projectUrl;
    if (projectUrl) {
      lightboxLink.href = projectUrl;
      lightboxLink.setAttribute('aria-label', `Visitar ${title} em uma nova aba`);
    }
  }
  if (!lightbox.open) lightbox.showModal();
}
function moveLightbox(step) {
  if (!lightbox || !currentGallery.length) return;
  currentImage = (currentImage + step + currentGallery.length) % currentGallery.length;
  const title = lightboxCaption ? lightboxCaption.textContent.split(' · ')[0] : '';
  const project = window.portfolioProjects ? window.portfolioProjects.find(item => item.name === title) : null;
  showLightbox(currentGallery, currentImage, title, project?.links);
}
if (lightbox) {
  document.addEventListener('click', event => {
    const projectTrigger = event.target.closest('[data-project][data-image]');
    if (projectTrigger && window.portfolioProjects) {
      const project = window.portfolioProjects[projectTrigger.dataset.project];
      if (project) showLightbox(project.images, Number(projectTrigger.dataset.image), project.name, project.links);
    }
  });
  const closeBtn = lightbox.querySelector('.lightbox-close');
  const prevBtn = lightbox.querySelector('.lightbox-prev');
  const nextBtn = lightbox.querySelector('.lightbox-next');
  if (closeBtn) closeBtn.addEventListener('click', () => lightbox.close());
  if (prevBtn) prevBtn.addEventListener('click', () => moveLightbox(-1));
  if (nextBtn) nextBtn.addEventListener('click', () => moveLightbox(1));
  lightbox.addEventListener('click', event => { if (event.target === lightbox) lightbox.close(); });
  document.addEventListener('keydown', event => {
    if (!lightbox.open) return;
    if (event.key === 'ArrowLeft') moveLightbox(-1);
    if (event.key === 'ArrowRight') moveLightbox(1);
  });
}

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
