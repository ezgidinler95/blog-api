const express = require('express');
const router = express.Router();
const agendaController = require('../controllers/agendaController');

router.post('/', agendaController.addAgenda);
router.get('/all', agendaController.allAgendas);
router.put('/', agendaController.updateAgenda);

module.exports = router;