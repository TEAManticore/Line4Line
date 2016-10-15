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
    var lineContent = req.body.text
    console.log('cookies: ', req.cookies.sessionId)
    console.log(lineContent);
    User.findOne({sessions: req.cookies.sessionId}) // Find current user
    .then((user) => {
      console.log('USER', user)
      new Line({userId: user._id, text: lineContent}).save() // Create the new line and associate it with the user's id
      .then((line) => {
        console.log('LINE', line)
        Story.findOne({_id: req.params.id}) // Find the story that they are trying to add the line to
        .then((story) => {
          story.update({ $push: { lines: line }}).save() // update the story by adding the line
          .then((story) => {
            console.log('Successfully updated story')
          })
        })
      })
    })
    .catch((err) => {
      console.log('Could not find user with that session')
      return res.status(404).send('User not found')
    })
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
      return res.status(404).send('User not found')
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
