const express = require('express');
const router = express.Router();
const hobbyController = require('../controllers/hobbyController');

router.post('/', hobbyController.addHobby);
router.get('/all', hobbyController.allHobbies);
router.put('/', hobbyController.updateHobby);

module.exports = router;