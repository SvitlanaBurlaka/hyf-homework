const express = require("express");
const router = express.Router();
const reviews = require("./../data/reviews");
const notANumberReviews = { message: "Not an integer" };
const errorMessageReviews = {
    message: "Oops! You do not have reviews with this id",
};
// Task - /api/reviews/{id}
router.get("/:id", async(request, response) => {
    const idReview = Number(request.params.id);
    if (!Number.isInteger(idReview)) {
        return response.status(400).json(notANumberReviews);
    } else {
        let neededReview = {};
        reviews.find((element) => {
            if (element.id === idReview) {
                neddedReview = element;
            }
        });
        return response.send(neededReview);
    }
});

// Task - /api/reviews
router.get("/", async(request, response) => {
    try {
        response.send(reviews);
    } catch (error) {
        throw error;
    }
});

module.exports = router;