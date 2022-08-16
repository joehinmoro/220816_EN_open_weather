// IMPORTS
const router = require("express").Router();
const { _404 } = require("../controllers");

// ROUTES
router.use(_404);

// EXPORTS
module.exports = router;
