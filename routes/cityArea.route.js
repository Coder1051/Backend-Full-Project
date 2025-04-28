const { Router } = require("express");
const CityAreaColntroller = require('../controllers/cityArea.controller');
const cityAreaRouter = Router();
cityAreaRouter.route('/')
    .post(CityAreaColntroller.Create)
    .get(CityAreaColntroller.getAll)
cityAreaRouter.route('/:id')
    .get(CityAreaColntroller.getById)
    .put(CityAreaColntroller.Update)
    .delete(CityAreaColntroller.Delete)

module.exports = cityAreaRouter
