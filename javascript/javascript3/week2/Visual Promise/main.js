const redBox = document.querySelector("ul.marks li:nth-child(1)");
const blueBox = document.querySelector("ul.marks li:nth-child(2)");
const greenBox = document.querySelector("ul.marks li:nth-child(3)");

// This code will move the li to the position 100, 100. Calling moveElement will return a promise that resolves after the li element has been moved.
// moveElement(document.querySelector("li"), { x: 100, y: 100 }).then(() => {
//     console.log("Element has been moved");
// });

function translateOneByOne() {
    moveElement(redBox, { x: 20, y: 300 })
        .then(() => console.log("Red box is moved"))
        .then(() => moveElement(blueBox, { x: 400, y: 300 }))
        .then(() => console.log("Blue box is moved"))
        .then(() => moveElement(greenBox, { x: 400, y: 20 }))
        .then(() => console.log("Boxes are moved"));
}
// translateOneByOne();

function translateAllAtOnce() {
    Promise.all([
        moveElement(redBox, { x: 20, y: 300 }),
        moveElement(blueBox, { x: 400, y: 300 }),
        moveElement(greenBox, { x: 400, y: 20 }),
    ]).then(() => console.log("Boxes are moved"));
}
translateAllAtOnce();