import { getMoviesApis } from './apiModule.js';
export let url =
  'https://api.themoviedb.org/3/movie/now_playing?api_key=eba8b9a7199efdcb0ca1f96879b83c44';

let sideNavLinks = document.querySelectorAll('.navCategory');

export function getMediaType() {
  for (let i = 0; i < sideNavLinks.length; i++) {
    sideNavLinks[i].addEventListener('click', function (e) {
      e.preventDefault();
      url = `https://api.themoviedb.org/3/movie/${e.target.id}?api_key=eba8b9a7199efdcb0ca1f96879b83c44`;
      getMoviesApis();
    });
  }
}

let trending = document.querySelector('#trending');
export function getTrendingMovies() {
  trending.addEventListener('click', function () {
    url = `https://api.themoviedb.org/3/trending/movie/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44`;
    getMoviesApis();
  });
}
