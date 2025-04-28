const { Router } = require("express");
const CitiesController = require("../controllers/cities.controller");

const citiesRouter = Router();
citiesRouter.route("/")

    .post(CitiesController.Create)
    .get(CitiesController.getAll)

citiesRouter.route("/:id")
    .put(CitiesController.Update)
    .get(CitiesController.getById)
    .delete(CitiesController.Delete)

    module.exports = citiesRouter