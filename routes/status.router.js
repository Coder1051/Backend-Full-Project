const { Router } = require("express");
const StatusController = require("../controllers/status.controller");

const statusRouter = Router();
statusRouter.route("/")

    .post(StatusController.created)
    .get(StatusController.getAll)

statusRouter.route("/:id")
    .get(StatusController.getById)
    .put(StatusController.Update)
    .delete(StatusController.Delete)

module.exports = statusRouter