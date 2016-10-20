import React from 'react'

const NavContainer = (props) => {
  return (
    <div>
      <Nav />
      {props.children}
    </div>
  )
}