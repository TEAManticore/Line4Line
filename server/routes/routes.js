const stories = require('../controllers/storyController')
const users = require('../controllers/userController')
const router = require('express').Router();
const path = require('path')

//Connect controller methods to their corresponding routes
router.get('/stories', stories.getAllStories);

router.get('/stories/:id', stories.getOneStory);

router.post('/stories', stories.createStory);

router.put('/stories/:id', stories.createNewLine);

router.put('/join/:id', stories.joinStory);

router.get('/stories/:id', users.get);

router.post('/sign-up', users.post);

router.post('/sign-in', users.verify);

router.get('/', (req,res) => {
  res.sendFile(path.resolve(__dirname, '../../dist/index.html'))
})

module.exports = router;
