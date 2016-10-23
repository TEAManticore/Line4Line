import React from 'react'

const LogoutButton = (props) => {
  return (
    <a onClick={props.logout} href="/logout" className="standardButton blackButton">
      Logout
    </a>
  )
}

export default LogoutButton