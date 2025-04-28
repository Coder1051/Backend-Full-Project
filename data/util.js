// require("dotenv").config();
// const connectDb = require("mongoose");
// async function connect() {
//     await connectDb(process.env.CON_STR);
// }

// module.exports = connect;

require("dotenv").config();
const {connect} = require("mongoose")
async function connectDB (){
 await connect(process.env.CON_STR);

}

module.exports ={
  connectDB
}