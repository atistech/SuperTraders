var express = require("express");
var router = express.Router();

const portfolioController = require("./controllers/portfolioController");

//Create a new portfolio
router.post("/portfolio/create", portfolioController.create);

//Read all portfolios
router.get("/portfolio/readAll", portfolioController.readAll);

//Read one portfolio by id
router.get("/portfolio/read/:id", portfolioController.read);

//Update portfolio
router.post("/portfolio/update/:id", portfolioController.update);

//Delete a portfolio by id
router.delete("/portfolio/delete/:id", portfolioController.remove);

module.exports = router;
