import React from 'react'
import Line from './Line'
import Help from '../helpers'

class Story extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      //grab story id from url hash
      storyId: this.props.params.id,
      lines: [],
      title: '',
      users: [],
      prevLine: 0,
      length: 0,
      complete: false,
      numberUsers: 0
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
        lines: story.lines,
        title: story.title,
        users: story.users,
        prevLine: 0,
        length: story.length,
        complete: story.complete,
        numberUsers: story.numberUsers,
        numLines: 1
      })  
    })
  }

  //catch bubbled up events from line component
  manageProgress(e){
    //track story progress
    this.setState({
      prevLine: this.state.prevLine + 1,
      numLines: this.state.numLines + 1
    })
    //if progress shows story is complete
    if (this.state.prevLine === this.state.length){
      this.manageCompletion()
    }
  }

  manageCompletion(){
    console.log("story complete!")
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