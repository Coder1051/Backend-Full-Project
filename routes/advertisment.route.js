const { Router } = require("express");
const AdvertismentController = require("../controllers/advertisment.controller");

const adsRouter = Router();
adsRouter.route('/')
.post(AdvertismentController.Create)
.get(AdvertismentController.getAll)
adsRouter.route('/:id')
.get(AdvertismentController.getById)
.delete(AdvertismentController.Delete)
.put(AdvertismentController.Update)

module.exports = adsRouter