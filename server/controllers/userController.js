const db = require('../models/config')
const User = require('../models/user')
const uuid = require('node-uuid')

module.exports = {

  get: (req, res) => {
  
  },

  post: (req, res) => {
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
    const username = req.body.username
    const password = req.body.password

    User.findOne({username: username})
    .then((user) => {
      if(user){
        user.comparePassword(password, function(err, match) {
          if (match) {
            const session = uuid.v4()
            user.sessions = session
            user.save((data) => {
              res.cookie('sessionId', session)
              return res.redirect('/')
            },(err) => {
              return res.status(400).send('User could not be updated')
            })
          } else {
            return res.status(404).send('Password incorrect');
          }
        });
      } else {
        return res.status(404).send('User not found')
      }
    })
    .catch(function(err) {
      console.log(err);
      return res.status(500).send('idk lol');
    });   
  }

};
