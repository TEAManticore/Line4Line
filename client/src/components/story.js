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
    Help.getStoryData('')
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
        numberUsers: stories.numberUsers
      })  
    })
    .catch(err => console.log(err))   
  }

  //catch bubbled up events from line component
  manageLines(e){
    
    this.setState({
      prevLine: this.state.prevLine + 1
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
          {this.state.lines.map((l, i) => 
            <Line story={this.state.storyId} prevLine={this.state.prevLine} userid={l.userId} text={l.text} key={i} position={i+1} />
          )}
        </div>
      </div>  
    )
  }

}

export default Story