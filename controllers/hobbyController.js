const Hobbies = require('../models/Hobbies');

exports.addHobby = async (req, res) => {
    const { hobby, error } = await Hobbies.addHobby(req.body);
    if (!error) {
        res.json({
            code: 200,
            data: {
                hobby
            }
        });
    } else {
        res.json({
            code: 422,
            message: error.message
        });
    }
}

exports.allHobbies = async (req, res) => {
    const { hobbies, error } = await Hobbies.all();
    if (!error) {
        res.json({
            code: 200,
            data: {
                hobbies
            }
        });
    } else {
        res.json({
            code: 422,
            message: error.message
        });
    }
}
