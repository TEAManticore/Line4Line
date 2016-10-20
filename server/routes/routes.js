const stories = require('../controllers/storyController')
const router = require('express').Router()
const path = require('path')
const passport = require('passport')

function isAuthed(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.send('error')
}

//Connect controller methods to their corresponding routes
router.route('/stories').get(isAuthed,stories.getAllStories)

router.route('/stories/:id').get(stories.getOneStory)

router.route('/join/:id').put(stories.joinStory);

router.route('/stories/:id').get(users.get);

router.route('/stories').post(stories.createStory)

router.route('/stories/:id').put(stories.createNewLine)

router.route('/auth/facebook').get(passport.authenticate('facebook'))

router.get('/', (req,res) => {
  res.sendFile(path.resolve(__dirname, '../../dist/index.html'))
})

// facebook will call this URL
router.route('/auth/facebook/return').get(passport.authenticate('facebook', {
  failureRedirect: '/#/fail',
  successRedirect: '/#/'
}))
module.exports = router
