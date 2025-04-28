const Status = require("../models/status");
const Message = require("../models/message");

class statusController {
    controller() {

    }

    async getAll(req, res) {
        try {
            const id = req.params.id;
            const getAll = await Status.find();
            if (!Status) return res.status(400).json(new Message(`Status Not Found`, 400));
            return res.status(200).json(getAll)
        } catch (err) {
            return res.status(500).json(new Message, 500)
        }
    }

    async getById(req, res) {
        try {
            const id = req.params.id;
            const getById = await Status.findById(id);
            if (!Status) return res.status(404).json(new Message(`Status Not Found`, 404));
            return res.status(200).json(getById);
        } catch (err) {
            return res.status(500).json(new Message, 500)
        }
    }

    async created(req, res) {
        try {
            const { Id, Name } = req.body;
            if (!Id) return res.status(400).json(new Message(`Status not Created`, 400));
            const created = await Status.create({ Id, Name });
            res.header("Location", `${res.orignalUrl}/${created._Id}`);
            return res.status(200).json(created);
        } catch (err) {
            return res.status(500).json(new Message, 500);
        }
    }

    async Update(req, res) {
        try {
            const id = req.params.id;
            const { Id, Name, Code } = req.body;
            const updated = await Status.findByIdAndUpdate(id, { Id, Name }, { new: true });
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
            const deleted = await Status.findByIdAndDelete(id);
            if (!deleted) return res.status(404).json(new Message(`Country with id ${id} is not found.`, 404));
            return res.status(200).json(deleted);
        }
        catch (err) {
            return res.status(500).json(new Message(err.message, 500));
        }
    }
    
}

const StatusController = new statusController()
module.exports = StatusController