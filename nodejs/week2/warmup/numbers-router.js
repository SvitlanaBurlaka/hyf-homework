const express = require("express");
const router = express.Router();

router.get("/add", async(request, response) => {
    const firstNumber = parseInt(request.query.firstNumber);
    const secondNumber = parseInt(request.query.secondNumber);
    const add = firstNumber + secondNumber;
    if (firstNumber && secondNumber) {
        response.send({ data: [add] });
    }
});
router.get("/multiply/:first/:second", async(request, response) => {
    const first = Number(request.params.first);
    const second = Number(request.params.second);
    const multiply = first * second;
    response.send({ data: [multiply] });
});

module.exports = router;