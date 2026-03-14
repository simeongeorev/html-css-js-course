function solve(commands = []) {
    const addMovieCmd = "addMovie "
    const directedByCmd = " directedBy "
    const onDateCmd = " onDate "

    let constructedMovies = []

    commands.forEach(command => {
        if (command.includes(addMovieCmd)) {
            let movieName = command.replace(addMovieCmd, "")
            constructedMovies.push({ name: movieName })

        } else if (command.includes(directedByCmd)) {
            const movieDetails = command.split(directedByCmd)
            const movieName = movieDetails[0]
            const movieDirector = movieDetails[1]
            let movie = getMovie(movieName)

            if (movie) {
                movie.director = movieDirector
            }

        } else if (command.includes(onDateCmd)) {
            const movieDetails = command.split(onDateCmd)
            const movieName = movieDetails[0]
            const movieDate = movieDetails[1]
            let movie = getMovie(movieName)

            if (movie) {
                movie.date = movieDate
            }
        }
    });

    constructedMovies.forEach(movie => {
        if (movie.name && movie.director && movie.date) {
            console.log(JSON.stringify(movie));
        }
    });

    function getMovie(movieName) {
        return constructedMovies.find(movie => movie.name === movieName)
    }
}

solve([
'addMovie Fast and Furious',
'addMovie Godfather',
'Inception directedBy Christopher Nolan',
'Godfather directedBy Francis Ford Coppola',
'Godfather onDate 29.07.2018',
'Fast and Furious onDate 30.07.2018',
'Batman onDate 01.08.2018',
'Fast and Furious directedBy Rob Cohen'
]
)