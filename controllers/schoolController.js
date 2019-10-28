const Schools = require('../models/Schools');

exports.addSchool = async (req, res) => {
    const { school, error } = await Schools.addSchool(req.body);
    if (!error) {
        res.json({
            code: 200,
            data: {
                school
            }
        });
    } else {
        res.json({
            code: 422,
            message: error.message
        });
    }
}

exports.allSchools = async (req, res) => {
    const { schools, error } = await Schools.all();
    if (!error) {
        res.json({
            code: 200,
            data: {
                schools
            }
        });
    } else {
        res.json({
            code: 422,
            message: error.message
        });
    }
}
