import React from 'react'

const LogoutButton = (props) => {
  return (
    <a onClick={props.logout} href="http://localhost:8081/logout" className="standardButton blackButton">
      Logout
    </a>
  )
}

export default LogoutButton