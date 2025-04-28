const Advertisment = require('../models/advertisment');
const Message = require('../models/message');

class advertismentController {
    controller() {

    }

    async getAll(req, res) {
        try {
            const getAll = await Advertisment.find().populate();
            if (!Advertisment) return res.status(400).json({ message: "your Ads  not found", status: 400 });
            return res.status(200).json(getAll)
        } catch (err) {
            return res.status(500).json(err.message, 500)
            // return res.status(500).json({ message: "server error", Status: 500 })
        }
    }
    async getById(req, res) {
        try {
            const id = req.params.id;
            const getById = await Advertisment.findById(id).populate();
            if (!Advertisment) return res.status(400).json(`your Ads ${id} not found`, 400);
            return res.status(200).json(getById)
        } catch (error) {
            return res.status(500).json(error.message, 500);
            
        }
    }
    async Create(req, res) {
        try {
            const obj = req.body;
            if (!obj.Id) return res.status(400).json(err.message, 500);
            const Created = await Advertisment.create(obj);
            res.header("Location", `${req.orignalUrl}/${Created._id}`);
            return res.status(200).json(Created);
        } catch (error) {
            return res.status(500).json(error.message, 500)
        }
    }
    async Update(req, res) {
        try {
            const id = req.params.id;
            const obj = req.body;
            if (!obj) return res.status(400).json(err.message, 400);
            const Updated = await Advertisment.findByIdAndUpdate(id, obj, { new: true });
            return res.status(200).json(Updated);
        } catch (err) {
            return res.status(500).json(err.message, 500)
        }
    }
    async Delete(req, res) {
        try {
            const id = req.params.id;
            const Deleted = await Advertisment.findByIdAndDelete(id);
            if (!Deleted) return res.status(400).json({Message : "Deleted Category not found",Status:400});
            return res.stauts(200).json(Deleted);
        } catch (err) {
            return res.status(500).json({ message: err.message, status: 500 });
            //return res.status(500).json({Message : "Server Error",Status:500})
        }
    }
}

const AdvertismentController = new advertismentController()
module.exports = AdvertismentController