const Message = require("../models/message");
const SubCategory = require("../models/subCategory");

class subCategoryController {
    Controller() {
    }

    async getAll(req, res) {
        try {
            const id = req.params.id;
            const getAll = await SubCategory.find().populate("Parent");
            if (!SubCategory) return res.status(400).json(new Message(`Your Subcategory is not Available`, 400));
            return res.status(200).json(getAll);
        } catch (err) {
            return res.status(500).json(new Message(err.Message,500));
        }
    }




    async getById(req, res) {
        try {
            const id = req.params.id;
            const getById = await SubCategory.findById(id).populate("Parent");
            if (!getById) return res.status(400).json(new Message(`your id is not valid!`, 400));
            return res.status(200).json(getById);
        } catch (err) {
            return res.status(500).json(new Message(`${err.message}`, 500));
        }
    }

    async Create(req, res) {
        try {
            const { Name, Description, Image, Parent } = req.body;
            const Created = await SubCategory.create({ Name, Description, Image, Parent });
            if (!Created) return res.status(400).json(new Message(`Your Subcategory is not Created`, 400));
            res.header("Location", `${req.orignalUrl}/${Created._id}`)
            return res.status(200).json(Created);
        } catch (err) {
            return res.status(500).json(new Message(`${err.message}`, 500));
        }
    }

    async Update(req, res) {
        try {
            const id = req.params.id;
            const { Name, Description, Image, Parent } = req.body;
            const Updated = await SubCategory.findByIdAndUpdate(id, { Name, Description, Image, Parent }, { new: true });
            if (!Updated) return res.status(400).json(new Message(`Your Given Id is not correct `, 400));
            return res.status(200).json(Updated)
        } catch (err) {
            return res.status(500).json(new Message(`${err.message}`, 500));
        }
    }

    async Delete(req, res) {
        try {
            const id = req.params.id;
            const Deleted = await SubCategory.findByIdAndDelete(id);
            if (!Deleted) return res.status(400).json(new Message(`Your Given Id is not Deleted.`, 400));
            return res.status(200).json(Deleted);
        } catch (err) {
            return res.status(500).json(new Message(`${err.message}`, 500));
        }
    }
}

const SubCategoryController = new subCategoryController;
module.exports = SubCategoryController