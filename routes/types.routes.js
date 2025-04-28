const { Router } = require("express")
const TypesController = require("../controllers/types.controller");

const typesRouter = Router();
typesRouter.route("/")
    .post(TypesController.Create)
    .get(TypesController.getAll)

typesRouter.route("/:id")
    .put(TypesController.Update)
    .get(TypesController.getById)
    .delete(TypesController.Delete)

module.exports = typesRouter


