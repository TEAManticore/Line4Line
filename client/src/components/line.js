var help = require('../helpers')
import React from 'react'

class Line extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      hidden: false,
      lock: false,
      value: ''
    }
  }

  handleSubmit(e){
    e.preventDefault()  
    this.setState({
      lock: true
    })
    var storyLine = {
      line: this.state.value
    }
    help.sendToServer()
  }

  handleChange(e){
    //observe change to input field as user types
    this.setState({
      value: e.target.value
    })
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit.bind(this)} className="lineForm">
        <input onChange={(e) => this.handleChange(e)} className="lineInput" type="text" placeholder="keep the story going!" />
      </form>
    )
  }
}

export default Line


