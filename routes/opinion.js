const express = require('express');
const router = express.Router();
const opinionController = require('../controllers/opinionController');

router.post('/', opinionController.addOpinion);
router.get('/all', opinionController.allOpinions);

module.exports = router;