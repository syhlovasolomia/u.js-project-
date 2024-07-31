'use strict';

const personalMovieDataBase = {
      count: 0,
      movies: {},
      actors: {},
      genres: [],
      private: false,
      start: function () {
            personalMovieDataBase.count = +prompt('How many films have you already watched?', '');

            while (personalMovieDataBase.count == '' || personalMovieDataBase.count == null || isNaN(personalMovieDataBase.count)) {
                  personalMovieDataBase.count = +prompt('How many films have you already watched?', '');
            }
      },
      rememberMyfilms: function () {
            for (let i = 0; i < 2; i++) {
                  const firstQuestion = prompt('One of the last movies you watched?', '');
                  const secondQuestion = prompt('How would you rate it?', '');

                  if (firstQuestion != null && secondQuestion != null && firstQuestion !== '' && secondQuestion !== '' && firstQuestion.length < 50) {
                        personalMovieDataBase.movies[firstQuestion] = secondQuestion;
                        console.log('Done');
                  } else {
                        console.log('Type something!');
                        i--; // Повторити спробу, якщо введено некоректні дані
                  }
            }
      },
      detectPersonalLevel: function () {
            if (personalMovieDataBase.count < 10) {
                  console.log("Watched a few films");
            } else if (personalMovieDataBase.count >= 10 && personalMovieDataBase.count < 30) {
                  console.log("You are a classic viewer");
            }
            else if (personalMovieDataBase.count >= 30) {
                  console.log("You are a film lover");
            } else {
                  console.log("Error");
            }
      },
      showMyDataBase: function (hidden) {
            if (!hidden) {
                  console.log(personalMovieDataBase);
            }
      },
      toggleVisibleMyDataBase: function () {
            if (personalMovieDataBase.private) {
                  personalMovieDataBase.private = false;
            } else {
                  personalMovieDataBase.private = true;
            }
      },
      writeYourGenres: function () {
            for (let i = 1; i < 2; i++) {

                  let genres = prompt(`Enter your favorite genres separated by commas`).toLowerCase();

                  if (genres == '' || genres == null) {
                        console.log('You typed wrong data or did not type anything at all.');
                        i--;
                  } else {
                        personalMovieDataBase.genres = genres.split(', ');
                        personalMovieDataBase.genres.sort();
                  }
            }

            personalMovieDataBase.genres.forEach((item, i) => {
                  console.log(`Favoutire genre ${i + 1} - is ${item}`);
            });
      }
};