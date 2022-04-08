const express = require("express");
const router = express.Router();
const meals = require("./../data/meals");
const notANumber = { message: "Not an integer" };
const errorMessage = { message: "Something wrong" };

router.get("/:id", async(request, response) => {
    const neededId = Number(request.params.id);
    if (!Number.isInteger(needdedId)) {
        return response.status(400).json(notANumber);
    } else {
        let newObj = {};
        meals.find((element) => {
            if (element.id === neededId) {
                newObj = element;
            }
        });
        return response.send(newObj);
    }
});

// I do not know how to return all meals in my case.

router.get("/", async(request, response) => {
    const maxPrice = Number(request.query.maxPrice);
    const title = request.query.title;
    const createdAfter = new Date(request.query.createdAfter);
    const limit = Number(request.query.limit);
    if (maxPrice) {
        if (isNaN(maxPrice)) {
            return response.status(400).json(errorMessage);
        } else {
            const maxPriceMeals = meals.filter((item) => item.price < maxPrice);
            return response.send(maxPriceMeals);
        }
    } else if (title) {
        const filteredByTitle = meals.filter((item) =>
            item.title.toLowerCase().includes(title)
        );
        return response.send(filteredByTitle);
    } else if (createdAfter) {
        if (!isNaN(createdAfter)) {
            const filteredByDate = meals.filter((item) => {
                let date = new Date(item.createdAt);
                return date > createdAfter;
            });
            return response.send(filteredByDate);
        } else {
            return response.status(400).json(errorMessage);
        }
    } else if (limit) {
        if (!isNaN(limit)) {
            return response.status(400).json(errorMessage);
        } else {
            const filteredByLimit = meals.slice(0, limit);
            return response.send(filteredByLimit); // here i don`t get needed response
        }
    }
});

module.exports = router;