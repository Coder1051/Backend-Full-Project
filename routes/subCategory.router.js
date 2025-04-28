const Router = require("express");
const subCategoryController = require('../controllers/subCategory.controller')

const SubCategoryRouter = Router();
SubCategoryRouter.route('/')
    .get(subCategoryController.getAll)
    .post(subCategoryController.Create)

SubCategoryRouter.route('/:id')
    .get(subCategoryController.getById)
    .delete(subCategoryController.Delete)
    .put(subCategoryController.Update)

module.exports = SubCategoryRouter