const {Schema ,SchemaTypes , model} = require('mongoose');
const cityAreaSchema = new Schema({
    Id:{
        type : SchemaTypes.Number,
        required : true
    },
    Name : {
        type : SchemaTypes.String,
        required :true
    },
    CityId :{
        type: SchemaTypes.ObjectId,
        ref : "Cities",
    }
})
const CityArea = new model("CityArea",cityAreaSchema)
module.exports = CityArea