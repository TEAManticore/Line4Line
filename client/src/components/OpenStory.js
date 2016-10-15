import React from 'react'
import Request from 'request'

const OpenStory = (props) => {

  // joinStory () {
  //  First we will need to get the current user's info to add him/her to the story in the DB
  //
  //   Request.post(`/stories/${props.story.id}`).on('response', function(response) {
  //     console.log('Got stories: ', response.statusCode)
  //   })
  // }

  return (
    <div className="openStoryWrap">
      <div className="openStoryTitle">{props.story.title}</div>
      <div className="openStoryUsers">{props.story.users.length}/{props.story.numberUsers}</div>
      <div className='openStoryJoinWrap'>
        <button className="joinButton">Join</button>
      </div>
    </div>
  )
}

export default OpenStory