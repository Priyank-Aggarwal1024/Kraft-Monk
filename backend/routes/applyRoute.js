const express = require("express");
const { applyInternship } = require("../controllers/applyController");
const applyRouter = express.Router();

applyRouter.post("/apply", applyInternship)
module.exports = { applyRouter }