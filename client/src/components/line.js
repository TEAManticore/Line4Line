var Help = require('../helpers')
import React from 'react'

class Line extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      hidden: false,
      lock: true,
      text: this.props.text,
      userId: this.props.userId,
      story: this.props.story
    }

    // 
    // if (this.key < this.props.currentLine){
    //   this.setState({
    //     lock: true
    //   })
    // } 
  }

  //send text to server via helpers
  //lock in text value
  handleSubmit(e){
    e.preventDefault()  
    this.setState({
      lock: true
    })
    var lineData = {
      userId: this.props.userId,
      text: this.state.text,
      story: this.state.storyID
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
        <form onSubmit={this.handleSubmit.bind(this)} className="lineForm">
        <h3 className="userLine">user</h3>
          <input onChange={(e) => this.handleChange(e)} className="lineInput" type="text" placeholder="..." />
        </form>
      </div>  
    )
  }
}

export default Line


