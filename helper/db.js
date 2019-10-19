const mongoose = require("mongoose");

module.exports = () => {

    // mongodb connection string
    // mongodb bağlantı dizesi
    mongoose.connect('mongodb://localhost:27017/ezgi_blog', { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false });

    // mongodb connection event
    // mongodb bağlantı olayı
    mongoose.connection.on('open', () => {
        console.log('MongoDB: Bağlandı');
    });

    // mongodb connection failed event
    // mongodb bağlantısı başarısız oldu
    mongoose.connection.on('error', (err) => {
        console.log('MongoDB: Error', err);
    });

    mongoose.Promise = global.Promise;
}