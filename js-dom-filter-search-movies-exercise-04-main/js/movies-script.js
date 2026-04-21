"use strict";

// Array med liste af udstillinger

// Her opretter jeg et array med objekter.
// Hvert objekt repræsenterer en udstilling med information om navn, datoer, placering, periode og beskrivelse.
const movies = [
  {
    id: 1,
    titel: "Inception",
    genre: "science-fiction",
    year: 2010,
    duration: 2.28,
    img: "img/inception.webp",
    url: "https://www.imdb.com/title/tt1375666/",
  },

  {
    id: 2,
    titel: "The Dark Knight",
    genre: "action",
    year: 2008,
    duration: 2.32,
    img: "img/the-dark-knight.webp",
    url: "https://www.imdb.com/title/tt0468569/",
  },

  {
    id: 3,
    titel: "Forrest Gump",
    genre: "drama",
    year: 1994,
    duration: 2.22,
    img: "img/forrest-gump.webp",
    url: "https://www.imdb.com/title/tt0109830/",
  },

  {
    id: 4,
    titel: "Superbad",
    genre: "comedy",
    year: 2007,
    duration: 1.53,
    img: "img/superbad.webp",
    url: "https://www.imdb.com/title/tt0829482/",
  },

  {
    id: 5,
    titel: "It",
    genre: "horror",
    year: 2017,
    duration: 2.15,
    img: "img/it.webp",
    url: "https://www.imdb.com/title/tt1396484/",
  },
  {
    id: 6,
    titel: "The Hangover",
    genre: "comedy",
    year: 2009,
    duration: 1.4,
    img: "img/the-hangover.webp",
    url: "https://www.imdb.com/title/tt1119646/",
  },
  {
    id: 7,
    titel: "The Conjuring",
    genre: "horror",
    year: 2013,
    duration: 1.52,
    img: "img/the-conjuring.webp",
    url: "https://www.imdb.com/title/tt1457767/",
  },
  {
    id: 8,
    titel: "Interstellar",
    genre: "science-fiction",
    year: 2014,
    duration: 2.55,
    img: "img/interstellar.jpg",
    url: "https://www.imdb.com/title/tt0816692/",
  },
  {
    id: 9,
    titel: "The Matrix",
    genre: "science-fiction",
    year: 1999,
    duration: 3.02,
    img: "img/the-matrix.webp",
    url: "https://www.imdb.com/title/tt0133093/",
  },
  {
    id: 10,
    titel: "Pulp Fiction",
    genre: "drama",
    year: 1994,
    duration: 1.39,
    img: "img/pulp-fiction.webp",
    url: "https://www.imdb.com/title/tt0110912/",
  }
];

// VARIABLER

// Opretter variabel som henter eller peger på id="exhibitions-container ihtml
const moviesContainer = document.querySelector("#movies-container");

// Henter de HTML, vi skal arbejde med og gemmer dem i nogle variabler
const selectedCategory = document.querySelector("#category-select");
const searchInput = document.querySelector("#gsearch");
const form = document.querySelector("form");

// FILTRERING

function filterMovies() {
  // henter den valgte periode (kategori) fra drop-down
  const selectedValue = selectedCategory.value;

  // Henter søge-teksten fra søgefeltet og laver indholdet om til små bogstaver og fjerner mellemrum før og efter søgeteksten
  const searchTerm = searchInput.value.toLowerCase().trim();

  // Vi starter med alle udstillinger fra listen (exhibitions)
  let filteredMovies = movies;

  // Alle betyder alle perioder
  // Vi filtrerer kun hvis brugeren har valgt noget andet end alle
  if (selectedValue != "alle") {
    filteredMovies = filteredMovies.filter((item) => {
      return item.genre === selectedValue;
    });
  }

  if (searchTerm != "") {
    filteredMovies = filteredMovies.filter((item) => {
      return item.titel.toLowerCase().includes(searchterm);
    });
  }

  displayMovies(filteredMovies);
}

// DISPLAY

function displayMovies(movieList) {
  // Her opbygger vi et nyt array med map() baseret på vores exhibition liste
  const html = movieList.map((item) => {
      return `
    <div class="movie-card">
        <article>
            <h2>${item.titel}</h2>
            <ul>
                <li>${item.genre}</li>
                <li>${item.year}</li>
                <li>${item.duration}</li>
            </ul>
            <figure>
                <a href="${item.url}" target="_blank" rel="noopener noreferrer">
                    <img src="${item.img}" alt="${item.titel}">
                </a>
                <figcaption>${item.titel}</figcaption>
            </figure>
        </article>
        </div>
    `;
    }).join(""); //Her samler vi det hele med join("") til én samlet HTML-streng
  moviesContainer.innerHTML = html;
}

displayMovies(movies);

selectedCategory.addEventListener("change", filterMovies);

searchInput.addEventListener("input", filterMovies);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  filterMovies();
});