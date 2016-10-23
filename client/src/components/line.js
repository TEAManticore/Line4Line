import React from 'react'
import io from 'socket.io-client'
const socket = io()

class Line extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      userId: props.line.userId,
      text: props.line.text,
      story: props.line.story,
      lock: props.lock
    }

    var lineThis = this;
    socket.on('lineSaved', function(line) {
      console.log('imma little bitch: ', line)
      lineThis.setState({
        userId: line.userId,
        text: line.text,
        story: line.story
      })
      socket.emit('updateStoryWithNewLine', line)
    })
  }




  handleSubmit(e){
    e.preventDefault()
    //lock in text value
    this.setState({
      lock: true,
    })

    var lineData = {
      userId: this.state.userId,
      text: this.state.text,
      story: this.state.story
    }
    console.log(lineData)
    //send text to server via helpers
    socket.emit('sendingLine', lineData)
  }

  // observe change to input field as user types
  handleChange(e){
    e.preventDefault()
    this.setState({
      text: e.target.value
    })

  }


  render(){
    return (
      <div className="lineContainer">
      {
        !this.state.lock ?
          //if user hasn't submitted text, render form
          <form ref="form" onSubmit={this.handleSubmit.bind(this)} className="lineForm">
            <h3 className="userLine">user</h3>
            <input name="input" value={this.state.text} onChange={(e) => this.handleChange(e)} className="lineInput" type="text" placeholder="..." />
          </form> :
          //if user has already submitted text, render text as div
          <div className="lineForm">
            <div className="userLine">user</div>
            <div className="lineInput">{this.state.text}</div>
          </div>

      }
      </div>
    )
  }
}

export default Line
