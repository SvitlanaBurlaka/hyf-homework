// 1. Programming Basic

const dishes = [
    "Spaghetti",
    "Lasagne",
    "Beans on toast",
    "Porridge",
    "Tomato soup",
    "Salmon",
];

for (let i = 0; i < dishes.length; i++) {
    console.log(dishes[i]);
}

// Dom manupulation
const button = document.createElement("button");
document.body.appendChild(button);

button.addEventListener("click", myFunction);

function myFunction() {
    const hTag = document.createElement("h");
    hTag.innerText = "Javascript test";
    document.body.appendChild(hTag);
}

// Async API calls

const pTag1 = document.createElement("p");
const pTag2 = document.createElement("p");
const pTag3 = document.createElement("p");
fetch("https://reqres.in/api/users")
    .then((response) => response.json())
    .then((data) => {
        pTag1.innerText = data.data[0].first_name;
        pTag2.innerText = data.data[1].first_name;
        pTag3.innerText = data.data[2].first_name;
        document.body.appendChild(pTag1);
        document.body.appendChild(pTag2);
        document.body.appendChild(pTag3);
        console.log(data.data[0].first_name);
    });

// Class
class Person {
    constructor(firstName) {
        this.firstName = firstName;
    }
    sayHello(firstName) {
        console.log(`Hello, my name is ${firstName}`);
    }
}

const peter = new Person("peter");
peter.sayHello("peter");