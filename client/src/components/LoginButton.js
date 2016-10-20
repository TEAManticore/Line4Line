import React from 'react'
import { Link } from 'react-router'


const LoginButton = (props) => {
  return (
    <a href="http://localhost:8081/auth/facebook" className="standardButton facebookButton">
      Login with Facebook
    </a>
  )
}

export default LoginButton