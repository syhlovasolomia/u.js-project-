const numberOfFilms = +prompt('How many films have you already watched?', '');

const personalMovieDataBase = {
      count: numberOfFilms,
      movies: {},
      actors: {},
      genres: [],
      private: false
};

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

console.log(personalMovieDataBase);