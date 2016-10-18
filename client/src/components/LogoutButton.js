import React from 'react'

const LogoutButton = (props) => {
  return (
    <form onSubmit={props.logout}>
      <input
        className="standardButton whiteButton"
        value="Logout"
        type="submit"
      />
    </form>
  )
}

export default LogoutButton