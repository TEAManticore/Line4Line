const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const saltRounds = 10
const Schema = mongoose.Schema

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  sessions: [ String ],
  stories: [ String ] 
})

userSchema.pre('save', function (next) {
  const user = this
  // if the user never updated their password
  // then no need to has password
  if (!user.isModified('password')) {
    next()
  } else {
    bcrypt.hash(user.password, saltRounds, function (err, hash) {
      if (err) next(err)
      user.password = hash
      next()
    })
  }
})

const User = mongoose.model('User', userSchema)
module.exports = User