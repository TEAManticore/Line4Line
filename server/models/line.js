const mongoose = require('mongoose')
const Schema = mongoose.Schema

const lineSchema = new Schema({
  userId: { type: String, required: true },
  text: { type: String, required: true }
})

module.exports = lineSchema