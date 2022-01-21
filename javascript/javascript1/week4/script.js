// Voice assistant

let names = [];

let toDoList = [];

let nameOfSpeaker = "";
let activitiesToDo = "";

const months = {
    0: "January",
    1: "February",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "August",
    8: "September",
    9: "October",
    10: "November",
    11: "December",
};

let operation;
let result = "";

let booksToRead = {
    0: "The Great Gatsby by F. Scott Fitzgerald",
    1: "Don Quixote by Miguel de Cervantes",
    2: "Alice's Adventures in Wonderland by Lewis Carroll",
    3: "The Stories of Anton Chekhov by Anton Chekhov",
    4: "A Christmas Carol by Charles Dickens",
};

function getReply(command) {
    if (command.indexOf("My name is") !== -1) {
        const firstCommand = "My name is ";
        nameOfSpeaker = command.slice(firstCommand.length, command.length);

        if (names.includes(nameOfSpeaker)) {
            console.log("You already declared this name");
        } else {
            names.push(nameOfSpeaker);
            console.log("Nice to meet you " + nameOfSpeaker);
        }
    }
    if (command.indexOf("What is my name?") !== -1) {
        if (nameOfSpeaker.length > 0) {
            console.log("Your name is " + nameOfSpeaker);
        } else {
            console.log("Please introduse yourself");
        }
    }
    if (command.indexOf("Add") !== -1 && command.indexOf("to my todo") !== -1) {
        activitiesToDo = command.replace("Add ", "");
        activitiesToDo = activitiesToDo.replace(" to my todo", "");
        toDoList.push(activitiesToDo);
        console.log(activitiesToDo + " added to your todo");
    }
    if (
        command.indexOf("Remove") !== -1 &&
        command.indexOf("from my todo") !== -1
    ) {
        activitiesToDo = command.replace("Remove ", "");
        activitiesToDo = activitiesToDo.replace(" from my todo", "");
        if (toDoList.includes(activitiesToDo)) {
            toDoList.splice(toDoList.indexOf(activitiesToDo), 1);
            console.log("Removed " + activitiesToDo + " from your todo");
        } else {
            console.log("I cant find this activiti in your todo");
        }
    }
    if (command.indexOf("What is on my todo?") !== -1) {
        console.log(toDoList);
    }
    if (command.indexOf("What day is it today?") !== -1) {
        const d = new Date();
        const date = d.getDate();
        const monthsIndex = d.getMonth();
        const monthName = months[monthsIndex];
        const years = d.getFullYear();
        console.log(date + " of " + monthName + " " + years);
    }
    if (
        command.indexOf("What is") !== -1 &&
        (command.indexOf("+") !== -1 ||
            command.indexOf("-") !== -1 ||
            command.indexOf("*") !== -1 ||
            command.indexOf("/") !== -1)
    ) {
        const secondCommand = "What is ";
        operation = command.slice(secondCommand.length, command.length);

        let numArr = operation.match(/\d+/g);

        let num1 = parseInt(numArr[0]);
        let num2 = parseInt(numArr[1]);

        operation = operation.slice(
            operation.indexOf(" ") + 1,
            operation.indexOf(" ") + 2
        );

        switch (operation) {
            case "+":
                console.log((result = num1 + num2));
                break;
            case "-":
                console.log((result = num1 - num2));
                break;
            case "*":
                console.log((result = num1 * num2));
                break;
            case "/":
                console.log((result = num1 / num2));
                break;
        }
    }
    if (command.indexOf("Set a timer for 1 minutes") !== -1) {
        let neededMinutes = command.match(/\d+/g);
        neededMinutes = parseInt(neededMinutes);

        function timerDone() {
            console.log("Timer done");
        }

        setTimeout(timerDone, neededMinutes * 60 * 1000);
    }
    if (command.indexOf("What are") !== -1 && command.indexOf("read") !== -1) {
        console.log(booksToRead);
    }
}

getReply("My name is Benjamin");
getReply("My name is Benjamin");
getReply("What is my name?");
getReply("Add fishing to my todo");
getReply("Add singing in the shower to my todo");
getReply("Remove fishing from my todo");
getReply("What is on my todo?");
getReply("Remove cooking from my todo");
getReply("What day is it today?");
getReply("What is 3 + 5?");
getReply("Set a timer for 1 minutes");
getReply("What are 5 books everyone should read?");