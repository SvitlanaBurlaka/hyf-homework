// Movies exercise
const badMovies = [];
const badMovies2000 = [];

fetch(
        "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json"
    )
    .then((response) => response.json())
    .then((data) => {
        data.forEach((element) => {
            if (element.rating < 5) {
                badMovies.push(element);
            }
            if (element.year > 2000 && element.rating < 5) {
                badMovies2000.push(element);
            }
        });
    })
    .then(() => {
        console.log(badMovies);
        console.log(badMovies2000);
    });

// Promise that resolves after set time
function resolveAfterFunction(resolveAfter) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve();
        }, resolveAfter * 1000);
    });
}

resolveAfterFunction(2).then(() => {
    console.log("I am called asynchronously");
});

// When you have written the promise, use it with async/await
(async function() {
    await resolveAfterFunction(3);
    console.log("I am called asynchronously async");
})();

// Rewrite time

function setTimeoutPromise(resolveAfterSeconds) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve();
        }, resolveAfterSeconds);
    });
}

setTimeoutPromise(3000).then(() => {
    console.log("Called after 3 seconds");
});

function getCurrentLocation() {
    return new Promise(function(resolve, reject) {
        navigator.geolocation.getCurrentPosition(
            (currentPosition) => {
                resolve({
                    latitude: currentPosition.coords.latitude,
                    longitude: currentPosition.coords.longitude,
                });
            },
            (error) => reject(error.message)
        );
    });
}

getCurrentLocation()
    .then((position) => {
        console.log(position);
    })
    .catch((error) => {
        console.log(error);
    });

// Fetching and waiting

// Wait 3 seconds
// After 3 seconds fetch some data from any api you like
// Log out the data from the api

setTimeoutPromise(3000)
    .then(() => fetch("https://www.swapi.tech/api/people/"))
    .then((response) => response.json())
    .then((data) => console.log(data));

(async function() {
    await setTimeoutPromise(3000);
    const response = await fetch("https://www.swapi.tech/api/people/");
    const data = await response.json();
    console.log(data);
})();