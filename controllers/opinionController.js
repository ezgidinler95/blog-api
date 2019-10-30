const Opinions = require('../models/Opinions');

exports.addOpinion = async (req, res) => {
    const { opinion, error } = await Opinions.addOpinion(req.body);
    if (!error) {
        res.json({
            code: 200,
            data: {
                opinion
            }
        });
    } else {
        res.json({
            code: 422,
            message: error.message
        });
    }
}

exports.allOpinions = async (req, res) => {
    const { opinions, error } = await Opinions.all();
    if (!error) {
        res.json({
            code: 200,
            data: {
                opinions
            }
        });
    } else {
        res.json({
            code: 422,
            message: error.message
        });
    }
}
