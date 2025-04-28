const Country = require("../models/country");
const Message = require("../models/message");

class countriesController {
    constructor() {
    }

    async getAll(req, res) {
        try {
            const id = req.params.id;
            const getAll = await Country.find();
            if (!Country) return res.status(404).json(new Message(`country for given id ${id} is not found.`, 404));
            return res.status(200).json(getAll)
        }
        catch (err) {
            return res.status(500).json(new Message(err.Message, 500));
        }
    }

    async getById(req, res) {
        try {
            const id = req.params.id;
            const getById = await Country.findById(id);
            if (!id) return res.status(404).json(new Message(`country for this ${id} is not found `, 404));
            return res.status(200).json(getById);
        }
        catch (err) {
            return res.status(500).json(new Message(err.Message, 500));
        }
    }

    async created(req, res) {
        try {
            const { Id, Name, Code } = req.body;
            if (!Id) return res.status(400).json(new Message(`Invalid JSON data. Id is a required field`, 400));
            const created = await Country.create({ Id, Name, Code });
            res.header("Location", `${req.originalUrl}/${created._id}`);
            return res.status(201).json(created);
        }
        catch (err) {
            return res.status(500).json(new Message(err.message, 500));
        }
    }

    async Update(req, res) {
        try {
            const id = req.params.id;
            const { Id, Name, Code } = req.body;
            const updated = await Country.findByIdAndUpdate(id, { Id, Name, Code }, { new: true });
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
            const deleted = await Country.findByIdAndDelete(id);
            if (!deleted) return res.status(404).json(new Message(`Country with id ${id} is not found.`, 404));
            return res.status(200).json(deleted);
        }
        catch (err) {
            return res.status(500).json(new Message(err.message, 500));
        }
    }

}
const CountryController = new countriesController()
module.exports = CountryController 