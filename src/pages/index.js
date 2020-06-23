import '../pages/index.css';
import { searchRepos, getPopularRepos } from './../scripts/modules/GitApi';
import Card from '../scripts/modules/Card';
import { state, createButtons, pagination } from '../scripts/modules/Pagination';
import Results from './../scripts/modules/Results';

export const cardTemplate = document.querySelector('#cardTemplate').content.querySelector('.card');
export const pagWrapper = document.querySelector('.pagination');
const form = document.querySelector('.search__form');
const input = document.querySelector('.searh__input');
const resultSection = document.querySelector('.result');
const resultHeader = resultSection.querySelector('.block__title');
const preloader = document.querySelector('.preloader');
const notFound = document.querySelector('.not-found');
const disconnect = document.querySelector('.disconnect');
export const results = new Results({
  resultSection,  
  disconnect,
  notFound,
  preloader,  
})

if(sessionStorage.statePage){
  state.page = sessionStorage.getItem('statePage');
  input.value = sessionStorage.getItem('searchWord');
  state.total = sessionStorage.getItem('total');  
  results.togglePreloader(true);
  searchRepos(input.value, state.page)
  .then(res => {    
    state.querySet = res.items;    
    results.togglePreloader(false);      
    pagination();              
  }) 
} else {

  getPopularRepos()
  .then(res => {
    resultHeader.textContent = 'Топ-10';
    state.querySet = res.items; 
    pagination();              
  });
  
}

form.addEventListener('submit', (ev)=>{
  ev.preventDefault(); 
  results.togglePreloader(true);
  searchRepos(input.value)
  .then(res => {
    if(res.items.length){ 
      state.page = 1;   
    state.total = res.total_count;   
    state.querySet = res.items;
    resultHeader.textContent = 'Выберите репозиторий';    
    results.togglePreloader(false);
    pagination();
    sessionStorage.clear();
    sessionStorage.setItem('searchWord', input.value);
    sessionStorage.setItem('total', res.total_count);           
    sessionStorage.setItem('statePage', state.page);
    } else {
      results.togglePreloader(false);
      results.nothingFound();
    }         
  })
  .catch(err => {
    results.togglePreloader(false);
    results.disconnect();
    console.log(err);
  })  
})

pagWrapper.addEventListener('click', (ev)=>{    
  if (ev.target.classList.contains('pag-item')){      
    state.page = ev.target.getAttribute('data-value');
    searchRepos(input.value, state.page)
    .then(res => { 
      if(res.items.length){       
        state.querySet = res.items;
        results.resetResults();    
        pagination();
    sessionStorage.setItem('statePage', state.page);
    };            
  }) 
  }



});


