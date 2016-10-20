import React from 'react'
import OpenStory from './OpenStory'


class Lobby extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      stories: []
    }
  }

  componentDidMount () {
    $.get('http://localhost:8081/stories')
    .then(stories => {
      console.log('Got stories: ', stories);
      this.setState({
        stories: stories
      })
    })   
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
