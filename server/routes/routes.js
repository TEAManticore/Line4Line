const stories = require('../controllers/storyController')
const router = require('express').Router()
const path = require('path')
const passport = require('passport')

isAuthed = (req,res,next) => {
  if(req.isAuthenticated()){
    next()
  }
  res.send(req.isAuthenticated())
}

//Connect controller methods to their corresponding routes
router.route('/stories').get(stories.getAllStories)

router.route('/user').get(isAuthed,(req,res) => {
  const user = {
    id: req.user.facebookId,
    name: req.user.name,
    profileImage: req.user.profilePic
  }
  res.send(user)
})

router.route('/stories/:id').get(stories.getOneStory)

router.route('/join/:id').put(stories.joinStory);

router.route('/stories').post(stories.createStory)

router.route('/stories/:id').put(stories.createNewLine)

router.route('/logout').get((req,res) => {
  req.logout()
  res.redirect('/')
})

router.route('/auth/facebook').get(passport.authenticate('facebook'))

router.get('/', (req,res) => {
  res.sendFile(path.resolve(__dirname, '../../dist/index.html'))
})

// facebook will call this URL
router.route('/auth/facebook/return').get(passport.authenticate('facebook', {
  failureRedirect: '/#/fail',
  successRedirect: '/#/',
}))
router.route('/').get((req,res) => {
  res.sendFile(path.resolve(__dirname, '../../dist/index.html'))
})
module.exports = router
