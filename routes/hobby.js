const express = require('express');
const router = express.Router();
const hobbyController = require('../controllers/hobbyController');

const multer = require('multer');
const slugify = require('slugify');
const moment = require("moment");

const hobbyImageFilesStorage = multer.diskStorage({
    destination: './public/hobbyImages',
    filename: function (req, file, cb) {
        console.log("file", file)
        cb(null, moment().format("YYYY-MM-DD-hh-mm-ss") + "-" + slugify(file.originalname));
    }
});

router.post('/', multer({ storage: hobbyImageFilesStorage }).any(), hobbyController.addHobby);
router.get('/all', hobbyController.allHobbies);
router.put('/', hobbyController.updateHobby);

module.exports = router;