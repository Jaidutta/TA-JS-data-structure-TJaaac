let movies = [
  {
    id: '1',
    title: 'Game Night',
    year: '2018',
    genres: ['Action', 'Comedy', 'Crime'],
    releaseDate: '2018-02-28',
    actors: ['Rachel McAdams', 'Jesse Plemons', 'Jason Bateman'],
  },
  {
    id: '2',
    title: 'Area X: Annihilation',
    year: '2018',
    genres: ['Adventure', 'Drama', 'Fantasy'],
    releaseDate: '2018-02-23',
    actors: ['Tessa Thompson', 'Jennifer Jason Leigh', 'Natalie Portman'],
  },
  {
    id: '3',
    title: 'Hannah',
    year: '2017',
    genres: ['Drama'],
    releaseDate: '2018-01-24',
    actors: ['Charlotte Rampling', 'Andr Wilms', 'Phanie Van Vyve'],
  },
];

/*
Go through the variable named movies properly before solving the exercises.
Use the variable named movies to solve the requirement below.
*/

// 1. Log the value of the title key in the first movie of the array named `movies`
console.log(movies[0].title)

// 2. Log the value of the title key in the last movie of the array named `movies`
console.log(movies[movies.length - 1].title);

// 3. Log the value of the title key in the second movie (index 1) of the array named `movies`
console.log(movies[1].title);

// 4. Log the value of the year key in the first movie of the array named `movies`
console.log(movies[0].year);

// 5. Log all the named of actors (key named actors) of the first movie
for(movie of movies[0].actors) {
  console.log(movie);
}

// 6. Log the name of the first actor of the first movie
console.log(movies[0].actors[0]);

// 7. Log the name of the last actor of the first movie
console.log(movies[0].actors[movies[0].actors.length - 1]);

// 8. Log the name of the second actor (index 1) of the first movie
console.log(movies[0].actors[1]);

// 9. Log the name of the second actor (index 1) of the second movie
console.log(movies[1].actors[1]);

// 10. Log the name of the last actor of the thrid movie
console.log(movies[2].actors[movies[2].actors.length -1]);

// 11. Log the name of the second actor (index 1) of the third movie
console.log(movies[2].actors[1]);

// 12. Log all the genres of the third movie
for(genre of movies[2].genres) {
  console.log(genre);
}

// 13. Log all the genres of the first movie
for(genre of movies[0].genres) {
  console.log(genre);
}

// 14. Log the first genres of the first movie
console.log(movies[0].genres[0]);

// 15. Log the first genres of the second movie
console.log(movies[1].genres[0]);

// 16. Log the last genres of the first movie (using the length property of array)
console.log(movies[0].genres[movies[0].genres.length - 1]);

// 17. Log the first genres of the second movie (using the length property of array)
console.log(movies[1].genres[0]);

// 18. Log all the genres of the first movie one by one
for(genre of movies[0].genres) {
  console.log(genre);
}

// 19. Log all the genres of the second movie one by one
for(genre of movies[1].genres) {
  console.log(genre);
}

// 20. Log if the first actor of the first movie is `Rachel McAdams` or not (You have to log true or false)
console.log(movies[0].actors[0] === 'Rachel McAdams');

// 21. Log if the second actor (index 1) of the second movie is `Natalie Portman` or not (You have to log true or false)
console.log(movies[1].actors[1] === 'Natalie Portman');

// 22. Log if the year of all three movies is greater than `2017` or not one by one. (Log true or false)
for(movie of movies) {
  console.log(Number(movie.year) > 2017);
}

// 23. Log the title of all three movies one by one.
for(movie of movies) {
  console.log(movie.title);
}
// 24. Log if the title of the first movie is `Hannah` or not
console.log(movies[0].title === 'Hannah');

// 25. Log the number of actors in all three movies one by one
for(movie of movies) {
  for(actor of movie.actors) {
    console.log(actor, 'actors');
  }
}
// 26. Log the number of genres in all three movies one by one
for(movie of movies) {
  console.log(movie.genres.length, 'mumber of genres');
}

// 27. Log the name of all the movies with more than 1 genre
for(movie of movies) {
  if(movie.genres.length > 1) {
    console.log(movie.title, 'movie with more than 1 genre');
  }
}
// 28. Log the name of all the movies with more than 1 actors
for(movie of movies) {
  if(movie.actors.length > 1) {
    console.log(movie.title, 'movie with more than 1 actor');
  }
}
// 29. Log the name of all the movies with exactly 3 actors
for(movie of movies) {
  if(movie.actors.length === 3) {
    console.log(movie, 'movie in which there are 3 actors');
  }
}

// 30. Log the name of all the movies with year `2018`
for(movie of movies) {
  if(Number(movie.year) === 2018) {
    console.log(movie);
  }
}

// 31. Store the title of all the movies in an array named 'allTitles'
const allTitles = [];
for(let movie of movies) { allTitles.push(movie.title)}
console.log(allTitles);

// 32. Store the genre of all the movies in an array named 'allGenres'
const allGenres = []
for(let movie of movies) { allGenres.push(movie.genres)}
console.log(allGenres);

// 33. Store the actors of all the movies in an array named 'allActors'
const allActors = []
for(let movie of movies) { allActors.push(movie.actors)}
console.log(allActors);

// 34. log the length of 'allTitles', 'allGenres', 'allActors'

console.log(allTitles.length, allGenres.length, allActors.length);