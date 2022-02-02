// Doubling of number
// let numbers = [1, 2, 3, 4];
// let newNumbers = [];

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 !== 0) {
//         newNumbers[i] = numbers[i] * 2;
//     }
// }

// console.log("The doubled numbers are", newNumbers); // [2, 6]

const numbers = [1, 2, 3, 4];

const doubledOddNumbers = numbers
    .filter((item) => item % 2 !== 0)
    .map((item) => item * 2);
console.log(doubledOddNumbers);

// Working with movies

// Movies with a short title

const moviesWithAShortTitle = movies.filter((item) => item.title.length < 3);
console.log(moviesWithAShortTitle);

// An array of movie titles with long movie titles

const moviesLongTitles = movies
    .filter((item) => item.title.length > 60)
    .map((item) => item.title);

console.log(moviesLongTitles);

// Count the number of movies made between 1980-1989 (including both the years)

const moviesFromEighties = movies.filter(
    (movie) => movie.year <= 1989 && movie.year >= 1980
).length;

console.log(moviesFromEighties);

// Create a new array that has an extra key called tag.
//  The tag is based on the rating: Good (>= 7), Average (>= 4 and < 7), Bad (< 4)

const moviesRating = movies.map((item) => {
    if (item.rating >= 7) {
        item.tag = "Good";
        return item;
    } else if (item.rating >= 4 && item.rating < 7) {
        item.tag = "Average";
        return item;
    } else {
        item.tag = "Bad";
        return item;
    }
});
console.log(moviesRating);

// Using chaining, first filter the movies array to only contain the movies rated higher than 6.
// Now map the movies array to only the rating of the movies.

const goodRating = movies
    .filter((movie) => movie.rating > 6)
    .map((movie) => movie.rating);
console.log(goodRating);

// Count the total number of movies containing any of following keywords: Surfer, Alien or Benjamin.
// So if there were 3 movies that contained Surfer, 1 with Alien and 2 with Benjamin, you would return 6.
//  Can you make sure the search is case insensitive?

const counterMovies = movies.reduce((result, item) => {
    if (
        item.title.toLowerCase().includes("surfer") ||
        item.title.toLowerCase().includes("alien") ||
        item.title.toLowerCase().includes("benjamin")
    ) {
        return (result += 1);
    } else {
        return result;
    }
}, 0);

console.log(counterMovies);

// Calculate the average rating of all the movies using reduce.Optional

const averageRatingLength = movies.map((movie) => movie.rating).length;

const averageRating =
    movies
    .map((movie) => movie.rating)
    .reduce((result, rating) => {
        return result + rating;
    }, 0) / averageRatingLength;

console.log(averageRating);

// Create an array of movies where a word in the title is duplicated.Fx "Star Wars: The Clone Wars"
// the word Wars is duplicated.

const dublicateWords = movies.filter((movie) => {
    const alreadySeen = [];
    const words = movie.title.toLowerCase().split(" ");
    let result = false;
    words.forEach((word) => {
        if (alreadySeen.includes(word)) {
            result = true;
        } else {
            alreadySeen.push(word);
        }
    });
    return result;
});

console.log(dublicateWords);
// Count the total number of Good, Average and Bad movies using reduce.
// A return could fx be {goodMovies: 33, averageMovies: 45, goodMovies: 123} Optional
const newRating = movies.reduce(
    (objectWitRating, movie) => {
        if (movie.rating >= 7) {
            objectWitRating.goodMovies += 1;
        } else if (movie.rating >= 4 && movie.rating < 7) {
            objectWitRating.averageMovies += 1;
        } else {
            objectWitRating.badMovies += 1;
        }
        return objectWitRating;
    }, {
        goodMovies: 0,
        averageMovies: 0,
        badMovies: 0,
    }
);

console.log(newRating);