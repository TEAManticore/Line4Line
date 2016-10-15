import React from 'react'
import ReactDOM from 'react-dom'
import App from './src/components/App'
require('./public/styles/main.css')
require('./public/styles/line.css')
require('./public/styles/story.css')

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
