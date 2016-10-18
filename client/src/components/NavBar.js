import React from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'

const NavBar = () => {
  return (
    <div>
      <Link to='/'>Home</Link>
    </div>
  )
}

export default NavBar