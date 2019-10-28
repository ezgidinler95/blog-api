const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({

    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },

});

const Users = module.exports = mongoose.model('Users', userSchema, 'Users');

module.exports.login = async (params) => {
    try {
        return Users.find({ email: params.email })
            .then((user) => {
                console.log(user);
                return { user };
            })
            .catch((error) => {
                return { error };
            });
    } catch (error) {
        return { error };
    }
}
