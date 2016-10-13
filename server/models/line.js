const mongoose = require('mongoose')
const Schema = mongoose.Schema
//creates the constant for the line model
const lineSchema = new Schema({
  //required attribute to assign the id to a user
  //a line must belong to only one user
  userId: { type: String, required: true },
  //the text in the line
  text: { type: String, required: true }
})

module.exports = lineSchema