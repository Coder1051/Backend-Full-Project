const Users = require('../models/user');
const Message = require('../models/message');

class userscontroller {
    controller() {
    }

    async getAll(req, res) {
        try {
            const id = req.params.id;
            const getAll = await Users.find().populate("RolesId");
            if (!Users) return res.status(404).json(new Message(`Roles are not found.`, 404));
            return res.status(200).json(getAll);
        } catch (err) {
            return res.status(500).json(err.message,500);
        }
    }

    async getById(req, res) {
        try {
            const id = req.params.id;
            const getById = await Users.findById(id).populate("RolesId");
            if (!getById) return res.status(400).json(new Message(`Your this ID:${id} is Not valid! `, `Status:${400}`));
            return res.status(200).json(getById);
        } catch (err) {
            return res.status(500).json(err.message,500);
        }
    }

    async Create(req, res) {
        try {
            const { Id, Name, Email, Password, DateOfBirth, Contacts, RolesId } = req.body;
            if (!Id) return res.status(400).json(new Message(`Your user is not Created`, 400));
            const Created = await Users.create({ Id, Name, Email, Password, DateOfBirth, Contacts, RolesId });
            res.header("Location", `${req.orignalUrl}/${Created._id}`);
            return res.status(200).json(Created);
        } catch (err) {
            return res.status(500).json(err.message,500);
        }
    }

    async Update(req, res) {
        try {
            const id = req.params.id;
            const { Id, Name, Email, Password, Contact, DateOfBirth, RolesId } = req.body;
            if (!id) return res.status(400).json(new Message(`Your given Id ${id} is not correct.`, 400));
            const Updated = await Users.findByIdAndUpdate(id, { Id, Name, Email, Password, Contact, DateOfBirth, RolesId }, { new: true });
            return res.status(200).json(Updated);
        } catch (err) {
            return res.status(500).json(err.message,500);
        }
    }

    async Delete(req, res) {
        try {
            const id = req.params.id;
            const Deleted = await Users.findByIdAndDelete(id);
            if (!Deleted) return res.status(400).json(new Message(`your Id is not found`, 400));
            return res.status(200).json(Deleted);
        } catch (err) {
            return res.status(500).json(err.message,500);
        }
    }

}

const Userscontroller = new userscontroller()
module.exports = Userscontroller