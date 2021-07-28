import { getMoviesApis, getAllMoviesApi } from "./apiModule.js";
getMoviesApis();
getAllMoviesApi();
import { getMediaType, getTrendingMovies } from "./apiChangeModule.js";
getMediaType();
getTrendingMovies();

import * as validate from "./validationModule.js";
validate.validateName();
validate.validateEmail();
validate.validatePhone();
validate.validateAge();
validate.validatePassword();

import { searchMoviesCategory, searchAllMovies } from "./searchModule.js";
searchMoviesCategory();
searchAllMovies();

// Scroll to Contact section
let contact = document.querySelector(".contactUs");
let contactSection = document.querySelector(".contactUsForm");
contact.addEventListener("click", function (e) {
  e.preventDefault();
  contactSection.scrollIntoView({
    behavior: "smooth",
  });
});

// Side menu
$(".bars").click(() => {
  $(".sidebarMenu").animate(
    {
      left: "0px",
    },
    1000
  );
  $(".bars").hide();
  $(".close").show();

  $(".nowPlaying").animate(
    { opacity: "1", transition: "all linear", top: "0" },
    300
  );

  $(".popular").animate(
    { opacity: "1", transition: "all linear", top: "50px" },
    500
  );

  $(".trending").animate(
    { opacity: "1", transition: "all linear", top: "100px" },
    700
  );

  $(".topRated").animate(
    { opacity: "1", transition: "all linear", top: "150px" },
    900
  );

  $(".upComing").animate(
    { opacity: "1", transition: "all linear", top: "200" },
    1100
  );
  $(".contactUs").animate(
    { opacity: "1", transition: "all linear", top: "250" },
    1300
  );
});

$(".close").click(() => {
  $(".sidebarMenu").animate(
    {
      left: "-250px",
    },
    1000
  );
  $(".bars").show();
  $(".close").hide();
});
