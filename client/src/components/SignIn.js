import React from 'react'
import Request from 'request'

const SignIn = () => {

  const sendUserData = () => {
    const formData = {}
    formData.username = document.getElementById(signinName).value
    formData.password = document.getElementById(signinPassword).value
    Request.post('/sign-in').form(formData)
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