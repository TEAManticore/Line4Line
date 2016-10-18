import React from 'react'
import axios from 'axios'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'


const OpenStory = (props) => {

  const storyURL = `/stories/${props.story._id}`
  
  // joinStory () {
  //  //First we will need to get the current user's info to add him/her to the story in the DB
  //   axios.get(storyURL)
  //   .then( story => {
  //     console.log(story)
  //   })
  // }
  

  return (
    <div className="openStoryWrap">
      <div className="openStoryTitle">{props.story.title}</div>
      <div className="openStoryUsers">{props.story.users.length}/{props.story.numberUsers}</div>
      <div className='openStoryJoinWrap'>
        <div className="standardButton blackButton">
          <Link to={storyURL}>Join</Link>
        </div>
      </div>
    </div>
  )
}

export default OpenStory