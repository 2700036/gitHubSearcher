export default class Card {
    constructor(data, template, getLastCommit, dateConverter){
        this._name = data.name;
        this._rate = data.stargazers_count;
        this._gitUrl = data.html_url;
        this._owner = data.owner.login;
        this._ownerUrl = data.owner.html_url;
        this._ownerPhoto = data.owner.avatar_url;
        this._description = data.description;
        this._language = data.language;
        this._template = template.cloneNode(true);        
        this._getLastCommit = getLastCommit;
        this._dateConverter = dateConverter;        
    }
    _createCard(){
        this._card = this._template;
        this._card.querySelector('.card__name').textContent = this._name[0].toUpperCase() + this._name.slice(1);
        this._card.querySelector('.card__rate-total').textContent = this._rate;        
        this._card.querySelector('.card__git-link').href = this._gitUrl;
        this._setEvenListener();
        this._fillLastCommitDate();
        return this._card;
    }
  
    async _fillLastCommitDate(){

        this._lastCommit = this._dateConverter(await this._getLastCommit(this._owner, this._name).catch(err => {
            this._card.querySelector('.card__date').style.opacity = 1;
            console.log(err, 'Ошибка получение данных');
          }) );          
          this._card.querySelector('.card__date').textContent = this._lastCommit;
          this._card.querySelector('.card__date').style.opacity = 1;
    }
    _setEvenListener(){
        this._card.addEventListener('click', ()=>{
            sessionStorage.setItem('repoName', this._name); 
            sessionStorage.setItem('repoUrl', this._gitUrl); 
            sessionStorage.setItem('ownerName', this._owner); 
            sessionStorage.setItem('ownerUrl', this._ownerUrl);
            sessionStorage.setItem('ownerPhoto', this._ownerPhoto); 
            sessionStorage.setItem('repoRate', this._rate); 
            sessionStorage.setItem('repoDescription', this._description); 
            sessionStorage.setItem('repoLanguage', this._language); 
            sessionStorage.setItem('repoCommit', this._lastCommit); 
            window.open('/about.html');
        })
    }
    

}


