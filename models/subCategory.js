const { Schema, SchemaTypes, model } = require("mongoose");
const subCategorySchema = new Schema({
    Name: {
        type: SchemaTypes.String,
        required: true
    },
    Description: {
        type: SchemaTypes.String,
        required: true
    },
    Image: {
        type: SchemaTypes.String,
        required: true
    },
    Parent: {
        type: SchemaTypes.ObjectId,
        required: true,
        ref: "Catagory"
    }
})

const SubCategory = new model("Subcategory",subCategorySchema)
module.exports = SubCategory