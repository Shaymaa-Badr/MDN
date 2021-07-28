// Fetch api url
import { url } from './apiChangeModule.js';

export let movResults = [];
export let allMovies = [];

export async function getMoviesApis() {
  let response = await fetch(url);
  let res = await response.json();
  movResults = await res.results;
  displayMovies();
}

export async function getAllMoviesApi(searchValue) {
  let response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=eba8b9a7199efdcb0ca1f96879b83c44&query=${searchValue}`
  );
  let res = await response.json();
  allMovies = await res.results;
}
// Display items
function displayMovies() {
  let container = '';
  for (let i = 0; i < movResults.length; i++) {
    container += `<div class="col-lg-4 col-md-6">
      <div class="moviePost position-relative overflow-hidden rounded mt-4">
        <div class="movieImg">
          <img
            src="https://image.tmdb.org/t/p/w500/${movResults[i].poster_path}"
            class="img-fluid"
          />
        </div>
        <div
          class="movieLayer position-absolute d-flex align-items-center justify-content-center w-100 text-center"
        >
          <div class="movieInfo">
            <h3 class="movieTitle mb-3">${movResults[i].original_title}</h3>
            <p class="overview px-2">
            ${movResults[i].overview}
            </p>
            <p class="rate">  ${movResults[i].vote_average}</p>
            <p class="release_date">${movResults[i].release_date}</p>
          </div>
        </div>
      </div>
    </div>`;
  }
  document.querySelector('#moviesRow').innerHTML = container;
}
