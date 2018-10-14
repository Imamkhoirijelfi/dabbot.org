import React, { Component } from 'react'
import * as view from '../View'

class PlayView extends Component {
  render() {
    return (
      <view.Command>
        <view.Header command="Play">
          <view.Description>Play a song.</view.Description>
        </view.Header>
        <view.UsageList>
          <view.Usage title="Searching for a song by name.">
            <code>{"!!!play <song name>"}</code>
          </view.Usage>
          <view.Usage title="Playing a song by URL.">
            <code>{"!!!play <song URL>"}</code>
          </view.Usage>
        </view.UsageList>
        <view.ExampleList>
          <p><code>{"!!!play song name here"}</code> Search for a song by name.</p>
          <p><code>{"!!!play https://www.youtube.com/watch?v=dQw4w9WgXcQ"}</code> Play a song by URL.</p>
        </view.ExampleList>
      </view.Command>
    )
  }
}

export default PlayView
