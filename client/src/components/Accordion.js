import React from 'react'
import CreateStory from './CreateStory'

const styles = {
  active:  {
    display: 'inherit'
  },
  inactive: {
    display: 'none'
  }
}

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

    const stateStyle = this.state.active ? styles.active : styles.inactive
    const buttonText = this.state.active ? 'Hide' : 'Create a story'

    return (
      <div>
        <button onClick={this.toggle}>{buttonText}</button>
        <div style={stateStyle}>
          <CreateStory />
        </div>
      </div>
    )
  }
}


export default Accordion