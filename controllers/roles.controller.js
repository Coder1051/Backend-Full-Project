const Roles = require("../models/roles");
const Message = require("../models/message");

class rolesController {
    constructor() {

    }
    async getAll(req, res) {
        try {
            const { id } = req.params;
            const getAll = await Roles.find();
            if (!Roles) return res.status(404).json(new Message(`Roles are not found.`, 404));
            return res.status(200).json(getAll)
        }
        catch (err) {
            return res.status(500).json(new Message(err.Message, 500));
        }
    }

    async getById(req, res) {
        try {
            const { id } = req.params;
            const getById = await Roles.findById(id);
            if (!id) return res.status(404).json(new Message(`Roles for this ${id} is not found `, 404));
            return res.status(200).json(getById);
        }
        catch (err) {
            return res.status(500).json(new Message(err.Message, 500));
        }
    }

    async Create(req, res) {
        try {
            const { Id, Name } = req.body;
            if (!Id) return res.status(400).json(new Message(`Invalid JSON data. Id is a required field`, 400));
            const created = await Roles.create({ Id, Name });
            res.header("Location", `${res.orignalUrl}/${created._Id}`);
            return res.status(201).json(created);
        }
        catch (err) {
            return res.status(500).json(new Message, 500);
        }
    }

    async Update(req, res) {
        try {
            const id = req.params.id;
            const { Id, Name } = req.body;
            const updated = await Roles.findByIdAndUpdate(id, { Id, Name }, { new: true });
            if (!updated) return res.status(404).json(new Message(`Country with id ${id} not found.`, 404));
            return res.status(200).json(updated);
        }
        catch (err) {
            return res.status(500).json(new Message(err.message, 500));
        }
    }


    async Delete(req, res) {
        try {
            const id = req.params.id;
            if (!id) return res.status(400).json(new Message(`Invalid request. Id parameter is required.`, 400));
            const deleted = await Roles.findByIdAndDelete(id);
            if (!deleted) return res.status(404).json(new Message(`Country with id ${id} is not found.`, 404));
            return res.status(200).json(deleted);
        }
        catch (err) {
            return res.status(500).json(new Message(err.message, 500));
        }
    }

}
const RolesController = new rolesController()
module.exports = RolesController