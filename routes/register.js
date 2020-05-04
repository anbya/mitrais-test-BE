const express = require('express')
const router = express.Router()
const {getAll,getByid,addUser} = require("../controllers/register")

router.get("/", getAll);
router.get("/byid", getByid);
router.post("/", addUser);

module.exports = router;