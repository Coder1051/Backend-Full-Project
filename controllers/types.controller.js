const Types = require("../models/types");
const Message = require("../models/message");

class typesController {
    controller() {
    }

    async getAll(req, res) {
        try {
            const id = req.params.id;
            const getAll = await Types.find();
            if (!getAll) return res.status(404).json(new Message(`Given id not found`, 404));
            return res.status(200).json(getAll);
        } catch (err) {
            res.status(500).json(new Message(err.message, 500));
        }
    }

    async getById(req, res) {
        try {
            const id = req.params.id;
            const getById = await Types.findById(id);
            if (!getById) return res.status(400).json(new Message(`Given id Not Found`, 400));
            return res.status(200).json(getById)
        } catch (err) {
            res.status(500).json(new Message(err.message, 500));
        }
    }

    async Create(req, res) {
        try {
            const { Id, Name } = req.body;
            if (!Id) return res.status(400).json(new Message(`Your Type is not Created`, 400));
            const created = await Types.create({ Id, Name });
            res.header("Location", `${req.orignalUrl}/${created._id}`);
            return res.status(201).json(created);
        } catch (err) {
           return res.status(500).json(new Message(err.message, 500));
        }
    }

    async Delete(req, res) {
        try {
            const id = req.params.id;
            const deleted = await Types.findByIdAndDelete(id);
            if (!deleted) res.status(404).json(new Message(`Given Id Not found`, 404));
            return res.status(201).json(deleted);
        } catch (err) {
            res.status(500).json(new Message(err.message, 500));
        }
    }

    async Update(req, res) {
        try {
            const id = req.params.id;
            const { Id, Name } = req.body;
            if (!id) return res.status(404).json(new Message(`Your Type is not Found`, 404));
            const updated = await Types.findByIdAndUpdate(id, { Id, Name }, { new: true });
            if (!updated) res.status(404).json(new Message(`Given Id Not found`, 404));
            return res.status(201).json(updated);
        } catch (err) {
            res.status(500).json(new Message(err.message, 500));
        }
    }

}
const TypesController = new typesController()
module.exports = TypesController