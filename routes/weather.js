// IMPORTS
const router = require("express").Router();
const { getWeather, postWeather } = require("../controllers");

// ROUTES
// get weather
router.get("/", getWeather);
// post weather
router.post("/", postWeather);

// EXPORTS
module.exports = router;
