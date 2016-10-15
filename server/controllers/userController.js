const db = require('../models/config')
const User = require('../models/user')
const uuid = require('node-uuid')

module.exports = {

  get: (req, res) => {
  
  },

  post: (req, res) => {
    console.log('=======>',req.body)
    const username =  req.body.username
    const password = req.body.password

    User.findOne({username: username})
    .then((user) => {
      if(!user) {
        var newUser = new User({
          username: username,
          password: password,
          sessions: uuid.v4()
        })
        newUser.save()
        .then((user) => {
          console.log(user)
          res.cookie('sessionId', user.sessions)
          res.redirect('/')
        })
      } else {
        const err = new Error({error: 'This username is already taken'})
        res.send(err)
      }
    })
  },

  verify: (req, res) => {
    const session = req.cookies.sessionId
    console.log(session)
  }

};
