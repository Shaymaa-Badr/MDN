import { movResults, getAllMoviesApi, allMovies } from "./apiModule.js";

let searchAll = document.querySelector("#searchAll");
let searchCategory = document.querySelector("#searchCategory");

searchAll.addEventListener("keyup", searchAllMovies);
searchCategory.addEventListener("keyup", searchMoviesCategory);

export function searchAllMovies() {
  let val = searchAll.value.toLowerCase();
  getAllMoviesApi(val);
  let container = "";
  allMovies.forEach((element) => {
    if (element.title.toLowerCase().includes(val)) {
      container += `<div class="col-lg-4 col-md-6">
      <div class="moviePost position-relative overflow-hidden rounded mt-4">
        <div class="movieImg">
          <img
            src="https://image.tmdb.org/t/p/w500/${element.poster_path}"
            class="img-fluid"
          />
        </div>
        <div
          class="movieLayer position-absolute d-flex align-items-center justify-content-center w-100 text-center"
        >
          <div class="movieInfo">
            <h3 class="movieTitle mb-3">${element.original_title}</h3>
            <p class="overview px-2">
            ${element.overview}
            </p>
            <p class="rate">  ${element.vote_average}</p>
            <p class="release_date">${element.release_date}</p>
          </div>
        </div>
      </div>
    </div>`;
    }
  });
  document.querySelector("#moviesRow").innerHTML = container;
}

export function searchMoviesCategory(e) {
  let container = "";
  movResults.forEach((element) => {
    if (element.title.toLowerCase().includes(e.target.value.toLowerCase())) {
      container += `<div class="col-lg-4">
          <div class="moviePost position-relative overflow-hidden rounded mt-4">
            <div class="movieImg">
              <img
                src="https://image.tmdb.org/t/p/w500/${element.poster_path}"
                class="img-fluid"
              />
            </div>
            <div
              class="movieLayer position-absolute d-flex align-items-center justify-content-center w-100 text-center"
            >
              <div class="movieInfo">
                <h3 class="movieTitle mb-3">${element.original_title}</h3>
                <p class="overview px-2">
                ${element.overview}
                </p>
                <p class="rate">  ${element.vote_average}</p>
                <p class="release_date">${element.release_date}</p>
              </div>
            </div>
          </div>
        </div>`;
    }
  });
  document.querySelector("#moviesRow").innerHTML = container;
}
