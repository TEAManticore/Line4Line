const mongoose = require('mongoose')
//hashing tool
const bcrypt = require('bcrypt')
//average number of rounds
const saltRounds = 10
const Schema = mongoose.Schema
//set up for a new user
const userSchema = new Schema({
//user name for a user, required
  username: { type: String, required: true, unique: true },
  //password for a user, required
  password: { type: String, required: true },
  //session id list for a user
  sessions: [ String ],
  //list of story ids the user has been involved with
  stories: [ String ] 
})

userSchema.pre('save', function (next) {
  const user = this
  // checks if the password is altered/new
  if (!user.isModified('password')) {
    next()
  } else {
    //lets salt and hash this breakfast
    bcrypt.hash(user.password, saltRounds, function (err, hash) {
      if (err) next(err)
      user.password = hash
      next()
    })
  }
})

const User = mongoose.model('User', userSchema)
module.exports = User