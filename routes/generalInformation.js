const express = require('express');
const router = express.Router();
const generalInformationController = require("../controller/generalInformationController.js");

router.post('/', generalInformationController.addGeneralInformation);

module.exports = router;