const { Schema, SchemaTypes, model } = require("mongoose");
const advertismentSchema = new Schema({
    Title: {
        type: SchemaTypes.String,
        required: true
    },
    Description: {
        type: SchemaTypes.String,
        required: true
    },
    Id: {
        type: SchemaTypes.Number,
        required : true
    },
    Price: {
        type: SchemaTypes.Number,
        required : true
    },
    StartOn: {
        type: SchemaTypes.Date,
        required : true
    },
    EndOn: {
        type: SchemaTypes.Date
    },
    PostedBy: {
        type: SchemaTypes.ObjectId,
        ref: "Users",
        required : true
    },
    TypeId: {
        type: SchemaTypes.ObjectId,
        ref: "Types",
        required : true
    },
    StatusId: {
        type: SchemaTypes.ObjectId,
        ref: "Status",
        required : true
    },
    CityAreaId: {
        type: SchemaTypes.ObjectId,
        ref: "CityArea",
        required : true
    },
    CategoryId: {
        type: SchemaTypes.ObjectId,
        ref: "Catagory",
        required : true
    }
})


const Advertisment = new model("Advertisment", advertismentSchema);
module.exports = Advertisment