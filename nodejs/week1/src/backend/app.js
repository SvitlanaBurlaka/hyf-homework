const express = require("express");
const app = express();

// import data here
const meals = require("./data/meals");

// this is where you will be adding your routes
app.get("/", async(request, response) => {
    response.send("Meal Sharing Web App");
});

app.get("/meals", async(request, response) => {
    response.send(meals);
});
module.exports = app;