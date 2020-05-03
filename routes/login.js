const express = require('express')
const router = express.Router()
const {getAll} = require("../controllers/login")

router.get("/", getAll);

module.exports = router;