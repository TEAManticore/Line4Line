import React from 'react'
import Line from './Line'
import Help from '../helpers'
import io from 'socket.io-client'

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
      prevLine: 0,
      currentUser: null,
      currentUserIndex:0
    }
  }


  //once the component renders
  componentDidMount () {
    //retrieve story data from server via helpers
    $.get(`http://localhost:8081/stories/${this.state.storyId}`)
    .then(story => {
      console.log('Got stories: ', story)
      //set state with this data
      this.setState({
        title: story.title,
        users: story.users,
        complete: story.complete,
        length: story.length,
        numberUsers: story.numberUsers,
        currentLine: 0,
        lines: story.lines,
        prevLine: 0,
      })
      $.get('http://localhost:8081/user')
      .then(user => {
        console.log('user: ',user)
        const currentUserIndex = this.state.users.indexOf(user.id)
        this.setState({
          currentUser: user,
          currentUserIndex: currentUserIndex
        })
        console.log('currentUser: ', this.state.currentUser)
        console.log('currentUserIndex: ', this.state.currentUserIndex)
      }) 
    })
    socket.emit('salty slug')
  }

  //catch bubbled up events from line component
  // manageProgress(e){
  //   //track story progress
  //   this.setState({
  //     prevLine: this.state.prevLine + 1
  //   })
  //   //if progress shows story is complete
  //   if (this.state.prevLine === this.state.length){
  //     this.manageCompletion()
  //   }
  // }

  // manageCompletion(){
  //   console.log("story complete!")
  }
      
  render(){
    return (
      <div className="storyContainer" >  
        <h2 className="title">{ this.state.title }</h2>
        <div onSubmit={this.manageProgress.bind(this)}>
          {[...Array(this.state.numLines)].map((l, i) => 
            <Line story={this.state.storyId} prevLine={this.state.prevLine} text={this.state.lines[i]} userId={this.state.users[i]} key={i} position={i+1} />
          )}
        </div>
      </div>  
    )
  }

}

export default Story