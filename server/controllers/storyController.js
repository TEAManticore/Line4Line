const db = require('../models/config')
var Story = require('../models/story')
var Line = require('../models/line')
var User = require('../models/user')

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

  },
  getOneStory: (req, res) => {
    
  }
};
