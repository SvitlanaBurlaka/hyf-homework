const express = require("express");
const app = express();

// import data here
const meals = require("./data/meals");
const reservations = require("./data/reservations");
const reviews = require("./data/reviews");

// this is where you will be adding your routes
app.get("/", async(request, response) => {
    response.send("Meal Sharing Web App");
});

// /meals
const newMealsArray = meals.map((item) => {
    item.reviews = [];
    reviews.forEach((element) => {
        if (item.id === element.mealId) {
            item.reviews.push(element);
        }
    });
    return item;
});
app.get("/meals", async(request, response) => {
    response.send(newMealsArray);
});

// /cheap-meals
app.get("/cheap-meals", async(request, response) => {
    const cheapMeals = newMealsArray.filter((element) => element.price < 50);
    response.send(cheapMeals);
});

// /large-meals
app.get("/large-meals", async(request, response) => {
    const largeMeals = newMealsArray.filter(
        (element) => element.maxNumberOfGuests > 5
    );
    response.send(largeMeals);
});
// /meal
app.get("/meal", async(request, response) => {
    const randomMeal =
        newMealsArray[Math.floor(Math.random() * newMealsArray.length)];
    response.send(randomMeal);
});

// /reservations
app.get("/reservations", async(request, response) => {
    response.send(reservations);
});

// /reservation
app.get("/reservation", async(request, response) => {
    const randomReservation =
        reservations[Math.floor(Math.random() * reservations.length)];
    response.send(randomReservation);
});

module.exports = app;