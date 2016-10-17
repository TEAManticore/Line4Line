var helpers = {
  getlines: function(cb){
    cb([
      {userId: 34, text: "once upon a time"},
      {userId: 47, text: "there was a team"},
      {userId: 23, text: "named the dodgers"},
      {userId: 19, text: "who were on their way to play the cubs"}
      ])
  },

  sendLines: function(storyLine){
    console.log(storyLine)    
    //send story line data to server
  },

  getStory: function(cb){
    cb()
  },

  sendStory: function(story){
    console.log(story)
  },

  fakeStory: {
      //title of the story
      title: 'Dodgers @ Cubbies',
      //list of user ids involved in this story
      users: [ '34', '47', '23', '19', '22', '46', '10' ],
      //tells whether the story is complete or not
      complete: false,
      //the max length of the story
      length: 7,
      //max number of users in the story
      numberUsers: 7,
      //current line the story is on
      currentLine: 5,
      //list of lines in the story in order
      lines: [
        {userId: 34, text: "once upon a time"},
        {userId: 47, text: "there was a team"},
        {userId: 23, text: "named the dodgers"},
        {userId: 19, text: "who were on their way to play the cubs"}
      ]
    }
}



module.exports = helpers