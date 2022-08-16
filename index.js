// IMPORTS
// modules
const { join } = require("path");
const express = require("express");
const dotenv = require("dotenv").config();
// routes
const { rootRoute, weatherRoute, _404Route } = require("./routes");

// APP SETTINGS
// instantiate app
const app = express();
// set view engine
app.set("view engine", "ejs");
// set views directory
app.set("views", join(__dirname, "views"));

// GENERAL MIDDLEWARE
// serve public files
app.use(express.static(join(__dirname, "public")));
// parse post request body
app.use(express.urlencoded({ extended: true }));

// ROUTES
// root route
app.all("/", rootRoute);

// weather route
app.use("/weather", weatherRoute);

// 404 route
app.use(_404Route);

// SERVER
// server variables
const port = process.env.PORT || 3000;
const host = process.env.HOST || "localhost";
// listen
app.listen(port, host, () => {
    console.log("Listening to request");
});
