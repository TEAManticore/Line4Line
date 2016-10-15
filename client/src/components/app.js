import React from 'react'
import Lobby from './Lobby'
import Story from './Story'
import SignUp from './SignUp'
import SignIn from './SignIn'

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
        <h1>Line4Line</h1>
        <Lobby />
        <Story />
        <SignUp />
        <SignIn />
      </div>
    )
  }
}

export default App
