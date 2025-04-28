require("dotenv").config();
const express = require("express");

// Routers

const { connectDB } = require("./data/util");
const countryRouter = require("./routes/countryRouter")
const Message = require("./models/message")
const statusRouter = require("./routes/status.router")
const citiesRouter = require("./routes/cities.router")
const provinceRouter = require("./routes/province.router")
const typesRouter = require("./routes/types.routes")
const catagoryRouter = require("./routes/catagory.router")
const rolesRouter = require("./routes/roles.router") 
const cityAreaRouter = require("./routes/cityArea.route") 
const usersRouter = require("./routes/user.router") 
const SubCategoryRouter = require('./routes/subCategory.router')
const adsRouter = require("./routes/advertisment.route")

const app = express();

const port = process.env.PORT
const host = process.env.HOST

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Usage

app.use("/api/v1/country", countryRouter);
app.use("/api/v1/status", statusRouter);
app.use("/api/v1/cities", citiesRouter);
app.use("/api/v1/cityarea", cityAreaRouter);
app.use("/api/v1/province", provinceRouter);
app.use("/api/v1/types", typesRouter);
app.use("/api/v1/catagories", catagoryRouter);
app.use("/api/v1/subcategory", SubCategoryRouter);
app.use("/api/v1/roles", rolesRouter);
app.use("/api/v1/users",usersRouter);
app.use("/api/v1/ad",adsRouter);


// Db Connect
app.listen(port, host, () => {
  connectDB()
    .then(res => {
      console.log("db connected");
      console.log(`server http:${host}:${port} is ready ....`);
    })
    .catch(err => {
      console.log(err.message);
    });
});