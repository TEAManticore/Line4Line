const mongoose = require('mongoose');

const db = mongoose.connect('mongodb://localhost:51707/line4line');
module.exports = db;