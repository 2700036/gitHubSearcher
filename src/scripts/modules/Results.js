export default class Results {
    constructor (opt){
        this._section = opt.resultSection; 
        this._preloader = opt.preloader;
        this._notFound = opt.notFound;
        this._disconnect = opt.disconnect;
        this._container = this._section.querySelector('.result__cardlist');             
    }  
    addCard(card){        
        this._container.appendChild(card);        
    }
    showResults (){
        this._section.classList.contains('result_hidden') ? this._section.classList.remove('result_hidden') : 0;
    }
    resetResults (){
        !this._section.classList.contains('result_hidden') ? this._section.classList.add('result_hidden') : 0;
        !this._notFound.classList.contains('not-found_hidden') ? this._notFound.classList.add('not-found_hidden') : 0;
        !this._disconnect.classList.contains('disconnect_hidden') ? this._disconnect.classList.add('disconnect_hidden') : 0;
        this._container.textContent = '';
    }
    nothingFound (){
        this._notFound.classList.remove('not-found_hidden');
    }
    disconnect (){
        this._disconnect.classList.remove('disconnect_hidden');
    }
    togglePreloader(isLoading){
        if (isLoading){
            this.resetResults();
            this._preloader.classList.remove('preloader_hidden');            
        } else {
            this._preloader.classList.add('preloader_hidden');
        }        
    }    
}
