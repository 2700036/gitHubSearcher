export class Card {
    constructor(data, template, container){
        this._name = data.name[0].toUpperCase() + data.name.slice(1);
        this._rate = data.stargazers_count;
        this._gitUrl = data.html_url;
        this._template = template.cloneNode(true);
        this._container = container;
        this.addCard = this.addCard.bind(this);
    }
    _createCard(){
        this._card = this._template;
        this._card.querySelector('.card__name').textContent = this._name;
        this._card.querySelector('.card__rate-total').textContent = this._rate;
        this._card.querySelector('.card__date').textContent = '5454';
        this._card.querySelector('.card__git-link').href = this._gitUrl;
        return this._card;
    }
    addCard(){
        this._container.appendChild(this._createCard());
    }

}


