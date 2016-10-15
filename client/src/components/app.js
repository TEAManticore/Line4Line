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
      <h1>test</h1>
      <Lobby />
      <div> 
        <Story />
      </div>
    )
  }
}

export default App
