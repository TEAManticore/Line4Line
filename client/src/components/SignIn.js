import React from 'react'
import axios from 'axios'

const SignIn = () => {

  const sendUserData = () => {
    const formData = {}
    formData.username = document.getElementById(signinName).value
    formData.password = document.getElementById(signinPassword).value
    axios.post('/sign-in', formData)
  }

  return (
    <div className="signupWrap">
      <h2>Sign In</h2>
      <form onSubmit={sendUserData}>
        <input className="signupInput" id="signinName" type="text" placeholder="pick a username..." />
        <input className="signupInput" id="signinPassword" type="password" placeholder="password" />
        <div className="signupButtonWrap">
          <button className="blackButton">Sign-In</button>
        </div>
      </form>
    </div>
  )
}

export default SignIn