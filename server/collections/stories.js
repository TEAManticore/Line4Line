var Story = require('../models/story');

var Stories = new db.Collection();

Stories.model = Story;

module.exports = Stories;