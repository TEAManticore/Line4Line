const mongoose = require('mongoose')
mongoose.Promise = global.Promise
const db = mongoose.connect('mongodb://localhost:51707/line4line')
module.exports = db