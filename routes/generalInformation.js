const express = require('express');
const router = express.Router();
const generalInformationController = require('../controllers/generalInformationController');

router.post('/', generalInformationController.addGeneralInformation);
router.get('/all', generalInformationController.allGeneralInformation);

module.exports = router;