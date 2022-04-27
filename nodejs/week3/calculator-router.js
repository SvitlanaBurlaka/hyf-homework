const express = require("express");
const router = express.Router();

// Getting data through query parameters using GET
router.get("/multiply", async(request, response) => {
    const parameters = request.query;
    try {
        let valuesfromUrl = Object.values(parameters);
        const result = valuesfromUrl
            .map((str) => Number(str))
            .reduce(function(x, y) {
                return x * y;
            });
        response.send({ result: result });
    } catch (error) {
        throw error;
    }
});

router.get("/add", async(request, response) => {
    const parameters = request.query;
    try {
        let valuesfromUrl = Object.values(parameters);
        const sum = valuesfromUrl
            .map((str) => Number(str))
            .reduce(function(x, y) {
                return x + y;
            });
        response.send({ result: sum });
    } catch (error) {
        throw error;
    }
});

router.get("/divide", async(request, response) => {
    const parameters = request.query;
    try {
        let valuesfromUrl = Object.values(parameters);
        const result = valuesfromUrl
            .map((str) => Number(str))
            .reduce(function(x, y) {
                return x / y;
            });
        response.send({ result: result });
    } catch (error) {
        throw error;
    }
});
router.get("/subtract", async(request, response) => {
    const parameters = request.query;
    try {
        let valuesfromUrl = Object.values(parameters);
        const result = valuesfromUrl
            .map((str) => Number(str))
            .reduce(function(x, y) {
                return x - y;
            });
        response.send({ result: result });
    } catch (error) {
        throw error;
    }
});

// Getting data through the request body using POST

router.post("/multiply", async(request, response) => {
    const numbers = request.body;
    try {
        let result = Object.values(numbers).reduce(function(x, y) {
            return x * y;
        });
        response.send({ result: result });
    } catch (error) {
        throw error;
    }
});
router.post("/add", async(request, response) => {
    const numbers = request.body;
    try {
        let result = Object.values(numbers).reduce(function(x, y) {
            return x + y;
        });
        response.send({ result: result });
    } catch (error) {
        throw error;
    }
});

router.post("/subtract", async(request, response) => {
    const numbers = request.body;
    try {
        let result = Object.values(numbers).reduce(function(x, y) {
            return x - y;
        });
        response.send({ result: result });
    } catch (error) {
        throw error;
    }
});
router.post("/divide", async(request, response) => {
    const numbers = request.body;
    try {
        let result = Object.values(numbers).reduce(function(x, y) {
            return x / y;
        });
        response.send({ result: result });
    } catch (error) {
        throw error;
    }
});
module.exports = router;