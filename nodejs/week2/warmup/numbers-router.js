const express = require("express");
const router = express.Router();
router.get("/add", async(request, response) => {
    const firstNumber = parseInt(request.query.firstNumber);
    const secondNumber = parseInt(request.query.secondNumber);
    const add = firstNumber + secondNumber;
    if (firstNumber && secondNumber) {
        response.send({ data: [add] });
    } else {
        response.send("Invalid parameter");
    }
});
router.get("/multiply/:first/:second", async(request, response) => {
    const first = Number(request.params.first);
    const second = Number(request.params.second);
    if (first && second && !isNaN(first) && !isNaN(second)) {
        const multiply = first * second;
        response.send({ data: [multiply] });
    } else {
        response.send("Invalid parameter");
    }
});

module.exports = router;