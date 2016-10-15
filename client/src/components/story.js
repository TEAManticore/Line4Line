import React from 'react'
import dummyData from '../dummyData'
import Line from './Line'

class Story extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      lines: dummyData
    }
  }

  render(){
    return (
      <div className="story">  
        <h2 className="title"> TITLE HERE</h2>
        {this.state.lines.map((l, i) => 
          <Line userid={l.userId} key={i} />
        )}
      </div>  
    )
  }

}

export default Story