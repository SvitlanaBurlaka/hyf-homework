const express = require("express");
const router = express.Router();
const meals = require("./../data/meals");
const notANumber = { message: "Not an integer" };
const errorMessage = { message: "It is not supported parameter" };

router.get("/:id", async(request, response) => {
    const neededId = Number(request.params.id);
    if (!Number.isInteger(neededId)) {
        return response.status(400).json(notANumber);
    } else {
        return response.send(meals.find((element) => element.id === neededId));
    }
});

router.get("/", async(request, response) => {
    const maxPrice = Number(request.query.maxPrice);
    const title = request.query.title;
    let createdAfter = request.query.createdAfter;
    const limit = Number(request.query.limit);
    let newMealsObject = meals;

    if (Object.keys(request.query).length != 0) {
        if (maxPrice) {
            newMealsObject = newMealsObject.filter((item) => item.price < maxPrice);
            response.send(newMealsObject);
        } else if (title) {
            newMealsObject = newMealsObject.filter((item) =>
                item.title.toLowerCase().includes(title)
            );
            response.send(newMealsObject);
        } else if (createdAfter) {
            createdAfter = new Date(createdAfter);
            if (!isNaN(createdAfter)) {
                newMealsObject = newMealsObject.filter((item) => {
                    let date = new Date(item.createdAt);
                    return date > createdAfter;
                });
                response.send(newMealsObject);
            } else {
                response.status(400).json(errorMessage);
            }
        } else if (limit) {
            response.send(newMealsObject.slice(0, limit));
        } else {
            response.status(400).json(errorMessage);
        }
    } else {
        response.send(meals);
    }
});

module.exports = router;