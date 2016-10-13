const mongoose = require('mongoose')
const Schema = mongoose.Schema

const lineSchema = require('./line')

const storySchema = new Schema({
  title: { type: String, required: true, unique: true },
  users: [ String ],
  complete: { type: Boolean, default: false },
  length: Integer,
  numberUsers: Integer,
  currentLine: { type: Integer, default: 0 }
  lines: [ lineSchema ]
})

module.exports = storySchema