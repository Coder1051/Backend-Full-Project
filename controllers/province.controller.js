const Province = require("../models/province");
const Message = require("../models/message");

class provinceController {
    controller() {
    }

    async getAll(req, res) {
        try {
            const id = req.params.id;
            const getAll = await Province.find().populate("CountryID");
            if (!Province) return res.status(400).json(new Message(`Province Not Found`, 400));
            return res.status(200).json(getAll)
        } catch (err) {
            return res.status(500).json(new Message(err.message, 500));
        }
    }

    async getById(req, res) {
        try {
            const id = req.params.id;
            const getById = await Province.findById(id).populate("CountryID");
            if (!Province) return res.status(404).json(new Message(`Province Not ${id} Found`, 404));
            return res.status(200).json(getById);
        } catch (err) {
            return res.status(500).json(new Message(err.message, 500));
        }
    }

    async Create(req, res) {
        try {
            const { Id, Name, CountryID } = req.body;
            if (!Id) return res.status(400).json(new Message(`Province is not Created`, 400));
            const created = await Province.create({ Id, Name, CountryID });
            res.header("Location", `${req.orignalUrl}/${created._id}`);
            return res.status(200).json(created);
        } catch (err) {
            return res.status(500).json(new Message(err.message, 500));
        }
    }

    async Update(req, res) {
        try {
            const id = req.params.id;
            const { Id, Name, CountryID } = req.body;
            const updated = await Province.findByIdAndUpdate(id, { Id, Name, CountryID }, { new: true });
            if (!updated) return res.status(404).json(new Message(`Province with id ${id} not found.`, 404));
            return res.status(200).json(updated);
        }
        catch (err) {
            return res.status(500).json(new Message(err.message, 500));
        }
    }

    async Delete(req, res) {
        try {
            const id = req.params.id;
            if (!id) res.status(404).json(new Message(`Given Id not found`,404));
            const deleted = await Province.findByIdAndDelete(id);
            if (!deleted) return res.status(400).json(new Message(`Deleted not Found`,404));
            return res.status(200).json(deleted);
        }
        catch (err) {
            return res.status(500).json(new Message(err.message, 500));
        }
    }
}

const ProvinceController = new provinceController()
module.exports = ProvinceController