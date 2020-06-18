import '../pages/index.css';
import { searchRepos } from './../scripts/modules/GitApi';
import { Card } from '../scripts/modules/Card';
import { state, createButtons, buildTable } from '../scripts/modules/Pagination';

export const cardTemplate = document.querySelector('#cardTemplate').content.querySelector('.card');
export const cardContainer = document.querySelector('.result__cardlist');
export const pagWrapper = document.querySelector('.pagination');
const form = document.querySelector('.search__form');
const input = document.querySelector('.searh__input');

form.addEventListener('submit', (ev)=>{
  ev.preventDefault();
  searchRepos(input.value)
  .then(res => {     
    state.total = res.total_count;   
    state.querySet = res.items;    
    buildTable();
    localStorage.clear();
    localStorage.setItem('items', JSON.stringify(res.items));
    localStorage.setItem('total', res.total_count);           
  })
})

pagWrapper.addEventListener('click', (ev)=>{    
  if (ev.target.classList.contains('pag-item')){ 
  state.page = ev.target.getAttribute('data-value');
  searchRepos(input.value, state.page)
  .then(res => {    
    state.querySet = res.items;    
    buildTable();
    localStorage.setItem('items', JSON.stringify(res.items));           
  }) 
  }
});