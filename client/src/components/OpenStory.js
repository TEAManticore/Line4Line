import React from 'react'

const OpenStory = (props)=> {
  return (
    <div>
      <h4>{props.story.title}</h4>
      <div>{props.story.user.length}/{props.story.numberUsers}</div>
    </div>
  )
}

export default OpenStory