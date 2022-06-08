const movieName = document.querySelector('#movie-name').value.trim();
const movieYear = document.querySelector("#movie-year").value.trim();
const movieGenre = document.querySelector("#movie-genre").value.trim();

async function nameFormHandler(event) {
    if (movieName) {
        const response = await fetch('/api/movies/name', {
            method: 'get',
            body: JSON.stringify({
                name
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        if (response.ok) {
            document.location.replace('/dashboard/');
        } else {
            alert(response.statusText);
        }
    };
};

async function yearFormHandler(event) {
    if (movieYear) {
        const response = await fetch('/api/movies/year', {
            method: 'get',
            body: JSON.stringify({
                year
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        if (response.ok) {
            document.location.replace('/dashboard/');
        } else {
            alert(response.statusText);
        }
    };
}

async function genreFormHandler(event) {
    if (movieGenre) {
        const response = await fetch('/api/movies/genre', {
            method: 'get',
            body: JSON.stringify({
                genre
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        if (response.ok) {
            document.location.replace('/dashboard/');
        } else {
            alert(response.statusText);
        }
    };
}

document.querySelector('.name-form').addEventListener('submit', nameFormHandler);
document.querySelector('.year-form').addEventListener('submit', yearFormHandler);
document.querySelector('.genre-form').addEventListener('submit', genreFormHandler);