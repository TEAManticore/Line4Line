import React from 'react'
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'

const Login = (props) => {
  let loginButton
    if (!props.currentUser) {
      loginButton = <LoginButton loginWithFacebook={props.loginWithFacebook} />
    } else {
      loginButton = <LogoutButton logout={props.logout} />
    }
  return (
    <div>
      {loginButton}
    </div>
  )
}

export default Login