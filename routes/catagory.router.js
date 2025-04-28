const { Router } = require("express");
const CatagoriesController = require("../controllers/catagories.controller");

const catagoryRouter = Router();


catagoryRouter.route("/")
    .post(CatagoriesController.Create)
    .get(CatagoriesController.getAll)

catagoryRouter.route("/:id")
    .get(CatagoriesController.getById)
    .put(CatagoriesController.Update)
    .delete(CatagoriesController.Delete)

module.exports = catagoryRouter