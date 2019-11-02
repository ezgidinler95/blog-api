const express = require('express');
const router = express.Router();
const recommendController = require('../controllers/recommendController');

router.post('/', recommendController.addRecommend);
router.get('/all', recommendController.allRecommends);
router.put('/', recommendController.updateRecommend);

module.exports = router;