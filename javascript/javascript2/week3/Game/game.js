// Getting value from input and adding an eventlistener
const button = document.getElementById("startButton");
let inputValue;

let message = document.querySelector(".message"); // Creating a message string for different messages on page

button.addEventListener("click", function func() {
    inputValue = document.getElementById("input").value;
    if (inputValue === "") {
        message.innerText = "Oops! Remember to set a time!";
    } else {
        setTimeout(() => {
            findAWinner();
        }, inputValue * 1000);
    }
});

// Creating a counter for pressed letters

let countS = 0;
let countL = 0;

const pTimesPressedS = document.querySelector(".resultS");
const pTimesPressedL = document.querySelector(".resultL");

const keyPress = document.addEventListener("keydown", function(event) {
    if (event.key === "s") {
        countS += 1;
        pTimesPressedS.innerText = countS;
    }
    if (event.key === "l") {
        countL += 1;
        pTimesPressedL.innerText = countL;
    }
});

// Adding confetti

// Confetti for L-side
let confettiElementL = document.getElementById("my-canvasLSide");
let confettiSettingsL = { target: "my-canvasLSide" };
let confettiL = new ConfettiGenerator(confettiSettingsL);

// Confetti for S-side
let confettiElementS = document.getElementById("my-canvasSide");
let confettiSettingsS = { target: "my-canvasSide" };
let confettiS = new ConfettiGenerator(confettiSettingsS);
// When i run the game once  konfetti is working perfectly, and then  I press the button
// "Restart game" and run the game again,
//  for the second time my confetti-animation is freezing.

// Function to get winner
function findAWinner() {
    if (countL > countS) {
        confettiL.render();
        scoreNumber++;
        score.innerText = scoreNumber;
    } else if (countL < countS) {
        confettiS.render();
    } else if (countL === countS && countL > 0 && countS > 0) {
        message.innerText = "Congratulations! You are both winners!";
        confettiS.render();
        confettiL.render();
    } else {
        message.innerText = "Remember to press L and S!";
    }
}

// Extra features
// restarting game
const restartButton = document.getElementById("restartButton");

restartButton.addEventListener("click", function() {
    pTimesPressedS.innerText = "";
    pTimesPressedL.innerText = "";
    countL = 0;
    countS = 0;
    confettiS.clear();
    confettiL.clear();
});