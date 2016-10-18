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
      currentLine: 0,
      length: 0,
      complete: false,
      numberUsers: 0
      // lines: Help.fakeStory.lines,
      // title: Help.fakeStory.title,
      // users: Help.fakeStory.users,
      // currentLine: Help.fakeStory.currentLine,
      // length: Help.fakeStory.length,
      // complete: Help.fakeStory.complete,
      // numberUsers: Help.fakeStory.numberUsers
    }
  }

  //retrieve story data from server via helpers
  //set state with this data
  componentDidMount () {
    Help.getStoryData(this.state.storyId)
    .then(stories => {
      console.log('Got stories: ', stories);
      this.setState({
        storyId: stories._id,
        lines: stories.lines,
        title: stories.title,
        users: stories.users,
        currentLine: stories.currentLine,
        length: stories.length,
        complete: stories.complete,
        numberUsers: stories.numberUsers
      })
    })   
  }


  //catch bubbled up events from line component
  manageLines(e){
    this.state.currentLine++
    console.log(this.state.currentLine)
    if (this.state.currentLine === this.state.length){
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
            <Line story={this.state.storyId} userid={l.userId} text={l.text} key={i} />
          )}
        </div>
      </div>  
    )
  }

}

export default Story