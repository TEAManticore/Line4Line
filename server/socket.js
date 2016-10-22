const db = require('./models/config')
const Story = require('./models/story')
const Line = require('./models/line')
const User = require('./models/user')
var socketio = require('socket.io')

module.exports.listen = function(http){
  io = socketio.listen(http)
  //establish socket connection
  io.on('connection', function(client){
    console.log("socket running")
    client.on('salty slug',function() {
      console.log('~~~~~~~~~~~~~Chuck is a salty slug~~~~~~~~~~~')
    })
    
  })
}