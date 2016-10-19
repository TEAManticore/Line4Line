const stories = require('../controllers/storyController')
const users = require('../controllers/userController')
const router = require('express').Router();
const path = require('path')
const passport = require('passport')

//Connect controller methods to their corresponding routes
router.get('/stories',(req,res,next) => {
  if(req.isAuthenticated){
    console.log('IT FUCKING WORKS!~~~~~~~~~',req.user)
    next()
  }else{
    res.redirect('/')
  }
} ,stories.getAllStories)

router.get('/stories/:id', stories.getOneStory)

router.post('/stories', stories.createStory)

router.put('/stories/:id', stories.createNewLine)

router.get('/sign-in', passport.authenticate('facebook'))

router.get('/auth/facebook/callback',
  passport.authenticate('facebook'), 
  (req,res) =>{
    res.redirect('/')
  });


router.get('/home', (req,res) => {
  res.sendFile(path.resolve(__dirname, '../../dist/index.html'))
})

module.exports = router;
