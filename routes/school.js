const express = require('express');
const router = express.Router();
const schoolController = require('../controllers/schoolController');

router.post('/', schoolController.addSchool);
router.get('/all', schoolController.allSchools);

module.exports = router;