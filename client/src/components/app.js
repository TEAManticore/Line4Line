import React from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
import axios from 'axios'
import Lobby from './Lobby'
import Story from './Story'
// import SignUp from './SignUp'
// import SignIn from './SignIn'
import Login from './Login'
import NavBar from './NavBar'
import NavContainer from './NavContainer'


class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      currentUser: null,
      loggedIn: false
    }
    this.loginWithFacebook = this.loginWithFacebook.bind(this)
    this.logout = this.logout.bind(this)
  }

  loginWithFacebook () {
    axios.get('http://127.0.0.1:8081/auth/facebook')
    .then(user => {
      this.setState = ({
        currentUser: user.facebookId,
        loggedIn: true
      })
    })
  }

  logout () {
    this.setState = ({
      currentUser: null,
      loggedIn: false
    })
  }

  render () {
    return (
      <div>
        <h1>Line4Line</h1>
        <Login loginWithFacebook={this.loginWithFacebook} logout={this.logout} loggedIn= {this.state.loggedIn} />
        <Router history={hashHistory}>
          <Route path='/' component={Lobby} />
          <Route path='/stories/:id' component={Story} />
        </Router>
      </div>
    )
  }
}

export default App
