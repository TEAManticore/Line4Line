import React from 'react'
import axios from 'axios'

const CreateStory = (props) => {

  const createStory = () => {
    const newStory = {}
    newStory.title = document.getElementById('createTitle').value
    newStory.numberUsers = document.getElementById('createNUsers').value
    newStory.storyLength = document.getElementById('createLength').value
    axios.post('http://127.0.0.1:8081/stories', newStory)
    .then( res => {
      console.log(res)
    })
  }

  return (
    <div className="createStoryWrap">
      <h3>Our story begins...</h3>
      <form onSubmit={createStory}>
        <input className="createTitleInput" id="createTitle" type="text" placeholder="A super creative name..." />
        <input className="createInput" id="createNUsers" type="number" placeholder="Number of users" />
        <input className="createInput" id="createLength" type="number" placeholder="Length of story"/>
        <input type="submit" value="Create" />
      </form>
    </div>
  )
}

export default CreateStory