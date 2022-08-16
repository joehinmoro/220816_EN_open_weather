// IMPORTS
const router = require("express").Router();
const { redirect } = require("../controllers");

// ROUTES
router.all("/", redirect);

module.exports = router;
