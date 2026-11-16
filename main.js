import { Movie } from './movie.js';

class Main
{
    constructor()
    {
        this.movieHolder = document.getElementById('movie-holder');
        this.movies = [];
    }

    async initialize()
    {
        const moviesFile = await fetch('./movies.json');
        const moviesData = await moviesFile.json();

        moviesData.forEach((movieData) =>
        {
            const movie = new Movie(
                movieData.title,
                movieData.director,
                movieData.year,
                movieData.score
            );

            this.movies.push(movie);
        });

        this.movies.forEach((movie) =>
        {
            movie.Render(this.movieHolder);
        });
    }
}

const app = new Main();
app.initialize();
