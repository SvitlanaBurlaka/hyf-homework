// Age-ify (A future age calculator)
let yearOfBirth = 1987;
let yearFuture = 2027;
let age = yearFuture - yearOfBirth;
console.log("You will be " + age + " years old in " + yearFuture);

// Goodboy-Oldboy (A dog age calculator)
let dogYearOfBirth = 2017;
let dogYearFuture = 2027;
let dogYear;
let shouldShowResultInDogYears = true;
let resultInHumanYears;
if (dogYear) {
    shouldShowResultInDogYears = (dogYearFuture - dogYearOfBirth) * 7;
    console.log(
        "Your dog will be " + shouldShowResultInDogYears + " dog years old in 2027"
    );
} else {
    resultInHumanYears = dogYearFuture - dogYearOfBirth;

    console.log(
        "Your dog will be " + resultInHumanYears + " human years old in 2027"
    );
}

//Housey pricey (A house price estimator)
let peterValue = [8, 10, 10, 100, "Peter"];

let juliaValue = [5, 11, 8, 70, "Julia"];

let housePrisePeters =
    peterValue[0] * peterValue[1] * peterValue[2] * 2.5 * 1000 +
    peterValue[3] * 300;
let housePriseJulias =
    juliaValue[0] * juliaValue[1] * juliaValue[2] * 2.5 * 1000 +
    juliaValue[3] * 300;

console.log(
    peterValue[4] +
    " price for house will be " +
    housePrisePeters +
    " and " +
    juliaValue[4] +
    " price for house will be " +
    housePriseJulias
);

// Ez Namey (Startup name generator) Optional
let firstWords = [
    "Success",
    "The Startup",
    "Awesome",
    "Creative",
    "Concept",
    "White",
    "Simple",
    "Fresh",
    "Art",
    "Easy",
];
let secondWords = [
    "Startup",
    "Story",
    "News",
    "Light",
    "Method",
    "Brand",
    "Collaboration",
    "Project",
    "Space",
    "Line",
];
let startupName =
    firstWords[Math.floor(Math.random() * 10)] +
    " " +
    secondWords[Math.floor(Math.random() * 10)];

console.log("The startup: " + startupName);