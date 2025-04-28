const { Router } = require("express");
const Userscontroller = require('../controllers/user.controller');

const usersRouter = Router();
usersRouter.route('/')
    .post(Userscontroller.Create)
    .get(Userscontroller.getAll)

usersRouter.route('/:id')
    .get(Userscontroller.getById)
    .put(Userscontroller.Update)
    .delete(Userscontroller.Delete)

    module.exports = usersRouter