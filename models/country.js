const { Schema, SchemaTypes, model } = require("mongoose");
const countrySchema = new Schema({
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
    Code: {
        type: SchemaTypes.Number,
        required: true,
    }
})


const Country = new model("Country", countrySchema);
module.exports = Country 