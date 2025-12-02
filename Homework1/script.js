const movies = [
    { id: 1, title: "The Shawshank Redemption" },
    { id: 2, title: "The Godfather" },
    { id: 3, title: "The Dark Knight" },
    { id: 4, title: "Harry Potter" },
];

function getFavorites() {
    const favs = localStorage.getItem('favoriteMovies');
    return favs ? JSON.parse(favs) : [];
}

function toggleFavorite(movieId) {
    let favorites = getFavorites();
    if (favorites.includes(movieId)) {
        favorites = favorites.filter(id => id !== movieId);
    } else {
        favorites.push(movieId);
    }
    localStorage.setItem('favoriteMovies', JSON.stringify(favorites));
    renderFavorites();
}

function renderMovies() {
    const moviesList = document.getElementById('movies-list');
    moviesList.innerHTML = '';

    movies.forEach(movie => {
        const movieDiv = document.createElement('div');
        movieDiv.classList.add('movie');

        const title = document.createElement('span');
        title.textContent = movie.title;

        const button = document.createElement('button');
        button.textContent = getFavorites().includes(movie.id) ? 'Remove from Favorites' : 'Add to Favorites';
        button.addEventListener('click', () => {
            toggleFavorite(movie.id);
            renderMovies(); 
        });

        movieDiv.appendChild(title);
        movieDiv.appendChild(button);
        moviesList.appendChild(movieDiv);
    });
}

function renderFavorites() {
    const favoritesList = document.getElementById('favorites-list');
    const favorites = getFavorites();
    favoritesList.innerHTML = '';

    favorites.forEach(favId => {
        const movie = movies.find(m => m.id === favId);
        if (movie) {
            const li = document.createElement('li');
            li.textContent = movie.title;
            favoritesList.appendChild(li);
        }
    });
}

renderMovies();
renderFavorites();
