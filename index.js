require("dotenv").config();
const PORT = process.env.PORT || 5000;
const express = require("express");
const app = express();
const homeRoutes = require("./routes/home.js");
const checkUpRoutes = require("./routes/check-up.js");
const aboutUsRoutes = require("./routes/about-us.js");

//JSON Rquest & Body Request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Using EJS
app.set("view engine", "ejs");

// Define Assets
app.use(express.static(__dirname + "/public"));

// Routing
app.use("/home", homeRoutes);
app.use("/checkup", checkUpRoutes);
app.use("/aboutus", aboutUsRoutes);

app.listen(PORT, () => {
  console.log(`Server Succesfully Running at port ${PORT}`);
});
