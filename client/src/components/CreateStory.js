import React from 'react'

const CreateStory = (props) => {

  const createStory = (e) => {
    e.preventDefault()
    const newStory = {}
    newStory.title = document.getElementById('createTitle').value
    newStory.numberUsers = document.getElementById('createNUsers').value
    newStory.storyLength = document.getElementById('createLength').value
    $.ajax({
      type: 'POST',
      url:'http://localhost:8081/stories', 
      data: newStory, 
      dataType: 'json',
      success: function(res){
        console.log('~~~',res)
        window.location = res.redirect
      }
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