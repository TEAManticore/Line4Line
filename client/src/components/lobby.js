import React from 'react'
import Request from 'request'
import OpenStory from './OpenStory'
import dummyStories from '../dummyStories'

class Lobby extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      stories: dummyStories
    }
  }

  // loadStoriesFromServer () {
  //   Request.get('/stories').on('response', function(response) {
  //     console.log('Got stories: ', response.statusCode)
  //   })
  //   .then((allStories) => {
  //     const openStories = allStories.filter((story) => !story.complete)
  //     this.setState({
  //       stories: openStories
  //     })
  //   })
  // }

  // componentDidMount () {
  //   this.loadStoriesFromServer().bind(this)
  // }

  render () {
    return (
      <div className='lobby'>
        {this.state.stories.map((story, i) =>
          <OpenStory story={story} key={i}/>
        )}
      </div>
    )
  }
}

export default Lobby
