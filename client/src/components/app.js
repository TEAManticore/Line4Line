import React from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
import Lobby from './Lobby'
import Story from './Story'
// import SignUp from './SignUp'
// import SignIn from './SignIn'
import Login from './Login'
import CreateStory from './CreateStory'
import NavBar from './NavBar'
import NavContainer from './NavContainer'


class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      currentUser: null
    }
    this.logout = this.logout.bind(this)
  }

  componentDidMount () {
    $.get('http://localhost:8081/user')
    .then(user => {
      console.log('user: ',user)
      this.setState({
        currentUser: user
      })
      console.log('currentUser: ', this.state.currentUser)
    })
    .catch(err => {
      console.log('No user is signed in: ', err)
    })
  }

  logout () {
    this.setState({
      currentUser: false
    })
  }

  render () {
    return (
      <div>
        <h1>Line4Line</h1>
        <Login loginWithFacebook={this.loginWithFacebook}
          logout={this.logout}
          currentUser={this.state.currentUser}
        />
        <CreateStory />
        <Router history={hashHistory}>
          <Route path='/' component={Lobby} />
          <Route path='/stories/:id' component={Story} />
        </Router>
      </div>
    )
  }
}

export default App
