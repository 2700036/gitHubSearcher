export function searchRepos(searchWord, page=1) {
    return fetch(`https://api.github.com/search/repositories?q=${searchWord}&sort=stars&order=desc&per_page=10&page=${page}`, {
      method: "GET",
      // mode: 'cors',
        // headers: {
        // Authorization: 'token 0e476dacf5f977b5f3d833919ac0984c13194c92'          
        // }      
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

export function getLastCommit(owner, repo) {
    return fetch(`https://api.github.com/repos/${owner}/${repo}/commits`, 
    {
      method: "GET",
      // mode: 'cors',
        // headers: {
        // Authorization: 'token 0e476dacf5f977b5f3d833919ac0984c13194c92'        
        // }      
    })
    .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .then(res =>{
        return res[0].commit.author.date;
      })
  }

  export function getContributters(owner, repo) {
    return fetch(`https://api.github.com/repos/${owner}/${repo}/contributors`, 
    {
      method: "GET",
      // mode: 'cors',
        // headers: {
        // Authorization: 'token 0e476dacf5f977b5f3d833919ac0984c13194c92'        
        // }      
    })
    .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .then(res =>{
        return res.reduce((acc, cur)=>{
          acc.push(cur.login);
          return acc;
        }, []).slice(0, 20).join(', ');        
      })
  }

  export function getPopularRepos() {
    return fetch(`https://api.github.com/search/repositories?q=stars&sort=stars&per_page=10&`, {
      method: "GET",
      // mode: 'cors',
       // headers: {
       // Authorization: 'token 0e476dacf5f977b5f3d833919ac0984c13194c92'          
       // }      
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
  

