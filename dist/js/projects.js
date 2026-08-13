const portfolioProjects = [
  {
    id: '01', name: 'Ecossistema Seta', category: 'Enterprise Platforms',
    description: 'Produtos digitais para eventos e check-in apresentados como uma experiência coesa, com fluxos claros e foco no uso mobile.',
    tags: ['APLICAÇÕES', 'WEB', 'PRODUTO'], theme: 'orange',
    images: ['imagens/projetos/apps/1-setaeventos.webp', 'imagens/projetos/apps/2-setacheckin.webp'],
    links: ['', '']
  },
  {
    id: '02', name: 'Tradebox', category: 'Fintech Product Prototype',
    description: 'Fluxos completos de um produto financeiro: onboarding, dashboards, fundos, mercado e pagamentos organizados em uma arquitetura visual mobile-first.',
    tags: ['PROTOTYPE', 'UX/UI', 'MOBILE'], theme: 'purple',
    images: ['imagens/projetos/prototipos/6-tradebox.webp', 'imagens/projetos/prototipos/8-inter-farma.webp', 'imagens/projetos/prototipos/2-health.webp'],
    links: [
      'https://www.figma.com/file/9tKF0uHx6AkZIAQ6SdpNFJ/Tradebox?type=design&t=2b7WNSZw47jAlR7I-6',
      'https://www.figma.com/file/3lv27SMspw8U1TMpgdXNzV/InterFarma-Homepage?type=design&t=2b7WNSZw47jAlR7I-6',
      'https://www.figma.com/file/EgibF9td2hZu8GTds6Ompd/Untitled?type=design&node-id=1-2&mode=design'
    ]
  },
  {
    id: '03', name: 'Creative Web', category: 'Sites & Digital Experiences',
    description: 'Uma seleção de experiências web para saúde, educação, negócios e marcas pessoais. Diferentes universos visuais conectados por clareza, hierarquia e conversão.',
    tags: ['WEB DESIGN', 'DEVELOPMENT', 'UX'], theme: 'lime',
    images: ['imagens/projetos/sites/5-mauman-health.webp', 'imagens/projetos/sites/10-musicall.webp', 'imagens/projetos/sites/35-kite.webp'],
    links: ['https://mauman.com.br/health/', 'https://centromusicall.com/', 'https://kiteaio.com/']
  }
];

const archiveProjects = [
  ['Onda Sul', 'imagens/projetos/sites/ondasul.webp', 'WEB EXPERIENCE', 'https://ondasul.ind.br/'],
  ['Keisan', 'imagens/projetos/sites/keisan.webp', 'CREATIVE WEB', 'https://keisan.com.br/'],
  ['Chacauhaa', 'imagens/projetos/lojas/chacauhaa.webp', 'E-COMMERCE', 'https://chacauhaa.com.br/'],
  ['Toto Garden', 'imagens/projetos/prototipos/9-totogarden.webp', 'PRODUCT DESIGN', 'https://www.figma.com/file/HM7srxcjHmp1XXXV2iI7Ou/TOTOGARDEN?type=design&node-id=0-1&mode=design&t=3FlhFg1eeXg1v9Bd-0']
];

const skills = [
  ['JavaScript', 'javascript.webp', 'FRONT-END'], ['React', 'logo-react-icon.webp', 'FRONT-END'], ['Angular', 'angular-js-512.webp', 'FRONT-END'], ['Vue.js', 'vuejs.webp', 'FRONT-END'],
  ['Node.js', 'nodejs.webp', 'BACK-END'], ['Java', 'JAVA.webp', 'BACK-END'], ['C#', 'C-SHARP.webp', 'BACK-END'], ['PHP', 'php.webp', 'BACK-END'], ['Python', 'PYTHON.webp', 'BACK-END'],
  ['Figma', 'figma2.webp', 'DESIGN'], ['Photoshop', 'photoshop.webp', 'DESIGN'], ['Illustrator', 'ilustrador.webp', 'DESIGN'], ['Adobe XD', 'xd.webp', 'DESIGN'],
  ['Unity', 'unity.webp', 'CREATIVE TECH'], ['Unreal', 'Unreal.webp', 'CREATIVE TECH']
];

function element(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function tagsElement(tags) {
  const container = element('div', 'tags');
  tags.forEach(tag => container.append(element('span', '', tag)));
  return container;
}

function projectElement(project, index) {
  const article = element('article', `project project-${project.theme} reveal`);
  const copy = element('div', 'project-copy');
  copy.append(element('span', 'project-number', `[${project.id}]`), element('p', 'project-category', project.category), element('h3', '', project.name), element('p', '', project.description), tagsElement(project.tags));
  const firstProjectUrl = project.links.find(Boolean);
  if (firstProjectUrl) {
    const projectLink = element('a', 'project-open');
    projectLink.href = firstProjectUrl;
    projectLink.target = '_blank';
    projectLink.rel = 'noopener noreferrer';
    projectLink.setAttribute('aria-label', `Visitar ${project.name} em uma nova aba`);
    projectLink.append(document.createTextNode('VISITAR PROJETO '), element('span', '', '↗'));
    copy.append(projectLink);
  }
  const visual = element('div', 'project-visual');
  visual.dataset.cursor = 'VIEW';
  project.images.forEach((src, imageIndex) => {
    const button = element('button', `project-shot shot-${imageIndex + 1}`);
    button.type = 'button';
    button.dataset.project = String(index);
    button.dataset.image = String(imageIndex);
    button.setAttribute('aria-label', `Ampliar imagem ${imageIndex + 1} de ${project.name}`);
    const image = element('img');
    image.src = src; image.alt = `${project.name} — tela ${imageIndex + 1}`; image.loading = 'lazy'; image.decoding = 'async'; image.width = 1920; image.height = 1080;
    button.append(image); visual.append(button);
  });
  visual.append(element('span', 'visual-code', `${project.id} / JAR`));
  article.append(copy, visual);
  return article;
}

function archiveElement([name, imageSource, type, url], index) {
  const article = element('article', 'archive-card');
  article.dataset.cursor = 'VIEW';
  article.append(element('span', '', `0${index + 1} / 0${archiveProjects.length}`));
  const button = element('a', 'archive-image');
  button.href = url; button.target = '_blank'; button.rel = 'noopener noreferrer'; button.setAttribute('aria-label', `Visitar ${name} em uma nova aba`);
  const image = element('img');
  image.src = imageSource; image.alt = name; image.loading = 'lazy'; image.decoding = 'async'; image.width = 1920; image.height = 1080;
  button.append(image);
  const copy = element('div');
  copy.append(element('h3', '', name), element('p', '', type));
  article.append(button, copy);
  return article;
}

function skillElement([name, file, group], index) {
  const article = element('article', 'skill-card reveal');
  article.style.setProperty('--i', String(index));
  article.append(element('span', '', String(index + 1).padStart(2, '0')));
  const image = element('img');
  image.src = `imagens/skills/${file}`; image.alt = `Logo ${name}`; image.loading = 'lazy'; image.width = 86; image.height = 86;
  const copy = element('div');
  copy.append(element('h3', '', name), element('p', '', group));
  article.append(image, copy);
  return article;
}

document.querySelector('#project-list').append(...portfolioProjects.map(projectElement));
document.querySelector('#archive-track').append(...archiveProjects.map(archiveElement));
document.querySelector('#skill-grid').append(...skills.map(skillElement));

window.portfolioProjects = portfolioProjects;
