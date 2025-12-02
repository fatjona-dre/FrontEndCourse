const apiKey = 'YOUR_API_KEY';
const searchInput = document.getElementById('search-input');
const typeSelect = document.getElementById('type-select');
const searchBtn = document.getElementById('search-btn');
const resultsDiv = document.getElementById('results');
const paginationDiv = document.getElementById('pagination');
const detailsDiv = document.getElementById('details');

let currentSearch = '';
let currentType = '';
let currentPage = 1;

async function fetchMovies(search, type, page=1){
    const url = `https://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(search)}&type=${type}&page=${page}`;
    const res = await fetch(url);
    return res.json();
}

async function fetchDetails(imdbID){
    const url = `https://www.omdbapi.com/?apikey=${apiKey}&i=${imdbID}&plot=full`;
    const res = await fetch(url);
    return res.json();
}

function renderMovies(data){
    resultsDiv.innerHTML = '';
    detailsDiv.innerHTML = '';
    paginationDiv.innerHTML = '';

    if(data.Response === "False"){
        resultsDiv.textContent = "Movie not found!";
        return;
    }

    data.Search.forEach(movie => {
        const div = document.createElement('div');
        div.className = 'movie';
        div.textContent = `${movie.Title} (${movie.Year}) `;
        const btn = document.createElement('button');
        btn.textContent = 'Details';
        btn.addEventListener('click', async () => {
            const info = await fetchDetails(movie.imdbID);
            detailsDiv.innerHTML = `
                <h3>${info.Title} (${info.Year})</h3>
                <p>Genre: ${info.Genre}</p>
                <p>Director: ${info.Director}</p>
                <p>Plot: ${info.Plot}</p>
                <img src="${info.Poster}" width="150">
            `;
        });
        div.appendChild(btn);
        resultsDiv.appendChild(div);
    });

    const totalPages = Math.ceil(data.totalResults / 10);
    for(let i=1; i<=totalPages && i<=10; i++){
        const pageBtn = document.createElement('button');
        pageBtn.textContent = i;
        pageBtn.addEventListener('click', () => {
            currentPage = i;
            searchMovies();
        });
        paginationDiv.appendChild(pageBtn);
    }
}

async function searchMovies(){
    const data = await fetchMovies(currentSearch, currentType, currentPage);
    renderMovies(data);
}

searchBtn.addEventListener('click', () => {
    currentSearch = searchInput.value.trim();
    currentType = typeSelect.value;
    currentPage = 1;
    if(currentSearch) searchMovies();
});
