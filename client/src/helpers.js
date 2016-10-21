var helpers = {
  getLineData: function(cb){
    return $.get(`http://127.0.0.1:8081/stories/${id}`)
  },

  sendLineData: function(lineData){
    return $.put(`http://127.0.0.1:8081/stories/${lineData.story}`, lineData)
    .then(response => {
      console.log(response)
    })
  },

  getStoryData: function(id){
    return $.get(`http://127.0.0.1:8081/stories/${id}`)
  },

  sendStoryData: function(storyData){
    return $.post(`http://127.0.0.1:8081/stories`, storyData)
    .then(response => {
      console.log(response)
    })
  },

  fakeStory: {
      "_id": '580681e09dbd1a66fa848f36',
      "title": "Cubs @ Dodgers",
      "users": [ "1", "2", "3", "4", "5", "6", "7" ],
      "complete": "false",
      "length": 7,
      "numberUsers": 7,
      "currentLine": 0,
      "lines": [
        {"userId": "1", "text": ""},
        {"userId": "2", "text": ""},
        {"userId": "3", "text": ""},
        {"userId": "4", "text": ""},
        {"userId": "5", "text": ""},
        {"userId": "6", "text": ""},
        {"userId": "7", "text": ""},
      ]
    }
}



module.exports = helpers
