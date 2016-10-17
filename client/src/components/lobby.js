import React from 'react'
import Request from 'request'
import OpenStory from './OpenStory'
import dummyStories from '../dummyStories'

class Lobby extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      stories: []
    }
  }

  // loadStoriesFromServer () {
  //   Request.get('http://localhost:8080/stories').on('response', function(response) {
  //     console.log('Got stories: ', response.statusCode)
  //   })
  //   .then((allStories) => {
  //     const openStories = allStories.filter((story) => !story.complete)
  //     this.setState({
  //       stories: openStories
  //     })
  //   })
  // }

  componentDidMount () {
    this.serverRequest = Request.get('http://localhost:8081/stories').on('response', function(response) {
      console.log('Got stories: ', response.statusCode)
    })
    // .then((openStories) => {
    //   this.setState({
    //     stories: openStories
    //   })
    // })
    .bind(this)
  }

  componentWillUnmount () {
    this.serverRequest.abort()
  }

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
