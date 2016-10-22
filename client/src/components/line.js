var Help = require('../helpers')
import React from 'react'

class Line extends React.Component {
  constructor(props){
    super(props)
  
  }


  componentDidMount () {
    console.log(this.props)
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

  // handleSubmit(e){
  //   e.preventDefault()  
  //   //lock in text value
  //   this.setState({
  //     lock: true,
  //   })

  //   var lineData = {
  //     userId: this.props.userId,
  //     text: this.state.text,
  //     story: this.state.story
  //   }
  //   console.log(lineData)
  //   //send text to server via helpers
  //   Help.sendLineData(lineData)

  //   // this.shouldBeHidden()
  // }

  // observe change to input field as user types
  // handleChange(e){
  //   e.preventDefault()
  //   this.setState({
  //     text: e.target.value
  //   })
  // }

  render(){
    return (
      <div className="lineContainer">   
           
            <div className="lineForm">
              <div className="userLine">user</div>
              <div className="lineInput"></div>
            </div>
        
      
      </div>  
    )
  }
}

export default Line


