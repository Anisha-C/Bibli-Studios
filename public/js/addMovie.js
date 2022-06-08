const newMovieName = document.querySelector('#add-movie').value.trim();

async function movieFormHandler(event) {
    event.preventDefault();

    if (movieName) {
        const response = await fetch('/api/movies', {
            method: 'post',
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

document.querySelector('.movie-form').addEventListener('submit', movieFormHandler);