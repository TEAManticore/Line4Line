import React from 'react'
import OpenStory from './OpenStory'
import Accordion from './Accordion'


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
      <div>
        <Accordion />
        <div className='lobby'>
          {this.state.stories.map((story, i) =>
            <OpenStory story={story} key={i}/>
          )}
        </div>
      </div>
    )
  }
}

export default Lobby
