const db = require('../models/config')
const Story = require('../models/story')
const Line = require('../models/line')
const User = require('../models/user')

module.exports = {
  getAllStories: (req, res) => {
    Story.find({complete: false, $where: 'this.users.length < this.numberUsers'})
    .then((stories) => {
      res.json(stories)
    })
  },

  joinStory: (req, res) => {
    User.findOne({sessions: req.cookies.sessionId})
      .then(user => {
        Story.findOne({_id: req.params.id}).then(story => {
          if(story.users.indexOf(user._id) !== -1) {
            return res.status(404).send('Already joined')
          } else {
            story.update({ $push: {users: user._id}})
            .then(story => {
              console.log('updated')
              res.send(story)
            })
          }
        })
      })
  },
  createNewLine: (req, res) => {
    var lineContent = req.body.text
    Story.findOne({_id: req.params.id}) // Find the story that they are trying to add the line to
    .then((story) => {
      User.findOne({sessions: req.cookies.sessionId}) // Find current user
      .then((user) => {
        new Line({userId: user._id, story: story._id, text: lineContent}).save() // Create the new line and associate it with the user and story
        .then((line) => {
          story.update({ $push: { lines: line._id }})
          .then((story) => {
            res.send(line)
          })
        })
      })
    })
  },
  createStory: (req, res) => {
    const length = req.body.length
    const title = req.body.title
    const numberUsers = req.body.numberUsers

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
      return res.status(404).send('User not found')
    })



  },
  getOneStory: (req, res) => {
    console.log(req.params)
    Story.findOne({_id: req.params.id})
    .then((story) => {
        res.json(story)
    })
    .catch((err) => {
      console.log('Could not find story with that id')
      return res.status(404).send('Story not found')
    })
  }
};
