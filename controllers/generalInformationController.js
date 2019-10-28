const GeneralInformations = require('../models/GeneralInformations');

exports.addGeneralInformation = async (req, res) => {
    const { generalInformation, error } = await GeneralInformations.addGeneralInformation(req.body);
    if (!error) {
        res.json({
            code: 200,
            data: {
                generalInformation
            }
        });
    } else {
        res.json({
            code: 422,
            message: error.message
        });
    }
}

exports.allGeneralInformation = async (req, res) => {
    const { generalInformations, error } = await GeneralInformations.all();
    if (!error) {
        res.json({
            code: 200,
            data: {
                generalInformations
            }
        });
    } else {
        res.json({
            code: 422,
            message: error.message
        });
    }
}
