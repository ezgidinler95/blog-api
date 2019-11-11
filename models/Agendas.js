const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const agendaSchemma = new Schema({
    baslik: {
        type: String,
    },
    haberler: {
        type: String,
    },
});

const Agendas = module.exports = mongoose.model('Agendas', agendaSchemma, 'Agendas');

module.exports.addAgenda = (params) => {
    try {
        const agenda = new Agendas(params);
        return agenda.save()
            .then((savedAgenda) => {
                return { agenda: savedAgenda };
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
        return Agendas.find({})
            .then((agendas) => {
                return { agendas };
            })
            .catch((error) => {
                return { error };
            });
    } catch (error) {
        return { error };
    }
}

module.exports.updateAgenda = (params) => {
    try {
        return Agendas.findByIdAndUpdate(mongoose.Types.ObjectId(params._id), { ...params }, { new: true })
            .then((updatedAgenda) => {
                return { agenda: updatedAgenda };
            })
            .catch((error) => {
                return { error };
            });
    } catch (error) {
        return { error };
    }
}
