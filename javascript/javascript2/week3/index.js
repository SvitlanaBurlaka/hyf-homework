// Warmup
// 1.Log out the text Called after 2.5 seconds 2.5 seconds after the script is loaded.

setTimeout(function() {
    console.log("Called after 2.5 seconds");
}, 2500);

// 2.

function myFunction(delay, stringToLog) {
    setTimeout(() => {
        console.log(stringToLog);
    }, delay * 1000);
}

myFunction(5, "This string logged after 5 seconds");
myFunction(3, "This string logged after 3 seconds");

// 3.
const button = document
    .querySelector("button")
    .addEventListener("click", () => myFunction(5, "Called after 5 seconds"));

// 4.
const earth = () => console.log("Earth");

const saturn = () => console.log("Saturn");

function planetLogFunction(planetFunction) {
    planetFunction();
}
planetLogFunction(earth);
planetLogFunction(saturn);

// 5.
let latitude;
let longitude;
const locationButton = document.querySelector(".locationButton");
let currentLocation = document.querySelector(".position ");

locationButton.addEventListener("click", function() {
    navigator.geolocation.getCurrentPosition(function(geolocationPosition) {
        longitude = geolocationPosition.coords.longitude;
        latitude = geolocationPosition.coords.latitude;
        currentLocation.innerText = `This is the longitude : ${longitude}. This is the latitude: ${latitude}`;
        initMap();
    });
});
// 6

let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: latitude, lng: longitude },
        zoom: 13,
    });
}
// 7.

function runAfterDelay(delay, callback) {
    setTimeout(() => callback(), delay * 1000);
}
runAfterDelay(4, () => console.log("should be logged after 4 seconds"));
runAfterDelay(7, () => console.log("should be logged after 7 seconds"));

// 8.

const page = document
    .querySelector("body")
    .addEventListener("dblclick", () => console.log("double click!"));

//9

const goodJoke = "This is a good joke";
const badJoke = "This is a bad joke";

function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {
    if (shouldTellFunnyJoke) {
        logFunnyJoke();
    } else {
        logBadJoke();
    }
}

jokeCreator(
    true,
    () => console.log(goodJoke),
    () => console.log(badJoke)
);

// Function as a variable

// Create an array with 3 items.All items should be functions.
// Iterate through the array and call all the functions.

const arrayOfFunctions = [
    function sayHello() {
        console.log("Hello!");
    },
    function sayName() {
        console.log("My name is Svitlana.");
    },
    function sayContryWhereLive() {
        console.log("I live in Denmark.");
    },
];

for (let i = 0; i < arrayOfFunctions.length; i++) {
    const allFunctions = arrayOfFunctions[i];
    allFunctions();
}

// Create a function as a const and
// try creating a function normally. Call both functions.

function calcAge1(birthYear) {
    return 2040 - birthYear;
}

console.log(calcAge1(1997));

const calcAge2 = (birthYear) => 2040 - birthYear;

console.log(calcAge2(1991));

// Create an object that has a key whose value is a
// function.Try calling this function.

const objWithFunction = {
    firstFunction: function squreNumbers(num) {
        return num * num;
    },
};

console.log(objWithFunction.firstFunction(2));