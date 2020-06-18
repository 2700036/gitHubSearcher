export function searchRepos(searchWord, page=1) {
    return fetch(`https://api.github.com/search/repositories?q=${searchWord}&sort=stars&order=desc&per_page=10&page=${page}`, {
      method: "GET"      
    })
    .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .then(res =>{
                
        
        return res;
      })
  }


//   console.log(
//     el.name, 
//     el.stargazers_count,
//     el.html_url,
//     el.owner.avatar_url, 
//     el.owner.login, 
//     el.language, 
//     el.description,
//     el.contributors_url
//     )