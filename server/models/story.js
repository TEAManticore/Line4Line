const mongoose = require('mongoose')
const Schema = mongoose.Schema

const lineSchema = require('./Line')

const storySchema = new Schema({
  title: { type: String, required: true, unique: true },
  users: [ String ],
  complete: Boolean,
  length: Integer,
  numberUsers: Integer,
  currentLine: { type: Integer, default: 0 }
  lines: [ lineSchema ]
})

module.exports = storySchema