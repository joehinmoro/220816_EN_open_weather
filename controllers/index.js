// IMPORTS
const { getWeather, postWeather } = require("./weather");
const { redirect } = require("./home");
const { _404 } = require("./_404");

// EXPORTS
module.exports = {
    getWeather,
    redirect,
    postWeather,
    _404,
};
