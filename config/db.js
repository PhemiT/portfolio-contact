const mongoose = require('mongoose')
require('dotenv').config('../../portfolio-contact')
const MONGOURI = process.env.MONGODB_URI;


const InitiateMongoServer = async () => {
    try {
        await mongoose.connect(MONGOURI, {
            useNewUrlParser: true
        });
        console.log('Connected to DB!!')
    } catch (e) {
        console.log(e)
        throw e
    }
}

module.exports = InitiateMongoServer;