// variables
let count = 9;
let movies = ["DDLJ", "Jurassic Park", "Satya", "Gangs", "Godfather"];
let newMovie = "";
// elements
const countEl = document.getElementById("count");
const addBtnEl = document.getElementById("add__btn");
const subBtnEl = document.getElementById("sub__btn");
const moviesEl = document.getElementById("movies");
const inputMovieEl = document.querySelector(".input__movie");

// actions
const incrementCount = () => {
  count++;
  countEl.innerHTML = count;
};
function decrementCount() {
  count--;
  countEl.innerHTML = count;
}
const displayAllMovies = () => {
  moviesEl.innerHTML = "";
  inputMovieEl.value = newMovie;
  movies.map((movie) => {
    let singleMovieEl = document.createElement("li");
    singleMovieEl.textContent = movie;
    moviesEl.appendChild(singleMovieEl);
  });
};
const handleInputEvent = (e) => {
  if (e.key == "Enter") {
    addMovie(newMovie);
  } else {
    newMovie = e.target.value;
  }
};

function addMovie(newMovie) {
  movies.push(newMovie);
  displayAllMovies();
  newMovie = "";
  inputMovieEl.value = newMovie;
}

//events
document.addEventListener("DOMContentLoaded", () => {
  countEl.textContent = count;
  displayAllMovies();
});
addBtnEl.addEventListener("click", incrementCount);
subBtnEl.addEventListener("click", decrementCount);
inputMovieEl.addEventListener("keyup", handleInputEvent);
