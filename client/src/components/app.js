import React from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
import axios from 'axios'
import Lobby from './Lobby'
import Story from './Story'
// import SignUp from './SignUp'
// import SignIn from './SignIn'
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'
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
    axios.get('http://127.0.0.1:8081/sign-in')
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
    let loginButton
    if (!this.state.loggedIn) {
      loginButton = <LoginButton loginWithFacebook={this.loginWithFacebook} />
    } else {
      loginButton = <LogoutButton logout={this.logout} />
    }
    return (
      <div>
        <h1>Line4Line</h1>
        {loginButton}
        <Router history={hashHistory}>
          <Route path='/' component={Lobby}/>
          <Route path='/story' component={Story} />
        </Router>
      </div>
    )
  }
}

export default App
