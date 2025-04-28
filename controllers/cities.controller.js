const Cities = require("../models/cities");
const Message = require("../models/message");

class citiesController {
    controller() {

    }


    async getAll(req, res) {
        try {
            const id = req.params.id;
            const getAll = await Cities.find().populate("ProvinceID");
            if (!Cities) return res.status(400).json(new Message(`City Not Found`, 400));
            return res.status(200).json(getAll)
        } catch (err) {
            return res.status(500).json(new Message(err.message, 500));
        }
    }

    async getById(req, res) {
        try {
            const id = req.params.id;
            const getById = await Cities.findById(id).populate("ProvinceID");
            if (!Cities) return res.status(404).json(new Message(`Cities Not Found`, 404));
            return res.status(200).json(getById);
        } catch (err) {
            return res.status(500).json(new Message(err.message, 500));
        }
    }

    async Create(req, res) {
        try {
            const { Id, Name, ProvinceID } = req.body;
            if (!Id) return res.status(400).json(new Message(`City is not Created`, 400));
            const created = await Cities.create({ Id, Name, ProvinceID });
            res.header("Location", `${req.orignalUrl}/${created._id}`);
            return res.status(200).json(created);
        } catch (err) {
            return res.status(500).json(new Message(err.message, 500));
        }
    }

    async Update(req, res) {
        try {
            const id = req.params.id;
            const { Id, Name, ProvinceID } = req.body;
            const updated = await Cities.findByIdAndUpdate(id, { Id, Name, ProvinceID }, { new: true });
            if (!updated) return res.status(400).json(new Message(`Cities with id ${id} not found.`, 400));
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
            const deleted = await Cities.findByIdAndDelete(id);
            if (!deleted) return res.status(404).json(new Message(`Country with id ${id} is not found.`, 404));
            return res.status(200).json(deleted);
        }
        catch (err) {
            return res.status(500).json(new Message(err.message, 500));
        }
    }
}

const CitiesController = new citiesController()
module.exports = CitiesController