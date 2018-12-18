const baseURL = "https://ghibliapi.herokuapp.com";
let url;

const searchForm = document.querySelector('form');
const moviesMove = document.querySelector('ul')

searchForm.addEventListener('submit', fetchMovies)

function fetchMovies(e){
    e.preventDefault();
 url = baseURL + "/films"

    fetch(url)
    .then(result =>{
        return result.json();
    })
    .then(json =>{
        console.log(json)
        displayMovies(json);
    })
}

function displayMovies(json){

    let movie = json.forEach(r => {
        let name = document.createElement('h3');
        let descript = document.createElement('p');
        let age = document.createElement('h4');
        name.innerText = r.title;
        descript.innerText = r.description;
        age.innerText = r.release_date;
        searchForm.appendChild(name);
        searchForm.appendChild(descript);
        searchForm.appendChild(age);
    })
}

