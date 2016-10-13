const mongoose = require('mongoose')
const Schema = mongoose.Schema
//call on the line model for an attribute further
//in the model
const lineSchema = require('./line')

const storySchema = new Schema({
  //title of the story
  title: { type: String, required: true, unique: true },
  //list of user ids involved in this story
  users: [ String ],
  //tells whether the story is complete or not
  complete: { type: Boolean, default: false },
  //the max length of the story
  length: Integer,
  //max number of users in the story
  numberUsers: Integer,
  //current line the story is on
  currentLine: { type: Integer, default: 0 }
  //list of lines in the story in order 
  lines: [ lineSchema ]
})

const Story = mongoose.model('Story', storySchema)
module.exports = Story