const express = require("express");
const router = express.Router();
const reservations = require("./../data/reservations");
const notANumberReservation = { message: "Not an integer" };

//Task - /api/reservations/{id}
router.get("/:id", async(request, response) => {
    const idReservation = Number(request.params.id);
    if (!Number.isInteger(idReservation)) {
        return response.status(400).json(notANumberReservation);
    } else {
        let neededReservation = {};
        reservations.find((element) => {
            if (element.id === idReservation) {
                neddedReservation = element;
            }
        });
        return response.send(neededReservation);
    }
});

// Task - /api/reservations
router.get("/", async(request, response) => {
    try {
        response.send(reservations);

        console.log("in /api/reservations");
    } catch (error) {
        throw error;
    }
});

module.exports = router;