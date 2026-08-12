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
  const openButton = element('button', 'project-open');
  openButton.type = 'button';
  openButton.dataset.project = String(index);
  openButton.dataset.image = '0';
  openButton.append(document.createTextNode('EXPLORE O CASE '), element('span', '', '↗'));
  copy.append(openButton);
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

function archiveElement([name, imageSource, type], index) {
  const article = element('article', 'archive-card');
  article.dataset.cursor = 'VIEW';
  article.append(element('span', '', `0${index + 1} / 0${archiveProjects.length}`));
  const button = element('button', 'archive-image');
  button.type = 'button'; button.dataset.src = imageSource; button.dataset.name = name; button.setAttribute('aria-label', `Ampliar ${name}`);
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
