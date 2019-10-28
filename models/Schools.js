const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schoolSchema = new Schema({
    ilkOkul: {
        type: String,
    },
    lise: {
        type: String,
    },
    yabanciDilHazırlık: {
        type: String,
    },
    Üniversite: {
        type: String,
    },
    YüksekLisans: {
        type: String,
    },
    Doktora: {
        type: String,
    },
});

const Schools = module.exports = mongoose.model('Schools', schoolSchema, 'Schools');

module.exports.addSchool = (params) => {
    try {
        const school = new Schools(params);
        return school.save()
            .then((savedSchool) => {
                return { school: savedSchool };
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
        return Schools.find({})
            .then((schools) => {
                return { schools };
            })
            .catch((error) => {
                return { error };
            });
    } catch (error) {
        return { error };
    }
}
