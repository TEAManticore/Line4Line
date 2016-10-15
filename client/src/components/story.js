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
        {dummyData.map((l, i) => 
          <Line line={l.text} userid={l.userId} key={i} />
        )}
      </div>  
    )
  }

}

export default Story