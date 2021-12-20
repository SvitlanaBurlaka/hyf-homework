// Flight booking fullname function
function getFullName(firstname, surname, useFormalName, gender) {
    if (useFormalName) {
        switch (gender) {
            case "male":
                return "Lord " + firstname + " " + surname;
                break;
            case "female":
                return "Lady " + firstname + " " + surname;
                break;
            default:
                return firstname + " " + surname;
        }
    }
    return firstname + " " + surname;
}

const fullName1 = getFullName("Benjamin", "Hughes", true, "male");
const fullName2 = getFullName("Frida", "Hughes", true, "female");
console.log(fullName1);
console.log(fullName2);

// Event application

const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Suturday",
];

function getEventWeekday(numberOfDay) {
    const todaysDate = new Date();
    let dayOfEvent = new Date();
    dayOfEvent.setDate(todaysDate.getDate() + numberOfDay);
    return weekdays[dayOfEvent.getDay()];
}

console.log(getEventWeekday(2));
// Weather wear

function showWhatToWear(temperature) {
    if (temperature < -5) {
        return "winter jacket and jeans, scarf ";
    } else if (temperature < 5) {
        return "winter jacket and jeans ";
    } else if (temperature > 10) {
        return "jacket, jeans and sneakers";
    } else {
        return "shorts and a t-shirt";
    }
}

const clothesToWear = showWhatToWear(-34);
console.log(clothesToWear);

// Student manager

const class07Students = ["Bob", "Willy", "Jon", "George"];

function addStudentToClass(studentName) {
    if (class07Students.includes(studentName)) {
        console.log("Student " + studentName + " is already in the class");
    } else if (studentName == "Queen") {
        class07Students.push(studentName);
    } else if (studentName == "") {
        console.log("Enter name");
    } else if (class07Students.length <= 6) {
        console.log("Cannot add more students to class 07");
    } else {
        class07Students.push(studentName);
    }
}

function getNumberOfStudents() {
    return class07Students.length;
}

addStudentToClass("Mathilda");
addStudentToClass("Samantha");
addStudentToClass("Svitlana");
addStudentToClass("Queen");

console.log(class07Students);