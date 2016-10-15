import React from 'react'
import Request from 'request'
import OpenStory from './OpenStory'

class Lobby extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      stories: []
    }
  }

  loadStoriesFromServer () {
    Request.get('/stories').on('response', function(response) {
      console.log('Got stories: ', response.statusCode)
    })
    .then((allStories) => {
      const openStories = allStories.filter((story) => !story.complete)
      this.setState({
        stories: openStories
      })
    })
  }

  componentDidMount () {
    this.loadStoriesFromServer().bind(this)
  }

  render () {
    return (
      <div>
        {this.state.stories.map(story =>
          <OpenStory story={story} />
        )}
      </div>
    )
  }
}

export default Lobby
