const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const generalInformationSchema = new Schema({
    general: {
        type: String,
        required: true
    },
});

const GeneralInformations = module.exports = mongoose.model('GeneralInformations', generalInformationSchema, 'GeneralInformations');

module.exports.addGeneralInformation = (params) => {

    try {
        const generalInformation = new GeneralInformations(params);
        return generalInformation.save()
            .then((savedGeneralInformation) => {
                return { generalInformation: savedGeneralInformation };
            })
            .catch((error) => {
                return { error };
            });
    } catch (error) {
        return { error };
    }
}