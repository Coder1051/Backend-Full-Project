const Catagory = require("../models/catagory")
const Message = require("../models/message")

class catagoryConstructor {
    constructor() {
    }

    async getAll(req, res) {
        try {
            const id = req.params.id;
            const getAll = await Catagory.find().populate("TypesId");
            if (!Catagory) return res.status(400).json(new Message(`Catagories Not Found`, 400));
            return res.status(200).json(getAll);
        } catch (err) {
            return res.status(500).json(new Message(err.message, 500));
        }
    }

    async getById(req, res) {
        try {
            const id = req.params.id;
            const getById = await Catagory.findById(id).populate("TypesId");
            if (!Catagory) return res.status(404).json(new Message(`Your given id not found`, 404));
            return res.status(200).json(getById);
        } catch (err) {
            return res.status(500).json(new Message(err.message, 500));
        }
    }


    async Create(req, res) {
        try {
            const { Id, Name, Image, TypesId } = req.body;
            if (!Id) return res.status(400).json(new Message(`Your Category is not Created`, 400));
            const created = await Catagory.create({ Id, Name, Image, TypesId });
            res.header("Location", `${req.orignalUrl}/${created._Id}`);
            return res.status(201).json(created);
        } catch (err) {
            return res.status(500).json(new Message(err.message, 500));
        }
    }

    async Update(req, res) {
        try {
            const id = req.params.id;
            const { Id, Name,TypesId, Image } = req.body;
            const updated = await Catagory.findByIdAndUpdate(id, { Id, Name, TypesId, Image }, { new: true });
            if (!updated) return res.status(404).json(new Message(`Category with id : ${id} not found.`, 404));
            return res.status(200).json(updated);
        } catch (err) {
            return res.status(500).json(new Message(err.message, 500));
        }
    }

    async Delete(req, res) {
        try {
            const { id } = req.params;
            // if (!id) return res.status(400).json({ message: "Invalid request. Valid Id parameter is required.", status: 400 });
            const deletedCatagory = await Catagory.findByIdAndDelete(id);
            if (!deletedCatagory) return res.status(404).json({ message: `Catagory with id ${id} is not found.`, status: 404 });
            return res.status(200).json({ message: "Catagory deleted successfully.", deletedCatagory });
        }
        catch (err) {
            return res.status(500).json({ message: err.message, status: 500 });
        }
    }

}
const CatagoriesController = new catagoryConstructor()
module.exports = CatagoriesController