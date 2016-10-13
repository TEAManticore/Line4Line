import React from 'react'
import Lobby from './Lobby'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      currentView: 'Login'
    }
  }

  render () {
    return (
      <Lobby />
    )
  }
}

export default App
