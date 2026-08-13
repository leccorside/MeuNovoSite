const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
const preloader = document.querySelector('.preloader');
const progressText = preloader.querySelector('strong');
const progressBar = preloader.querySelector('.loader-line span');

if (reduceMotion) {
  preloader.remove(); document.body.classList.add('loaded');
} else {
  const start = performance.now();
  function loadFrame(now) {
    const progress = Math.min(100, Math.round((now - start) / 7));
    progressText.textContent = `${String(progress).padStart(2, '0')}%`;
    progressBar.style.transform = `scaleX(${progress / 100})`;
    if (progress < 100) requestAnimationFrame(loadFrame);
    else setTimeout(() => { document.body.classList.add('loaded'); setTimeout(() => preloader.remove(), 900); }, 90);
  }
  requestAnimationFrame(loadFrame);
}

const revealObserver = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) { entry.target.classList.add('is-visible'); revealObserver.unobserve(entry.target); }
}), {threshold: .12, rootMargin: '0px 0px -5%'});
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

const counterObserver = new IntersectionObserver(entries => entries.forEach(entry => {
  if (!entry.isIntersecting) return;
  const el = entry.target; const target = Number(el.dataset.count); const started = performance.now();
  const tick = now => { const amount = reduceMotion ? 1 : Math.min(1, (now - started) / 1000); el.textContent = `${Math.round(target * (1 - Math.pow(1 - amount, 3)))}+`; if (amount < 1) requestAnimationFrame(tick); };
  requestAnimationFrame(tick); counterObserver.unobserve(el);
}), {threshold: .5});
document.querySelectorAll('[data-count]').forEach(el => counterObserver.observe(el));

if (!reduceMotion) {
  const parallaxItems = document.querySelectorAll('[data-parallax]');
  let mouseX = 0, mouseY = 0, ticking = false;
  addEventListener('mousemove', event => { mouseX = event.clientX - innerWidth / 2; mouseY = event.clientY - innerHeight / 2; if (!ticking) requestAnimationFrame(updateParallax); ticking = true; });
  function updateParallax() { parallaxItems.forEach(el => { const speed = Number(el.dataset.parallax); el.style.transform = `translate3d(${mouseX * speed}px,${mouseY * speed}px,0)`; }); ticking = false; }

}

const timeline = document.querySelector('.timeline');
const timelineFill = document.querySelector('.timeline-line span');
addEventListener('scroll', () => {
  const rect = timeline.getBoundingClientRect();
  const progress = Math.min(1, Math.max(0, (innerHeight * .75 - rect.top) / rect.height));
  timelineFill.style.transform = `scaleY(${progress})`;
}, {passive:true});
