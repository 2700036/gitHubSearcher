import {cardContainer, pagWrapper, cardTemplate} from './../../pages/index';
import { Card } from './Card';
export let state = {
  querySet: [],
  total: 1,
  page: 1,
  rows: 10,
  window: 10,
};

export function createButtons(pages, wrapper) {
  function createButton(value, text) {
    const button = document.createElement('li');
    button.classList.add('pag-item');
    button.setAttribute('data-value', value);
    button.innerHTML = text;
    return button;
  }

  wrapper.innerHTML = ``;
  let maxLeft = +state.page - Math.floor(state.window / 2);
  let maxRight = +state.page + Math.floor(state.window / 2);

  if (maxLeft <= 1) {
    maxLeft = 1;
    maxRight = state.window;
  }
  if (maxRight > pages) {
    maxLeft = pages - (state.window - 1);
    if (maxLeft < 1) {
      maxLeft = 1;
    }
    maxRight = pages;
  }

  for (let page = maxLeft; page < maxRight; page++) {
    wrapper.append(createButton(page, page));
  }
  if (state.page != 1 && state.page != 2 && state.page != 3 && state.page != 4) {
    wrapper.prepend(createButton(1, '&#171;'));
  }
  if (state.page != pages && state.page != pages - 1 && state.page != pages - 2 && state.page != pages - 3) {
    wrapper.append(createButton(maxRight, '&#8250;'));
  }
}

export function buildTable() {
  cardContainer.innerHTML = '';
  const pages = Math.ceil(state.total / state.rows);
  state.querySet.forEach((el) => {
    const card = new Card(el, cardTemplate, cardContainer);
    card.addCard();
  });
  createButtons(pages, pagWrapper);
}
