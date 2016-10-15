import React from 'react'
import Request from 'request'

const SignUp = () => {

  const sendUserData = () => {
    const formData = {}
    formData.username = document.getElementById(signupName).value
    formData.password = document.getElementById(signupPassword).value
    Request.post('/sign-up').form(formData)
  }

  return (
    <div className="signupWrap">
      <form onSubmit={sendUserData}>
        <input className="signupInput" id="signupName" type="text" placeholder="pick a username..." />
        <input className="signupInput" id="signupPassword" type="password" placeholder="password" />
        <div className="signupButtonWrap">
          <button className="blackButton">Sign-Up</button>
        </div>
      </form>
    </div>
  )
}

export default SignUp