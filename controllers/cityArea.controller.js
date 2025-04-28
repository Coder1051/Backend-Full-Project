const CityArea = require('../models/cityArea');
const Message = require('../models/message');

class cityAreaColntroller {
    controller() {

    }

    async getAll(req, res) {
        try {
            const id  = req.params.id;
            const getAll = await CityArea.find().populate("CityId");
            if (!CityArea) return res.status(400).json(new Message(`Your CityAreas are not created yet.`, 400));
            return res.status(200).json(getAll);
        } catch (error) {
            return res.status(500).json(new Message(error.Message, 500));
        }
    }

    async getById(req, res) {
        try {
            const { id } = req.params;
            const getById = await CityArea.findById(id).populate("CityId");
            if (!CityArea) return res.status(400).json(new Message(`Your given ID:${id} is not Found`,400));
            return res.status(200).json(getById);
        } catch (error) {
            return res.status(500).json(new Message(error.Message, 500));
        }
    }
    async Create(req, res) {
        try {
            const { Id, Name, CityId } = req.body;
            if (!Id) return res.status(400).json(new Message(`City Area Is not created `, 400));
            const Created = await CityArea.create({ Id, Name, CityId });
            res.header("Location", `${req.orignalUrl}/${Created._id}`);
            return res.status(200).json(Created)
        } catch (error) {
            return res.status(500).json(new Message(error.Message, 500));
        }
    }
   async Update(req, res) {
        try {
            const id  = req.params.id;
            const { Id, Name, CityId } = req.body;
            const Updated = await CityArea.findByIdAndUpdate(id, { Id, Name, CityId }, { new: true });
            if (!Updated) return res.status(400).json(new Message(`City Area of this ID:${id} Not Found`, 400));
            return res.status(200).json(Updated);
        } catch (error) {
            return res.status(500).json(new Message(error.Message, 500));
        }
    }
    async Delete(req, res) {
        try {
            const id = req.params.id;
            if (!id) return res.status(400).json(new Message(`City Area of this ID:${id} Not Found`, 400));
            const deleted = await CityArea.findByIdAndDelete(id);
            if (!deleted) return res.status(400).json(new Message(`Given id not found`,400));
            return res.status(200).json(deleted);
        } catch (error) {
            return res.status(500).json(new Message(error.message, 500));
        }
    }
}
const CityAreaColntroller = new cityAreaColntroller();
module.exports = CityAreaColntroller;