const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const generalInformationSchema = new Schema({
    genelBilgi: {
        type: String,
    },
    baslik: {
        type: String,
    },
    tarih: {
        type: Date,
        default: Date.now
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

module.exports.all = () => {
    try {
        return GeneralInformations.find({})
            .then((generalInformations) => {
                return { generalInformations };
            })
            .catch((error) => {
                return { error };
            });
    } catch (error) {
        return { error };
    }
}

module.exports.updateGeneralInformation = (params) => {
    try {
        return GeneralInformations.findByIdAndUpdate(mongoose.Types.ObjectId(params._id), { ...params }, { new: true })
            .then((updatedGeneralInformation) => {
                return { generalInformation: updatedGeneralInformation };
            })
            .catch((error) => {
                return { error };
            });
    } catch (error) {
        return { error };
    }
}
