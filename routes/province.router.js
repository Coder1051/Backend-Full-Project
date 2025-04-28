const { Router } = require("express");
const ProvinceController = require("../controllers/province.controller");

const provinceRouter = Router();
provinceRouter.route("/")

    .post(ProvinceController.Create)
    .get(ProvinceController.getAll)

    provinceRouter.route("/:id")
    
    .put(ProvinceController.Update)
    .get(ProvinceController.getById)
    .delete(ProvinceController.Delete)

    module.exports = provinceRouter