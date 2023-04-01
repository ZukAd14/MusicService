/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import HomePage from './components/HomePage.js';
import { classNames, select, settings } from './settings.js';
import Songs from './components/Songs.js';

const app = {
  initPages: function(){
    const thisApp = this;

    thisApp.pages = document.querySelector(select.containerOf.pages).children;
    thisApp.navLinks = document.querySelectorAll(select.nav.links);

    const idFromHash = window.location.hash.replace('#/', '');

    let pageMatchingHash = thisApp.pages[0].id;

    for(let page of thisApp.pages){
      if(page.id == idFromHash){
        pageMatchingHash = page.id;
        break;
      }
    }
    thisApp.activatePage(pageMatchingHash);

    for(let link of thisApp.navLinks){
      link.addEventListener('click', function(event){
        const clickedElement = this;
        event.preventDefault();

        const id = clickedElement.getAttribute('href').replace('#', '');
        thisApp.activatePage(id);
        window.location.hash = '#/' + id;
      });
    }
  }, 
  activatePage: function(pageId){
    const thisApp = this;

    for(let page of thisApp.pages){
      page.classList.toggle(classNames.pages.active, page.id == pageId);

    }

    for(let link of thisApp.navLinks){
      link.classList.toggle(
        classNames.nav.active,
        link.getAttribute('href') == '#' + pageId
      );
    }
  },
  initHomePage: function(){
    const thisApp = this;

    const homeElem = document.querySelector(select.containerOf.homePage);
    thisApp.homePage = new HomePage(homeElem);
  },
  initData: function(){
    const thisApp = this;

    thisApp.data = {};
    const url = settings.db.url + '/' + settings.db.songs;
    
    fetch(url)
      .then(function(rawResponse){
        return rawResponse.json();
      })
      .then(function(parsedResponse){
        thisApp.data.songs = parsedResponse;

      });
    
  }, 
 
  
  init: function(){
    const thisApp = this;

    thisApp.initPages();
    thisApp.initData();
    thisApp.initHomePage();
    
    console.log(thisApp.data);
    /*GreenAudioPlayer.init({
      selector: '.player', // inits Green Audio Player on each audio container that has class "player"
      stopOthersOnPlay: true,
      showTooltips: true,
    });*/
  },

  
};

app.init();
