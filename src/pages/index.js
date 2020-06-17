import '../pages/index.css';
import {searchRepos} from './../scripts/modules/GitApi';
import { Card } from '../scripts/modules/Card';


const cardTemplate = document.querySelector('#cardTemplate').content.querySelector('.card');
const cardContainer = document.querySelector('.result__cardlist');

  searchRepos('tetris', 1)
  .then(res => {
    console.log(res.items);
    res.items.forEach(el => {
        const card = new Card(el, cardTemplate);
        card.addCard(cardContainer);
    });
           
  })



  
