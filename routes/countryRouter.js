const { Router } = require("express");
const CountryController = require("../controllers/country.controller");

const countryRouter = Router();
countryRouter.route("/")
    .post(CountryController.created)
    .get(CountryController.getAll)

countryRouter.route("/:id")
    .get(CountryController.getById)
    .put(CountryController.Update)
    .delete(CountryController.Delete);

module.exports = countryRouter