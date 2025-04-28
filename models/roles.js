const { Schema , SchemaTypes ,model} = require("mongoose")
const rolesSchema = new Schema({
    Id : {
        type : SchemaTypes.Number
    },
    Name : {
        type : SchemaTypes.String,
    }
})

const Roles = new model("Roles",rolesSchema)
module.exports = Roles