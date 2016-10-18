import React from 'react'
import Line from './Line'
import Help from '../helpers'

class Story extends React.Component {
  constructor(props){
    super(props)
    this.state = {
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
    Help.getStoryData("")
    .then(stories => {
      console.log('Got stories: ', stories);
      this.setState({
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
      

  render(){
    return (
      <div className="storyContainer" >  
        <h2 className="title">{ this.state.title }</h2>
        {this.state.lines.map((l, i) => 
          <Line story={this.state.title} currentLine={this.state.currentLine} userid={l.userId} text={l.text} key={i} />
        )}
      </div>  
    )
  }

}

export default Story