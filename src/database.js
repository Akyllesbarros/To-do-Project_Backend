require ('dotenv').config()
const mongoose = require('mongoose')

mongoose.Promise = global.Promise

const uri = process.env.dburl

mongoose.connect(uri, {
    authSource: 'admin',
    autoCreate: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(res => console.info('Database is connected!')).catch(err => console.warn("Database connection is fail."))

module.exports = mongoose
