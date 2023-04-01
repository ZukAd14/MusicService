/* eslint-disable no-unused-vars */
import { templates, select } from '../settings.js';
import {utils} from '../utils.js';

class homePage{
  constructor(id, data){
    const thisHomePage = this;
    thisHomePage.id = id;
    thisHomePage.data = data;

    thisHomePage.render();
    
  }

  render(){
    const thisHomePage = this;

    const generateHTML = templates.homePage(thisHomePage.data);
    thisHomePage.element = utils.createDOMFromHTML(generateHTML);
    thisHomePage.dom = {};
    thisHomePage.dom.wrapper = document.querySelector(select.containerOf.homePage);
    
    thisHomePage.dom.wrapper.appendChild(thisHomePage.element);
    //console.log('genHTML: ', generateHTML);
    console.log('wrapper: ', thisHomePage.dom.wrapper);
    //console.log('data: ', thisHomePage.data);
  }
 
}
export default homePage;