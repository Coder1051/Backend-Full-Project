const { Schema, SchemaTypes, model } = require("mongoose");
const usersSchema = new Schema({
    Id: {
        type: SchemaTypes.Number,
        required: true
    },
    Name: {
        type: SchemaTypes.String,
        required: true
    },
    Email: {
        type: SchemaTypes.String,
        required: true
    },
    Password: {
        type: SchemaTypes.String,
        required: true
    },
    DateOfBirth: {
        type: SchemaTypes.Date
    },
    Contacts: {
        type: SchemaTypes.Number,
        required: true
    },
    RolesId: {
        type: SchemaTypes.ObjectId,
        required: true,
        ref : "Roles"
    }
})

const Users = new model("Users",usersSchema);
module.exports = Users


