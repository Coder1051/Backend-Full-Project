const { Router } = require("express");
const rolesController = require("../controllers/roles.controller");

const rolesRouter = Router();

 rolesRouter.route("/")
    .post(rolesController.Create)
    .get(rolesController.getAll) 

 rolesRouter.route("/:id")   
    .get(rolesController.getById)
    .put(rolesController.Update)
    .delete(rolesController.Delete)

    module.exports = rolesRouter
