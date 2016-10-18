import React from 'react'
import axios from 'axios'

const SignIn = () => {

  const sendUserData = () => {
    const formData = {}
    formData.username = document.getElementById('signinName').value
    formData.password = document.getElementById('signinPassword').value
    axios.post('http://127.0.0.1:8081/sign-in', formData)
    .then(response => {
      console.log(response);
    })
  }

  return (
    <div className="signupWrap">
      <h2>Sign In</h2>
      <form onSubmit={sendUserData}>
        <input className="signupInput" id="signinName" type="text" placeholder="pick a username..." />
        <input className="signupInput" id="signinPassword" type="password" placeholder="password" />
        <div className="signupButtonWrap">
          <button className="standardButton blackButton">Sign-In</button>
        </div>
      </form>
    </div>
  )
}

export default SignIn