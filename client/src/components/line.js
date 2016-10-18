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

  //send text to server via helpers
  //lock in text value
  handleSubmit(e){
    e.preventDefault()  
    this.setState({
      lock: true,
    })


    var lineData = {
      userId: this.props.userId,
      text: this.state.text,
      story: this.state.story
    }
    Help.sendLineData(lineData)
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
      {!this.state.lock ?  
        //while lock === false, render form  
        <form ref="form" onSubmit={this.handleSubmit.bind(this)} className="lineForm">
          <h3 className="userLine">user</h3>
          <input name="input" value={this.state.text} onChange={(e) => this.handleChange(e)} className="lineInput" type="text" placeholder="..." />
        </form> :
        //while lock === true, render div
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


