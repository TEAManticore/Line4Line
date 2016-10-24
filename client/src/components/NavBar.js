import React from 'react'
import Login from './login'

const NavBar = (props) => {
  return (
    <div className="navbarWrap">
      <div className="headerLogo">
        <a href="/"><h1>Line4Line</h1></a>
      </div>
      <div className="headerLogButton">
        <Login
          logout={props.logout}
          currentUser={props.currentUser}
        />
      </div>
    </div>
  )
}

export default NavBar