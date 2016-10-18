import React from 'react'
import axios from 'axios'
import OpenStory from './OpenStory'


class Lobby extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      stories: []
    }
  }

  componentDidMount () {
    axios.get('http://127.0.0.1:8081/stories')
    .then(stories => {
      console.log('Got stories: ', stories.data);
      this.setState({
        stories: stories.data
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
