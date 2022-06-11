
async function movieFormHandler(event) {
    event.preventDefault();
    const name = document.querySelector('#add-movie').value.trim();
    console.log(name);
    if (name) {
        const response = await fetch('/api/movies', {
            method: 'POST',
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