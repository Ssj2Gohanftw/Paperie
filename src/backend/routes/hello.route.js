const express = require("express");
const router = express.Router();

const { helloWorld } = require("../controllers/test.controller.js");

router.route("/").get(helloWorld);

module.exports = router;
