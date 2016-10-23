import React from 'react'

const CreateStory = (props) => {

  const createStory = (e) => {
    e.preventDefault()
    const newStory = {}
    newStory.title = document.getElementById('createTitle').value
    newStory.numberUsers = document.getElementById('createNUsers').value
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
        <div>  
          <input className="createStoryInput createTitleInput" id="createTitle" type="text" placeholder="A super creative name..." />
        </div>
        <div>
          <h3>Number of users</h3>
          <input className="createStoryInput createNumberInput" id="createNUsers" type="number" min="1" max="10" placeholder="5"/>
        </div>
        <div className='createButtonWrap'>
          <input className="standardButton blackButton" type="submit" value="Create" />
        </div>
      </form>
    </div>
  )
}

export default CreateStory