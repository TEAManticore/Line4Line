import React from 'react'
import CreateStory from './CreateStory'

class Accordion extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false
    }
    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    this.setState({
      active: !this.state.active
    })
  }

  render () {

    const buttonText = this.state.active ? 'Hide' : 'Create a story'
    const sliderClass = this.state.active ? "show" : "hide"

    return (
      <div>
        <div className="toggleButtonWrap">
          <button className="standardButton blackButton" onClick={this.toggle}>{buttonText}</button>
        </div>
        <div className={sliderClass}>
          <CreateStory />
        </div>
      </div>
    )
  }
}


export default Accordion