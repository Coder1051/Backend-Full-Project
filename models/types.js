const { Schema, SchemaTypes, model } = require("mongoose")
const typesSchema = new Schema({
    Name:  {
        type: SchemaTypes.String,
        required: true
    },
    Id: {
        type: SchemaTypes.Number,
        required: true
    }
})

const Types = new model("Types", typesSchema)
module.exports = Types