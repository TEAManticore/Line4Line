import React from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'


const OpenStory = (props) => {

  const storyURL = `/stories/${props.story._id}`
  const joinURL = `/join/${props.story._id}`

  const joinStory = () => {
    $.ajax({
      url: joinURL,
      type: 'PUT'
    })
    .then( story => {
      window.location = `/#${storyURL}`
    })
  }

  return (
    <div className="openStoryWrap">
      <div className="openStoryTitle">{props.story.title}</div>
      <div className="openStoryUsers">{props.story.users.length}/{props.story.numberUsers}</div>
      <div className='openStoryJoinWrap'>
        <button onClick={joinStory} className="standardButton blackButton">Join</button>
      </div>
    </div>
  )
}

export default OpenStory