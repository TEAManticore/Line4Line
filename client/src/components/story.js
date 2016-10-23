import React from 'react'
import Line from './Line'
import Help from '../helpers'
import io from 'socket.io-client'
var storyThis;

const socket = io('http://localhost:8081')

class Story extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      storyId: this.props.params.id,
      title: '',
      users: [],
      complete: false,
      length: 0,
      numberUsers: 0,
      currentLine: 0,
      lines: [],
      currentUser: null,
      currentUserIndex: 0,
      prevLineIndex: 0
    }
    storyThis = this;
  }

  //once the component renders
  componentDidMount () {
    //retrieve story data from server via helpers
    $.get(`http://localhost:8081/stories/${this.state.storyId}`)
    .then(story => {
      console.log('Got story: ', story)
      //set state with this data
      this.setState({
        title: story.title,
        users: story.users,
        complete: story.complete,
        length: story.length,
        numberUsers: story.numberUsers,
        currentLine: story.currentLine,
        lines: story.lines
      })
      console.log('lines',this.state.lines)
      $.get('http://localhost:8081/user')
      .then(user => {

        const currentUserIndex = this.state.users.indexOf(user.id)
        const prevLineIndex = (currentUserIndex ? currentUserIndex - 1 : currentUserIndex)

        this.setState({
          currentUser: user,
          currentUserIndex: currentUserIndex,
          prevLineIndex: prevLineIndex
        })
        console.log('currentUser: ', this.state.currentUser)
        console.log('prevLineIndex' , this.state.prevLineIndex)
      })
    })
    socket.emit('salty slug')

    socket.on('updateStory', function(line) {
      console.log('inside of the story component: ', line)
      console.log('storyThis.state.lines ', storyThis.state.lines)
      console.log('line._id ', line._id)
      var updatedLines = storyThis.state.lines
      updatedLines.push(line._id)
      console.log('UPDATED LINES: ', updatedLines)
      storyThis.setState({
        lines: updatedLines
      })
      console.log(storyThis.state)
    })

  }


  render(){

    if (this.state.currentUser) {

      const prevLine = this.state.lines[this.state.prevLineIndex]
      const currLine = {userId: this.state.currentUser.id, text: '', story: this.state.storyId}
      const currComplete = this.state.lines[this.state.currentUserIndex]

      if (this.state.currentLine === 0 && this.state.currentUserIndex === 0) {
      //If the current user is the creator of the story and has not written a line yet
        return (
          <div className="storyContainer" >
            <h2 className="title">{ this.state.title }</h2>

            <Line line={currLine} lock={false} />

          </div>
        )

      } else if (this.state.currentLine > 0 && this.state.currentUserIndex === 0) {
      //If the current user is the creator of the story and has already written their line
        return (
          <div className="storyContainer" >
            <h2 className="title">{ this.state.title }</h2>

            <Line line={currComplete} lock={true} />

          </div>
        )

      } else if (this.state.currentLine > this.state.currentUserIndex) {
      //If the current user is not the creator and has already written their line
        return (
          <div className="storyContainer" >
            <h2 className="title">{ this.state.title }</h2>

            <div>
              <Line line={prevLine} lock={true} />
              <Line line={currComplete} lock={true} />
            </div>

          </div>
        )
      } else if (this.state.currentLine !== this.state.currentUserIndex) {
      //If the current user is not the creator and has not written their line and it is not their turn
        return (
          <div className="storyContainer" >
            <h2 className="title">{ this.state.title }</h2>

            <h3>Not your turn!</h3>

          </div>
        )
      } else {
      //If the current user is not the creator and has not written their line and it is their turn to write
         return (
          <div className="storyContainer" >
            <h2 className="title">{ this.state.title }</h2>

            <div>
              <Line line={prevLine} lock={true} />
              <Line line={currLine} lock={false} />
            </div>

          </div>
        )

      }
    } else {
      return (
        <div>
          <h2>Please Log In</h2>
        </div>
      )
    }

  }

}

export default Story
