export class Movie {
    constructor(title, director, year, score) {
        this.title = title;
        this.director = director;
        this.year = year;
        this.score = score;
    }

    Render(parent) {
        const card = document.createElement('article');
        card.className = 'movie-card';

        if (this.score >= 8) {
            card.classList.add('top-rated');
        }

        const title = document.createElement('h2');
        title.textContent = `${this.score >= 8 ? '★ ' : ''}${this.title}`;

        const director = document.createElement('p');
        director.textContent = `Dirección: ${this.director}`;

        const year = document.createElement('p');
        year.textContent = `Año: ${this.year}`;

        const score = document.createElement('p');
        score.textContent = `Puntuación: ${this.score}/10`;

        card.append(title, director, year, score);
        parent.appendChild(card);
    }
}