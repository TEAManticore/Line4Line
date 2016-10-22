const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Story = require('./story')
const User = require('./user')
//creates the constant for the line model
const lineSchema = new Schema({
  //required attribute to assign the id to a user
  //a line must belong to only one user
  userId: { type: String, required: true },
  //the text in the line
  text: { type: String, required: true },
  //refference to the story document
  story: {type: Schema.ObjectId, ref: 'Story'}
})

const Line = mongoose.model('Line', lineSchema)
module.exports = Line