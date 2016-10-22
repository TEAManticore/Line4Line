var socketio = require('socket.io')

module.exports.listen = function(http){
  io = socketio.listen(http)
  //establish socket connection
  io.on('connection', function(client){
    console.log("socket running")

    client.on('sendingLine', function(lineData) {
      stories.createNewLine(lineData).then(line => {
        io.emit('lineSaved', line)
      })
    })

  })
}
