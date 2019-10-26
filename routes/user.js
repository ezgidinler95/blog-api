const express = require('express');
const router = express.Router();
const userController = require("../controllers/usercontroller.js");

router.post('/',userController.login);


module.exports = router;