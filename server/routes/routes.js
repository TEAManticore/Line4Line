var controller = require('../controllers');
var router = require('express').Router();

//Connect controller methods to their corresponding routes
router.get('/stories', controller.stories.getAllStories);

router.get('/stories/:id', controller.stories.getOneStory);

router.post('/stories', controller.stories.createStory);

router.put('/stories/:id', controller.stories.createNewLine);

router.get('/stories/:id', controller.users.get);

router.post('/users', controller.users.post);

module.exports = router;
