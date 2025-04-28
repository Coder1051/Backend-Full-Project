const { Schema, SchemaTypes, model } = require("mongoose");
const statusSchema = new Schema({
    Id: {
        type: SchemaTypes.Number,
        required: true

    },
    Name: {
        type: SchemaTypes.String,
        minLength: 3,
        maxLength: 20,
        required: true
    }
})

const Status = new model("Status", statusSchema)
module.exports = Status