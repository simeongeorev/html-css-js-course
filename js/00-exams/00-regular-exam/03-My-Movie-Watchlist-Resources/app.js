function solve() {
    const BASE_URL = 'http://localhost:3030/jsonstore/movies/';

    const titleInputEl = document.getElementById('title');
    const directorInputEl = document.getElementById('director');
    const yearInputEl = document.getElementById('year');
    const addMovieBtn = document.getElementById('add-movie');
    const editMovieBtn = document.getElementById('edit-movie');
    const loadMoviesBtn = document.getElementById('load-movies');
    const movieListDiv = document.getElementById('movie-list');
    const movieTemplate = document.getElementsByClassName('movie')[0];

    let movieId;

    loadMoviesBtn.addEventListener('click', async () => {
        await visualizeMovies();

        // disable the edit button
        editMovieBtn.disabled = true;
    });

    addMovieBtn.addEventListener('click', async () => {
        // check if any of the fields are empty
        if (!titleInputEl.value || !directorInputEl.value || !yearInputEl.value) {
            return;
        }

        // create the object to send
        const inputObj = createMovieObject();

        // POST the new movie
        await postMovie(inputObj);

        // clear the input fields
        clearInputFields();

        // visualize all the movies
        await visualizeMovies();

    });

    editMovieBtn.addEventListener('click', async () => {
        // generate movie object
        const inputObj = createMovieObject();

        // send a put request with the object and the movie id
        await putMovie(inputObj, movieId);

        // visualize all of the movies
        await visualizeMovies();

        // deactivate the edit movie btn
        editMovieBtn.disabled = true;

        // active the add movie btn
        addMovieBtn.disabled = false;
    });

    async function getMovies() {
        const response = await fetch(BASE_URL);
        const result = await response.json();
        const data = Object.values(result);
        return data;
    };

    async function postMovie(postObj) {
        await fetch(BASE_URL, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(postObj)
        });
    };

    async function putMovie(obj, id) {
        await fetch(`${BASE_URL}${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(obj)
        });
    };

    async function visualizeMovies() {
        const movies = await getMovies();

        movieListDiv.innerHTML = '';

        movies.forEach(async movie => {
            movieListDiv.append(await createMovieEl(movie));
        });
    };

    async function createMovieEl(movieObj) {
        const newMovieEl = movieTemplate.cloneNode(true);

        const titleEl = newMovieEl.querySelectorAll('.content p')[0];
        titleEl.textContent = movieObj.title;

        const directorEl = newMovieEl.querySelectorAll('.content p')[1];
        directorEl.textContent = movieObj.director;

        const yearEl = newMovieEl.querySelectorAll('.content p')[2];
        yearEl.textContent = movieObj.year;

        const changeBtn = newMovieEl.querySelector('.change-btn');

        // CLICK THE CHANGE BUTTON
        changeBtn.addEventListener('click', () => {
            // populate the input fields
            titleInputEl.value = titleEl.textContent;
            directorInputEl.value = directorEl.textContent;
            yearInputEl.value = yearEl.textContent;

            // remove the movie element
            newMovieEl.remove();

            // activate the edit movie btn
            editMovieBtn.disabled = false;

            // deactivate the add movie btn
            addMovieBtn.disabled = true;

            // assign the movie id
            movieId = movieObj._id;
        });

        const removeBtn = newMovieEl.querySelector('.delete-btn');

        removeBtn.addEventListener('click', async () => {
            // send delete request
            await fetch(`${BASE_URL}${movieObj._id}`, { method: 'DELETE' });

            // visualize the movies
            await visualizeMovies();
        });

        return newMovieEl;
    };

    function clearInputFields() {
        titleInputEl.value = '';
        directorInputEl.value = '';
        yearInputEl.value = '';
    };

    function createMovieObject() {
        return {
            title: titleInputEl.value,
            director: directorInputEl.value,
            year: yearInputEl.value
        };
    };
};

solve();