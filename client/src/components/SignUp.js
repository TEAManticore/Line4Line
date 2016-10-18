import React from 'react'
import axios from 'axios'

const SignUp = () => {

  const sendUserData = () => {
    const formData = {}
    formData.username = document.getElementById('signupName').value
    formData.password = document.getElementById('signupPassword').value
    axios.post('http://127.0.0.1:8081/sign-up', formData)
    .then(response => {
      console.log(response);
    })
  }

  return (
    <div className="signupWrap">
      <h2>Sign Up</h2>
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