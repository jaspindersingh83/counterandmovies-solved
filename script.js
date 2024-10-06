// variables
let count = 9;
let movies = ["Sholay", "DDLJ", "Fanna", "Satya", "13 Juror"];

//Elements
const counter = document.getElementById("counter");
const addButton = document.getElementById("add-btn");
const subButton = document.getElementById("sub-btn");
const moviesel = document.getElementById("movies");
const inputEl = document.querySelector(".input-movie");

//Actions
const decrement = () => {
  count--;
  counter.textContent = count;
};
const increment = () => {
  count++;
  counter.textContent = count;
};

const addMovie = () => {
  let movie = inputEl.value.trim();
  if (movie.length > 0) {
    movies.push(movie);
  }
  displayAllMovies();
  inputEl.value = "";
};

const displayAllMovies = () => {
  moviesel.innerHTML = "";
  movies.map((movie, idx) => {
    const movieEl = document.createElement("li");
    movieEl.textContent = movie;
    moviesel.appendChild(movieEl);
  });
};

document.addEventListener("DOMContentLoaded", function () {
  counter.textContent = count;
  displayAllMovies();
});

addButton.addEventListener("click", increment);
subButton.addEventListener("click", decrement);

inputEl.addEventListener("keydown", (event) => {
  if (event.key == "Enter") {
    event.preventDefault();
    addMovie();
  }
});
