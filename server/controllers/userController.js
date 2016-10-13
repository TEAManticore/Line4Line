const db = require('../models/config')
var User = require('../models/user')
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
          session: uuid.v4()
        })
        newUser.save()
        .then((user) => {
          res.cookie('session', user.session)
          res.redirect('/')
        })
      } else {
        const err = new Error({error: 'This username is already taken'})
        res.send(err)
      }
    })
  },

  verify: (req, res) => {

  }

};
