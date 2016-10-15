import React from 'react'
import Lobby from './Lobby'
import Story from './Story'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      currentView: 'Login'
    }
  }

  render () {
    return (
      <div> 
        <h1>test</h1>
        <Lobby />
        <Story />
      </div>
    )
  }
}

export default App
