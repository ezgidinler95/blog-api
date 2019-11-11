const Agendas = require('../models/Agendas');

exports.addAgenda = async (req, res) => {
    const { agenda, error } = await Agendas.addAgenda(req.body);
    if (!error) {
        res.json({
            code: 200,
            data: {
                agenda
            }
        });
    } else {
        res.json({
            code: 422,
            message: error.message
        });
    }
}

exports.allAgendas = async (req, res) => {
    const { agendas, error } = await Agendas.all();
    if (!error) {
        res.json({
            code: 200,
            data: {
                agendas
            }
        });
    } else {
        res.json({
            code: 422,
            message: error.message
        });
    }
}

exports.updateAgenda = async (req, res) => {
    const { agenda, error } = await Agendas.updateAgenda(req.body);
    if (!error) {
        res.json({
            code: 200,
            data: {
                agenda
            }
        });
    } else {
        res.json({
            code: 422,
            message: error.message
        });
    }

}