const GeneralInformations = require('../models/GeneralInformations');

exports.addGeneralInformation = async (req, res) => {
    const { generalInformation, error } = await GeneralInformations.addGeneralInformation(req.body);
    console.log(generalInformation, "geliyor mu");
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