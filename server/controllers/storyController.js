const db = require('../models/config')
const Story = require('../models/story')
const Line = require('../models/line')
const User = require('../models/user')

module.exports = {
  getAllStories: (req, res) => {
    // Story.find((stories) => {
    //   res.send(stories);
    // })
  },
  createNewLine: (req, res) => {
    // var user = User.find({session: req.body.session})
    // var line = new Line({userId: user.userId, text: req.body.line);
  },
  createStory: (req, res) => {
    var length = req.body.length
    var title = req.body.title
    var numberUsers = req.body.numberUsers

    console.log(req.cookies)
    User.findOne({sessions: req.cookies.sessionId})
    .then((user)=>{
      new Story({title: title, length: length, users: [user._id], numberUsers: numberUsers }).save()
      .then((story) => {
        console.log("Story saved: ", story)
        res.redirect('/')
      })
    })
    .catch((err) => {
      console.log('Could not find user with that session')
    })



  },
  getOneStory: (req, res) => {
    console.log(req.params)
    Story.findOne({_id: req.params.id})
    .then((story) => {
        res.send(story)
    })
    .catch((err) => {
      console.log('Could not find story with that id')
      return res.status(404).send('Story not found')
    })
  }
};
