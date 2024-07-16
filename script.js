'use strict';

const numberOfFilms = +prompt('How many films have you already watched?', '');

const personalMovieDataBase = {
      count: numberOfFilms,
      movies: {},
      actors: {},
      genres: [],
      private: false
};

const firstQuestion = prompt('One of the last movies you watched?', ''),
      secondQuestion = prompt('How would you rate it?', ''),
      thirdQuestion = prompt('One of the last movies you watched?', ''),
      fourthQuestion = prompt('How would you rate it?', '');

personalMovieDataBase.movies[firstQuestion] = secondQuestion;
personalMovieDataBase.movies[thirdQuestion] = fourthQuestion;

console.log(personalMovieDataBase);