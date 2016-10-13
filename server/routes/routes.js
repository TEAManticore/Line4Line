const stories = require('../controllers/storyController')
const users = require('../controllers/userController')
const router = require('express').Router();

//Connect controller methods to their corresponding routes
router.get('/stories', stories.getAllStories);

router.get('/stories/:id', stories.getOneStory);

router.post('/stories', stories.createStory);

router.put('/stories/:id', stories.createNewLine);

router.get('/stories/:id', users.get);

router.post('/sign-up', users.post);

router.post('/sign-in', users.verify);

router.get('/', (req,res) => {
  res.render(path.resolve(__dirname, '../../client/index.html'))
})

module.exports = router;
