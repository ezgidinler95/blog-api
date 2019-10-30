const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const opinionSchema = new Schema({
    name: {
        type: String,
    },
    opinion: {
        type: String,
    },

});

const Opinions = module.exports = mongoose.model('Opinions', opinionSchema, 'Opinions');

module.exports.addOpinion = (params) => {
    try {
        const opinion = new Opinions(params);
        return opinion.save()
            .then((savedOpinion) => {
                return { opinion: savedOpinion };
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
        return Opinions.find({})
            .then((opinions) => {
                return { opinions };
            })
            .catch((error) => {
                return { error };
            });
    } catch (error) {
        return { error };
    }
}
