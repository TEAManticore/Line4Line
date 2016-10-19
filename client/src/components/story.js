import React from 'react'
import Line from './Line'
import Help from '../helpers'

class Story extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      storyId: '',
      lines: [],
      title: '',
      users: [],
      prevLine: 0,
      length: 0,
      complete: false,
      numberUsers: 0
    }
  }

  //retrieve story data from server via helpers
  //set state with this data
  componentDidMount () {
    var storyId = window.location.hash.split('').splice(10,24).join('')
    console.log(storyId)
    Help.getStoryData(storyId)
    .then(stories => {
      console.log('Got stories: ', stories);
      this.setState({
        storyId: stories._id,
        lines: stories.lines,
        title: stories.title,
        users: stories.users,
        prevLine: 0,
        length: stories.length,
        complete: stories.complete,
        numberUsers: stories.numberUsers,
        numLines: 1
      })  
    })
  }

  //catch bubbled up events from line component
  manageLines(e){
    this.setState({
      prevLine: this.state.prevLine + 1,
      numLines: this.state.numLines + 1
    })
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
        <div onSubmit={this.manageLines.bind(this)}>
          {[...Array(this.state.numLines)].map((l, i) => 
            <Line story={this.state.storyId} prevLine={this.state.prevLine} text={this.state.lines[i]} userid={this.state.users[i]} key={i} position={i+1} />
          )}
        </div>
      </div>  
    )
  }

}

export default Story