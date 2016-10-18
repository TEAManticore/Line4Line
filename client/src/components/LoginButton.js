import React from 'react'
import axios from 'axios'

const LoginButton = (props) => {

  return (
    <form onSubmit={props.loginWithFacebook}>
      <input
        className="standardButton whiteButton"
        value="Login with Facebook"
        type="submit"
      />
    </form>
  )
}

export default LoginButton