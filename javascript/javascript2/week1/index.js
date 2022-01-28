// Find the shortest word

const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];

function getShortestWord() {
    let shortest = 0;
    for (let i = 0; i < danishWords.length; i++) {
        if (danishWords[i].length < danishWords[shortest].length) {
            shortest = i;
        }
    }
    return danishWords[shortest];
}

shortest = getShortestWord();
console.log(shortest);

// Find and count the Danish letters

const uniqueLetter = ["å", "æ", "ø"];

function countLetters(str) {
    let result = { total: 0 };

    for (let i = 0; i < str.length; i++) {
        if (uniqueLetter.includes(str[i])) {
            result.total = result.total + 1;
            if (result.hasOwnProperty(str[i])) {
                result[str[i]] += 1;
            } else {
                result[str[i]] = 1;
            }
        }
    }
    return result;
}

const danishString = "Jeg har en blå bil";
console.log(countLetters(danishString));
const danishString2 = "Blå grød med røde bær";
console.log(countLetters(danishString2));
// Spirit animal name generator

let spiritAnimals = [
    "The Butterfly",
    "The Spider",
    "The Crow",
    "The Owl",
    "The Hummingbird",
    "The Hawk",
    "The Bear",
    "The Cat",
    "The Fox",
    " The Lion",
];

const button = document.querySelector(".myButton");
const input = document.querySelector(".nameInput");
const body = document.querySelector("body");
const newP = document.createElement("p");

button.addEventListener("click", function() {
    let random = spiritAnimals[Math.floor(Math.random() * spiritAnimals.length)];
    const name = document.querySelector(".nameInput").value;
    if (name === "") {
        alert("Please enter your name to get spirit animal name");
    } else {
        newP.innerText = "Your spirit animal name: " + name + "-" + random;
        body.appendChild(newP);
    }
});