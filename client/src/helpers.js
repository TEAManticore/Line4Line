import axios from 'axios'

var helpers = {
  getLineData: function(cb){
    axios.get(`http://127.0.0.1:8081/stories/${id}`)
  },

  sendLineData: function(lineData){
    axios.put(`http://127.0.0.1:8081/stories/${id}`, lineData)
    .then(response => {
      console.log(response)
    })
  },

  getStoryData: function(id){
    return axios.get(`http://127.0.0.1:8081/stories/${id}`)
    .then( res => 
      // stories.data
      helpers.fakeStory
    )
  },

  sendStoryData: function(storyData){
    axios.post(`http://127.0.0.1:8081/stories`, storyData)
    .then(response => {
      console.log(response)
    })
  },

  fakeStory: {
      "title": "Cubs @ Dodgers",
      "users": [ "1", "2", "3", "4", "5", "6", "7" ],
      "complete": "false",
      "length": "7",
      "numberUsers": "7",
      "currentLine": "5",
      "lines": [
        {"userId": "1", "text": "once upon a time"},
        {"userId": "2", "text": "there was a team"},
        {"userId": "3", "text": "named the dodgers"},
        {"userId": "4", "text": "who were tied 1-1 vs. the cubs"}
      ]
    }
}



module.exports = helpers
