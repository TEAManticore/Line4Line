const mongoose = require('mongoose')
mongoose.Promise = global.Promise
const db = mongoose.connect(process.env.DBPATH)
module.exports = db