const express = require("express");
const app = express();

const calculatorRouter = require("./calculator-router");
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use("/calculator", calculatorRouter);

app.get("/", (req, res) => res.send("nodejs week3 homework"));

app.listen(3000, () => console.log(`Calculator:listening on port 3000`));

module.exports = app;