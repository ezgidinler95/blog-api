const Recommends = require('../models/Recommends');

exports.addRecommend = async (req, res) => {
    const { recommend, error } = await Recommends.addRecommend(req.body);
    if (!error) {
        res.json({
            code: 200,
            data: {
                recommend
            }
        });
    } else {
        res.json({
            code: 422,
            message: error.message
        });
    }
}

exports.allRecommends = async (req, res) => {
    const { recommends, error } = await Recommends.all();
    if (!error) {
        res.json({
            code: 200,
            data: {
                recommends
            }
        });
    } else {
        res.json({
            code: 422,
            message: error.message
        });
    }
}

exports.updateRecommend = async (req, res) => {
    const { recommend, error } = await Recommends.updateRecommend(req.body);
    if (!error) {
        res.json({
            code: 200,
            data: {
                recommend
            }
        });
    } else {
        res.json({
            code: 422,
            message: error.message
        });
    }
}