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
console.log("The doubled numbers are " + doubledOddNumbers);

// Working with movies

//1. Movies with a short title

const moviesWithAShortTitle = movies.filter((item) => item.title.length < 3);
console.log(moviesWithAShortTitle);

// 2. An array of movie titles with long movie titles

const moviesWithALongTitles = movies
    .filter((item) => item.title.length > 60)
    .map((item) => item.title);

console.log(moviesWithALongTitles);

// 3. Count the number of movies made between 1980-1989 (including both the years)

const moviesFromEighties = movies.filter(
    (movie) => movie.year <= 1989 && movie.year >= 1980
).length;

console.log(moviesFromEighties);

// 4. Create a new array that has an extra key called tag.
//  The tag is based on the rating: Good (>= 7), Average (>= 4 and < 7), Bad (< 4)

const newTag = movies.map((item) => {
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
console.log(newTag);

// 5. Using chaining, first filter the movies array to only contain the movies rated higher than 6.
// Now map the movies array to only the rating of the movies.

const moviesWithHighRating = movies
    .filter((movie) => movie.rating > 6)
    .map((movie) => movie.rating);
console.log(moviesWithHighRating);

// 6. Count the total number of movies containing any of following keywords: Surfer, Alien or Benjamin.
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

// 7. Create an array of movies where a word in the title is duplicated.Fx "Star Wars: The Clone Wars"
// the word Wars is duplicated.

const findDublicateWords = movies.filter((movie) => {
    const alreadySeen = [];
    const wordsInTitle = movie.title.toLowerCase().split(" ");
    let result = false;
    wordsInTitle.forEach((word) => {
        if (alreadySeen.includes(word)) {
            result = true;
        } else {
            alreadySeen.push(word);
        }
    });
    return result;
});

console.log(findDublicateWords);

// 8. Calculate the average rating of all the movies using reduce.Optional

const averageRatingsLength = movies.map((movie) => movie.rating).length;

const averageRating =
    movies
    .map((movie) => movie.rating)
    .reduce((result, rating) => {
        return result + rating;
    }, 0) / averageRatingsLength;

console.log(averageRating);

// 9. Count the total number of Good, Average and Bad movies using reduce.
// A return could fx be {goodMovies: 33, averageMovies: 45, goodMovies: 123} Optional
const countTotalNumberOfRating = movies.reduce(
    (objectWitRatings, movie) => {
        if (movie.rating >= 7) {
            objectWitRatings.goodMovies += 1;
        } else if (movie.rating >= 4 && movie.rating < 7) {
            objectWitRatings.averageMovies += 1;
        } else {
            objectWitRatings.badMovies += 1;
        }
        return objectWitRatings;
    }, {
        goodMovies: 0,
        averageMovies: 0,
        badMovies: 0,
    }
);

console.log(countTotalNumberOfRating);