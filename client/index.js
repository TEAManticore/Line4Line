import React from 'react'
import ReactDOM from 'react-dom'
import App from './src/components/app'
require('./public/styles/main.css')
require('./public/styles/line.css')
require('./public/styles/story.css')
require('./public/styles/lobby.css')
require('./public/styles/openStory.css')
require('./public/styles/signup.css')
require('./public/styles/createStory.css')
require('./public/styles/accordion.css')
require('./public/styles/navbar.css')

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
