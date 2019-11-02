const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recommendSchema = new Schema({
    oneriBaslik: {
        type: String,
    },
    oneriler: {
        type: String,
    },
});

const Recommends = module.exports = mongoose.model('Recommends', recommendSchema, 'Recommends');

module.exports.addRecommend = (params) => {
    try {
        const recommend = new Recommends(params);
        return recommend.save()
            .then((savedRecommend) => {
                return { recommend: savedRecommend };
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
        return Recommends.find({})
            .then((recommends) => {
                return { recommends };
            })
            .catch((error) => {
                return { error };
            });
    } catch (error) {
        return { error };
    }
}

module.exports.updateRecommend = (params) => {
    try {
        return Recommends.findByIdAndUpdate(mongoose.Types.ObjectId(params._id), { ...params }, { new: true })
            .then((updatedRecommend) => {
                return { recommend: updatedRecommend };
            })
            .catch((error) => {
                return { error };
            });
    } catch (error) {
        return { error };
    }
}