var Help = require('../helpers')
import React from 'react'

class Line extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      hidden: false,
      lock: false,
      text: this.props.text,
      userId: this.props.userId,
      story: this.props.story
    }
  }

  // shouldBeHidden(){
  //   console.log("position", this.props.position)
  //   console.log("prev", this.props.prevLine)

  //   if (!this.props.position >= this.props.prev){
  //     this.setState({
  //       hidden: true
  //     })
  //   }


  // }

  handleSubmit(e){
    e.preventDefault()  
    //lock in text value
    this.setState({
      lock: true,
    })

    var lineData = {
      userId: this.props.userId,
      text: this.state.text,
      story: this.state.story
    }
    //send text to server via helpers
    Help.sendLineData(lineData)

    // this.shouldBeHidden()
  }

  //observe change to input field as user types
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
        // this.state.hidden ? 
        //   //if hidden is true (aka not prev line)
        //   <div className="lineForm">
        //     <div className="userLine">user</div>
        //     <div className="lineInput">YOU CAN'T SEE MEEEEE</div>
        //   </div> :
        
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


