const portfolioProjects = [
  {
    id: '01', name: 'Ecossistema Seta', category: 'Enterprise Platforms',
    description: 'Produtos digitais para eventos e check-in apresentados como uma experiência coesa, com fluxos claros e foco no uso mobile.',
    tags: ['APLICAÇÕES', 'WEB', 'PRODUTO'], theme: 'orange',
    images: ['imagens/projetos/apps/1-setaeventos.webp', 'imagens/projetos/apps/2-setacheckin.webp'],
    links: [
      'https://apkpure.net/setaeventos/br.com.sistemaseta.SetaEventos',
      'https://apkpure.net/setacheck-in/br.com.sistemaseta.SetaCheckin'
    ],
    linkLabels: ['SetaEventos', 'SetaCheck-in']
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
    ],
    linkLabels: ['Tradebox', 'InterFarma', 'Health']
  },
  {
    id: '03', name: 'Creative Web', category: 'Sites & Digital Experiences',
    description: 'Uma seleção de experiências web para saúde, educação, negócios e marcas pessoais. Diferentes universos visuais conectados por clareza, hierarquia e conversão.',
    tags: ['WEB DESIGN', 'DEVELOPMENT', 'UX'], theme: 'lime',
    images: ['imagens/projetos/sites/5-mauman-health.webp', 'imagens/projetos/sites/10-musicall.webp', 'imagens/projetos/sites/3-dom-media.webp'],
    links: ['https://mauman.com.br/health/', 'https://centromusicall.com/', 'https://dommedia.com.br/'],
    linkLabels: ['Mauman Health', 'Centro Musicall', 'Agência Dom Media']
  }
];

const archiveProjects = [
  ['Mauman', 'imagens/projetos/sites/1-mauman.webp', 'SITE', 'https://mauman.com.br/'],
  ['Agência Dom Media', 'imagens/projetos/sites/3-dom-media.webp', 'SITE', 'https://dommedia.com.br/'],
  ['Higisof', 'imagens/projetos/sites/higisof.webp', 'SITE', 'https://higisof.com.br/'],
  ['Pronto Saúde RJ', 'imagens/projetos/sites/prontosauderj.webp', 'SITE', 'https://prontosauderj.com.br/'],
  ['Liane Pinto', 'imagens/projetos/sites/lianepinto.webp', 'SITE', 'https://lianepintodh.com/'],
  ['Onda Sul Engenharia', 'imagens/projetos/sites/ondasul.webp', 'SITE', 'https://ondasul.ind.br/'],
  ['Keisan', 'imagens/projetos/sites/keisan.webp', 'SITE', 'https://keisan.com.br/'],
  ['Mauman Health', 'imagens/projetos/sites/5-mauman-health.webp', 'SITE', 'https://mauman.com.br/health/'],
  ['André Roncon', 'imagens/projetos/sites/6-andre-roncon.webp', 'SITE', 'https://andreroncon.com.br/'],
  ['Dra. Carolina', 'imagens/projetos/sites/8-dra.carolina.webp', 'SITE', 'https://dracarolinamusse.com.br/'],
  ['Explorando Segredos e Mistérios', 'imagens/projetos/sites/9-explorando-segredos-e-misterios.webp', 'SITE', 'https://explorandosegredosmisterios.com/'],
  ['Centro Musicall', 'imagens/projetos/sites/10-musicall.webp', 'SITE', 'https://centromusicall.com/'],
  ['Rezende Netto Advogados', 'imagens/projetos/sites/14-rezende-netto.webp', 'SITE', 'https://rezendenetto.adv.br/'],
  ['Dra. Aline Bento', 'imagens/projetos/sites/aline-bento.webp', 'SITE', 'https://draalinebento.com.br/'],
  ['Dra. Celene Bragion', 'imagens/projetos/sites/celene-bragion.webp', 'SITE', 'https://dracelenebragion.com.br/'],
  ['Dra. Livia Paulinelli', 'imagens/projetos/sites/livia-paulinelli.webp', 'SITE', 'https://draliviapaulinelli.com.br/'],
  ['Evani Pecci', 'imagens/projetos/sites/evani.webp', 'SITE', 'https://evanipecci.com.br/'],
  ['Gastros Bahia', 'imagens/projetos/sites/gastros-brasil.webp', 'SITE', 'https://www.gastrosbahia.com.br/'],
  ['Marias Pedras', 'imagens/projetos/sites/marias.webp', 'SITE', 'https://mariaspedrasdecorativas.com.br/'],
  ['Rezende Netto — Imobiliário', 'imagens/projetos/sites/19-imobiliario.rezende-netto.webp', 'SITE', 'https://imobiliario.rezendenetto.adv.br/'],
  ['Green Digital Agency', 'imagens/projetos/sites/20-green-digital.webp', 'SITE', 'https://greendigitalagency.com/'],
  ['Geek Conteúdo', 'imagens/projetos/sites/21-geek-conteudo.webp', 'SITE', 'https://geekconteudo.com.br/'],
  ['Novident', 'imagens/projetos/sites/22-novident.webp', 'SITE', 'https://novident.com.br/'],
  ['Planner Financeiro', 'imagens/projetos/sites/25-planner-financeiro.webp', 'SITE', 'https://newholdingfinance.com/planner-financeiro'],
  ['Lobi Cicloturismo', 'imagens/projetos/sites/28-lobi.webp', 'SITE', 'https://www.lobi.com.br/'],
  ['Tisan Engenharia', 'imagens/projetos/sites/33-tisan-engenharia.webp', 'SITE', 'https://tisanengenharia.com.br/'],
  ['Itapopo', 'imagens/projetos/sites/37-itapopo.webp', 'SITE', 'https://itapopo.com/'],
  ['Horizen', 'imagens/projetos/sites/38-horizen.webp', 'SITE', 'https://horizencapital.com/'],
  ['AM Containers', 'imagens/projetos/sites/41-am-containers.webp', 'SITE', 'https://leccorside.github.io/am/'],
  ['Brisa', 'imagens/projetos/sites/brisa.webp', 'SITE', 'https://brisa.com.br/'],
  ['Seta Proteção', 'imagens/projetos/apps/seta-protecao.webp', 'APP', 'https://play.google.com/store/apps/details?id=com.setaprotecao'],
  ['Pernambuco Associados', 'imagens/projetos/apps/4-pernambucoassosciados.webp', 'APP', 'https://play.google.com/store/apps/details?id=br.com.eptasoftwares.pernambuco'],
  ['Pernambuco Dá Sorte', 'imagens/projetos/apps/5-pernambucodasorte.webp', 'APP', 'https://play.google.com/store/apps/details?id=br.com.pernambucodasorte'],
  ['DP2 Comunicação', 'imagens/projetos/prototipos/1-dp2.webp', 'PROTÓTIPO', 'https://www.figma.com/file/NLGMyBCq3Mk8mgc3OWoXuc/Untitled?type=design&node-id=0-1&mode=design'],
  ['Health', 'imagens/projetos/prototipos/2-health.webp', 'PROTÓTIPO', 'https://www.figma.com/file/EgibF9td2hZu8GTds6Ompd/Untitled?type=design&node-id=1-2&mode=design'],
  ['Delta 24', 'imagens/projetos/prototipos/3-delta-24.webp', 'PROTÓTIPO', 'https://www.figma.com/file/3f9tekBbk5pYBoEqYMUgcO/Untitled?type=design&node-id=0-1&mode=design&t=q8wMDs0pD09KXg2W-0'],
  ['Jesus é Bom', 'imagens/projetos/prototipos/4-jesus-e-bom.webp', 'PROTÓTIPO', 'https://www.figma.com/file/0OzBkUhuGwnA0IMwirGbvb/Untitled?type=design&node-id=49%3A3296&mode=design&t=r16uRMkvlayq7cye-1'],
  ['Trade Box', 'imagens/projetos/prototipos/6-tradebox.webp', 'PROTÓTIPO', 'https://www.figma.com/file/9tKF0uHx6AkZIAQ6SdpNFJ/Tradebox?type=design&t=2b7WNSZw47jAlR7I-6'],
  ['Telemedicina', 'imagens/projetos/prototipos/7-telemedicina.webp', 'PROTÓTIPO', 'https://www.figma.com/file/zcwAutDUgBkNCdkytH3llX/Dekstop-App?type=design&t=2b7WNSZw47jAlR7I-6'],
  ['InterFarma', 'imagens/projetos/prototipos/8-inter-farma.webp', 'PROTÓTIPO', 'https://www.figma.com/file/3lv27SMspw8U1TMpgdXNzV/InterFarma-Homepage?type=design&t=2b7WNSZw47jAlR7I-6'],
  ['Toto Garden', 'imagens/projetos/prototipos/9-totogarden.webp', 'PROTÓTIPO', 'https://www.figma.com/file/HM7srxcjHmp1XXXV2iI7Ou/TOTOGARDEN?type=design&node-id=0-1&mode=design&t=3FlhFg1eeXg1v9Bd-0'],
  ['Quinta do Sol', 'imagens/projetos/prototipos/10-quinta-do-sol.webp', 'PROTÓTIPO', 'https://www.figma.com/file/RUQwI2S1AD55UOJmwITPGb/Quinta-so-Sol-Praia-Hotel---MOBILE?type=design&t=dHuXC5LdBf4Hp7yN-6'],
  ['Loja Woo', 'imagens/projetos/prototipos/11-loja-woo.webp', 'PROTÓTIPO', 'https://www.figma.com/file/E3iBgP8nbo1Ih7H9x5vTtK/woo-landing-page-for-figma?type=design&mode=design'],
  ['Travel', 'imagens/projetos/prototipos/12-travel.webp', 'PROTÓTIPO', 'https://www.figma.com/file/dhCxVHenYD0QMpOko9tpqb/Travel?type=design&node-id=0-1&mode=design'],
  ['Constol', 'imagens/projetos/prototipos/13-constol.webp', 'PROTÓTIPO', 'https://www.figma.com/file/GrDD17duiIvrnHEsyWunGk/constol?type=design&node-id=0%3A1&mode=design&t=pL5oMOarPkDaR60F-1'],
  ['Criative Agência', 'imagens/projetos/prototipos/14-criative-agencia.webp', 'PROTÓTIPO', 'https://www.figma.com/file/wD4kLFYZhbbBZccmMLFsWv/Cretaive-Agency?type=design&node-id=0%3A1&mode=design&t=C2xetftND9hA6ZER-1'],
  ['Agensie', 'imagens/projetos/prototipos/15-agensie.webp', 'PROTÓTIPO', 'https://www.figma.com/file/utRNjLxMtMX4tfhcAWgg6A/Agensie?type=design&node-id=0%3A1&mode=design&t=200aGtpnrhxb1p7z-1'],
  ['Studio Center', 'imagens/projetos/lojas/studiocenter.webp', 'E-COMMERCE', 'https://studiocenter.com.py/']
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
  copy.append(
    element('span', 'project-number', `[${project.id}]`),
    element('p', 'project-category', project.category),
    element('h3', '', project.name),
    element('p', '', project.description),
    tagsElement(project.tags)
  );

  const availableLinks = project.links
    .map((url, linkIndex) => ({url, label: project.linkLabels[linkIndex]}))
    .filter(item => item.url);
  if (availableLinks.length) {
    const projectLinks = element('nav', 'project-links');
    projectLinks.setAttribute('aria-label', `Links do case ${project.name}`);
    projectLinks.append(element('span', 'project-links-label', 'ABRIR PROJETOS'));
    availableLinks.forEach(item => {
      const link = element('a', 'project-link', item.label);
      link.href = item.url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.setAttribute('aria-label', `Abrir ${item.label} em uma nova aba`);
      link.append(element('span', '', '↗'));
      projectLinks.append(link);
    });
    copy.append(projectLinks);
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
    image.src = src;
    image.alt = `${project.name} — tela ${imageIndex + 1}`;
    image.loading = 'lazy';
    image.decoding = 'async';
    image.width = 1920;
    image.height = 1080;
    button.append(image);
    visual.append(button);
  });
  visual.append(element('span', 'visual-code', `${project.id} / JAR`));
  article.append(copy, visual);
  return article;
}

function archiveElement([name, imageSource, type, url], index) {
  const article = element('article', 'archive-card');
  article.dataset.cursor = 'VIEW';
  article.append(element('span', '', `${String(index + 1).padStart(2, '0')} / ${String(archiveProjects.length).padStart(2, '0')}`));

  const button = element('a', 'archive-image');
  button.href = url;
  button.target = '_blank';
  button.rel = 'noopener noreferrer';
  button.setAttribute('aria-label', `Visitar ${name} em uma nova aba`);
  const image = element('img');
  image.src = imageSource;
  image.alt = name;
  image.loading = 'lazy';
  image.decoding = 'async';
  image.width = 1920;
  image.height = 1080;
  button.append(image);

  const copy = element('div');
  const meta = element('div', 'archive-meta');
  meta.append(element('h3', '', name), element('p', '', type));
  const link = element('a', 'archive-link', 'ABRIR PROJETO');
  link.href = url;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.setAttribute('aria-label', `Abrir ${name} em uma nova aba`);
  link.append(element('span', '', '↗'));
  copy.append(meta, link);
  article.append(button, copy);
  return article;
}

function skillElement([name, file, group], index) {
  const article = element('article', 'skill-card reveal');
  article.style.setProperty('--i', String(index));
  article.append(element('span', '', String(index + 1).padStart(2, '0')));
  const image = element('img');
  image.src = `imagens/skills/${file}`;
  image.alt = `Logo ${name}`;
  image.loading = 'lazy';
  image.width = 86;
  image.height = 86;
  const copy = element('div');
  copy.append(element('h3', '', name), element('p', '', group));
  article.append(image, copy);
  return article;
}

document.querySelector('#project-list').append(...portfolioProjects.map(projectElement));
document.querySelector('#archive-track').append(...archiveProjects.map(archiveElement));
document.querySelector('#skill-grid').append(...skills.map(skillElement));

window.portfolioProjects = portfolioProjects;
