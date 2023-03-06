const express = require("express");

//Modules and Globals
require("dotenv").config();
const app = express();
// const port = process.env.PORT;
const methodOverride = require("method-override");

//Express Settings
app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

//Render home page
app.get("/", (req, res) => {
  res.render("home");
});

//Controllers $ Routes
const placesController = require("./controllers/places.js");
app.use("/places", placesController);

app.get("*", (req, res) => {
  res.render("error404");
});

//Server Listener connection
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
