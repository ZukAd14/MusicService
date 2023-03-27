export const select = {
  templateOf: {
    homePage: '#template-home-page',
    discover: '#template-discover-page',
    search: '#template-search-page',
  },
  containerOf: {
    pages: '#pages',

  },
  nav: {
    links: '.nav a',

  },
};

export const classNames = {
  nav: {
    active: 'active',
  },
  pages: {
    active: 'active'
  },
};

export const settings = {
  db: {

  },

};

export const templates = {
  homePage: Handlebars.compile(document.querySelector(select.templateOf.homePage).innerHTML),
  discover: Handlebars.compile(document.querySelector(select.templateOf.discover).innerHTML),
  search: Handlebars.compile(document.querySelector(select.templateOf.search).innerHTML),
};