import '../pages/about.css';
import {getContributters} from './../scripts/modules/GitApi';

document.querySelector('.about__header-name').textContent = sessionStorage.getItem('repoName');
document.querySelector('.repo-card__ava-img').src = sessionStorage.getItem('ownerPhoto');
document.querySelector('.repo-card__ava-nickname').textContent = sessionStorage.getItem('ownerName')[0].toUpperCase() + sessionStorage.getItem('ownerName').slice(1);
document.querySelector('.repo-card__ava-gitlink').href = sessionStorage.getItem('ownerUrl');

const userName = document.querySelector('.repo-card__repo-nick');
userName.textContent = sessionStorage.getItem('ownerName');
userName.href = sessionStorage.getItem('ownerUrl');
const repoName = document.querySelector('.repo-card__repo-name');
repoName.textContent = sessionStorage.getItem('repoName');
repoName.href = sessionStorage.getItem('repoUrl');
document.querySelector('.repo-card__rate').textContent = sessionStorage.getItem('repoRate');
document.querySelector('.repo-card__description').textContent = sessionStorage.getItem('repoDescription');
document.querySelector('.repo-card__language').textContent = sessionStorage.getItem('repoLanguage');
document.querySelector('.repo-card__commit').textContent = sessionStorage.getItem('repoCommit');
getContributters(sessionStorage.getItem('ownerName'), sessionStorage.getItem('repoName')).then(res=>{
    document.querySelector('.repo-card__contributters').textContent = res;
})
