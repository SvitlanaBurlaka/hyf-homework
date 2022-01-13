// Item array removal
const names = [
    "Peter",
    "Ahmad",
    "Yana",
    "kristina",
    "Rasmus",
    "Samuel",
    "katrine",
    "Tala",
];
const nameToRemove = "Ahmad";

for (let i = 0; i < names.length; i++) {
    if (names[i] === nameToRemove) {
        names.splice(i, 1);
    }
}
// delete names[1];

console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']

// When will we be there??
const travelInformation = {
    speed: 50,
    destinationDistance: 432,
    calcTime: function() {
        this.time = this.destinationDistance / this.speed;
        return this.time;
    },
};

console.log(
    Math.floor(travelInformation.calcTime()) +
    ` hours and ` +
    Math.floor(
        (travelInformation.calcTime() -
            Math.floor(travelInformation.calcTime())) *
        60
    ) +
    ` minutes`
); // 8 hours and 38 minutes

// Series duration of my life

const seriesDurations = [{
        title: "Game of thrones",
        days: 3,
        hours: 1,
        minutes: 0,
    },
    {
        title: "Sopranos",
        days: 3,
        hours: 14,
        minutes: 0,
    },
    {
        title: "The Wire",
        days: 2,
        hours: 12,
        minutes: 0,
    },
    {
        title: "Friends",
        days: 4,
        hours: 2,
        minutes: 20,
    },
];

const lifespan = 80 * (365 * 24 * 60);

function logOutSeriesText(seriesObject) {
    let days = seriesObject.days * 24 * 60;
    let hours = seriesObject.hours * 60;
    let minutes = seriesObject.minutes;
    let percentage = ((days + hours + minutes) / lifespan) * 100;

    return Math.round(percentage * Math.pow(10, 3)) / Math.pow(10, 3);
}

let totalTime = 0;

for (i = 0; i < seriesDurations.length; i++) {
    console.log(
        seriesDurations[i].title +
        " took " +
        logOutSeriesText(seriesDurations[i]) +
        "% of my life ."
    );
    totalTime = totalTime + logOutSeriesText(seriesDurations[i]);
}

console.log("In total that is " + totalTime + "%  of my life");

// NOnoN0nOYes (Note taking app)

const notes = [];

function saveNote(content, id) {
    notes.push({ id: id, content: content });
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);
saveNote("Make dinner", 3);

console.log(notes); // [{content: 'Pick up groceries', id: 1}, {content: 'Do laundry', id: 2}]

// Get a note

function getNote(id) {
    for (i = 0; i < notes.length; i++) {
        if (notes.i === id) {
            return notes[i];
        } else {
            console.log("You dont have this note");
        }
    }
}

const firstNote = getNote();
console.log(firstNote); // {content: 'Pick up groceries', id: 1}

// Log out notes

function logOutNotesFormatted() {
    for (i = 0; i < notes.length; i++) {
        console.log(
            "The note with id : " +
            notes[i].id +
            " , has the following note text : " +
            notes[i].content
        );
    }
}

logOutNotesFormatted();

// The note with id: 1, has the following note text: Pick up groceries
// The note with id: 2, has the following note text: Do laundry