const mongoose   = require('mongoose')
//hashing tool
//average number of rounds
const Schema     = mongoose.Schema
//set up for a new user
const userSchema = new Schema({
//user name for a user, required
  name        : { type: String, required: true },
  //session id list for a user
  facebookId  : { type: String, required: true, unique: true },
  //list of story ids the user has been involved with
  profilePic  : String,

  token       : String,

  stories     : [ String ]
})

const User      = mongoose.model('User', userSchema)
module.exports  = User
