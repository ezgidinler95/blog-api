const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const hobbiesSchema = new Schema({
    baslik: {
        type: String,
        required: true
    },
    spor: {
        type: String,
    },
    dans: {
        type: String,
    },
    müzik: {
        type: String,
    },
    kitap: {
        type: String,
    },
    image: {
        type: String,
    },
});

const Hobbies = module.exports = mongoose.model('Hobbies', hobbiesSchema, 'Hobbies');

module.exports.addHobby = (params) => {
    try {
        const hobby = new Hobbies(params);
        return hobby.save()
            .then((savedHobby) => {
                return { hobby: savedHobby };
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
        return Hobbies.find({})
            .then((hobbies) => {
                return { hobbies };
            })
            .catch((error) => {
                return { error };
            });
    } catch (error) {
        return { error };
    }
}

module.exports.updateHobby = (params) => {
    try {
        return Hobbies.findByIdAndUpdate(mongoose.Types.ObjectId(params._id), { ...params }, { new: true })
            .then((updatedHobby) => {
                return { hobby: updatedHobby };
            })
            .catch((error) => {
                return { error };
            });
    } catch (error) {
        return { error };
    }
}