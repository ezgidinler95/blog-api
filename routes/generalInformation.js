const express = require('express');
const router = express.Router();
const generalInformationController = require('../controllers/generalInformationController');

router.post('/', generalInformationController.addGeneralInformation);
router.get('/all', generalInformationController.allGeneralInformation);
router.put('/', generalInformationController.updateGeneralInformation);
router.get('/:_id', generalInformationController.getGeneralInformation);

module.exports = router;