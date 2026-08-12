const portfolioProjects = [
  {
    id: '01', name: 'Ecossistema Seta', category: 'Enterprise Platforms',
    description: 'Um ecossistema de produtos digitais documentado em múltiplas frentes — treinamento, eventos, proteção, check-in e gestão — apresentado como uma experiência de produto coesa.',
    tags: ['APLICAÇÕES', 'WEB', 'PRODUTO'], theme: 'orange',
    images: ['imagens/projetos/sites/31-sistema-seta.webp', 'imagens/projetos/apps/1-setaeventos.webp', 'imagens/projetos/apps/2-setacheckin.webp']
  },
  {
    id: '02', name: 'Tradebox', category: 'Fintech Product Prototype',
    description: 'Fluxos completos de um produto financeiro: onboarding, dashboards, fundos, mercado e pagamentos organizados em uma arquitetura visual mobile-first.',
    tags: ['PROTOTYPE', 'UX/UI', 'MOBILE'], theme: 'purple',
    images: ['imagens/projetos/prototipos/6-tradebox.webp', 'imagens/projetos/prototipos/8-inter-farma.webp', 'imagens/projetos/prototipos/2-health.webp']
  },
  {
    id: '03', name: 'Creative Web', category: 'Sites & Digital Experiences',
    description: 'Uma seleção de experiências web para saúde, educação, negócios e marcas pessoais. Diferentes universos visuais conectados por clareza, hierarquia e conversão.',
    tags: ['WEB DESIGN', 'DEVELOPMENT', 'UX'], theme: 'lime',
    images: ['imagens/projetos/sites/5-mauman-health.webp', 'imagens/projetos/sites/10-musicall.webp', 'imagens/projetos/sites/35-kite.webp']
  }
];

const archiveProjects = [
  ['Nutri AI', 'imagens/projetos/sites/nutri-ai.webp', 'AI / HEALTH'],
  ['Onda Sul', 'imagens/projetos/sites/ondasul.webp', 'WEB EXPERIENCE'],
  ['Keisan', 'imagens/projetos/sites/keisan.webp', 'CREATIVE WEB'],
  ['Seta Academy', 'imagens/projetos/apps/seta-academy.webp', 'MOBILE APP'],
  ['Chacauhaa', 'imagens/projetos/lojas/chacauhaa.webp', 'E-COMMERCE'],
  ['Toto Garden', 'imagens/projetos/prototipos/9-totogarden.webp', 'PRODUCT DESIGN']
];

const skills = [
  ['JavaScript', 'javascript.webp', 'FRONT-END'], ['React', 'logo-react-icon.webp', 'FRONT-END'], ['Angular', 'angular-js-512.webp', 'FRONT-END'], ['Vue.js', 'vuejs.webp', 'FRONT-END'],
  ['Node.js', 'nodejs.webp', 'BACK-END'], ['Java', 'JAVA.webp', 'BACK-END'], ['C#', 'C-SHARP.webp', 'BACK-END'], ['PHP', 'php.webp', 'BACK-END'], ['Python', 'PYTHON.webp', 'BACK-END'],
  ['Figma', 'figma2.webp', 'DESIGN'], ['Photoshop', 'photoshop.webp', 'DESIGN'], ['Illustrator', 'ilustrador.webp', 'DESIGN'], ['Adobe XD', 'xd.webp', 'DESIGN'],
  ['Unity', 'unity.webp', 'CREATIVE TECH'], ['Unreal', 'Unreal.webp', 'CREATIVE TECH']
];

function projectMarkup(project, index) {
  const images = project.images.map((src, imageIndex) => `<button class="project-shot shot-${imageIndex + 1}" data-project="${index}" data-image="${imageIndex}" aria-label="Ampliar imagem ${imageIndex + 1} de ${project.name}"><img src="${src}" alt="${project.name} — tela ${imageIndex + 1}" loading="lazy" decoding="async"></button>`).join('');
  return `<article class="project project-${project.theme} reveal">
    <div class="project-copy"><span class="project-number">[${project.id}]</span><p class="project-category">${project.category}</p><h3>${project.name}</h3><p>${project.description}</p><div class="tags">${project.tags.map(tag => `<span>${tag}</span>`).join('')}</div><button class="project-open" data-project="${index}" data-image="0">EXPLORE O CASE <span>↗</span></button></div>
    <div class="project-visual" data-cursor="VIEW">${images}<span class="visual-code">${project.id} / JAR</span></div>
  </article>`;
}

document.querySelector('#project-list').innerHTML = portfolioProjects.map(projectMarkup).join('');
document.querySelector('#archive-track').innerHTML = archiveProjects.map(([name, image, type], i) => `<article class="archive-card" data-cursor="VIEW"><span>0${i + 1} / 0${archiveProjects.length}</span><button class="archive-image" data-src="${image}" data-name="${name}" aria-label="Ampliar ${name}"><img src="${image}" alt="${name}" loading="lazy"></button><div><h3>${name}</h3><p>${type}</p></div></article>`).join('');
document.querySelector('#skill-grid').innerHTML = skills.map(([name, file, group], i) => `<article class="skill-card reveal" style="--i:${i}"><span>${String(i + 1).padStart(2, '0')}</span><img src="imagens/skills/${file}" alt="Logo ${name}" loading="lazy" width="86" height="86"><div><h3>${name}</h3><p>${group}</p></div></article>`).join('');

window.portfolioProjects = portfolioProjects;
