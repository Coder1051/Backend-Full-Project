const { Schema, SchemaTypes, model } = require("mongoose");
const citiesSchema = new Schema({
    Id: {
        type: SchemaTypes.Number,
        require: true,
    },
    Name: {
        type: SchemaTypes.String,
        required: true,
        minLength: 3,
        maxLength: 30
    },
    ProvinceID: {
        type: SchemaTypes.ObjectId,
        required: true,
        ref: "Province"
    }
})


const Cities = new model("Cities", citiesSchema);
module.exports = Cities 