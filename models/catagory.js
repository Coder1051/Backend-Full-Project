const { Schema, SchemaTypes, model } = require("mongoose")
const catagorySchema = new Schema({
    Id: {
        type: SchemaTypes.Number
    },
    Name: {
        type: SchemaTypes.String,
    },
    TypesId: {
        type: SchemaTypes.ObjectId,
        ref: "Types"
    },
    Image: {
        type: SchemaTypes.String
    }
})

const Catagory = new model("Catagory", catagorySchema)
module.exports = Catagory