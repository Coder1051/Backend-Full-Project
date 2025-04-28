const { Schema, SchemaTypes, model } = require("mongoose");
const provinceSchema = new Schema({
    Id: {
        type: SchemaTypes.Number,
        required: true,
    },
    Name: {
        type: SchemaTypes.String,
        required: true,
        minLength: 3,
        maxLength: 30
    },
    CountryID: {
        type: SchemaTypes.ObjectId,
        required: true,
        ref : "Country"
    }
})


const Province = new model("Province", provinceSchema);
module.exports = Province 