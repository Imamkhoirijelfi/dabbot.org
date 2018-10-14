import React, { Component } from 'react'
import * as view from '../View'

class NowPlayingView extends Component {
  render() {
    return (
      <view.Command>
        <view.Header command="NowPlaying">
          <view.Description>Shows the name and time of the currently playing song.</view.Description>
        </view.Header>
        <view.UsageList>
          <view.Usage title="Show the current song">
            <code>{"!!!nowplaying"}</code>
          </view.Usage>
          <view.Usage title="Show the current song">
            <code>{"!!!np"}</code>
          </view.Usage>
        </view.UsageList>
        <view.ExampleList>
          <p><code>{"!!!nowplaying"}</code> Show the current song.</p>
          <p><code>{"!!!np"}</code> Show the current song.</p>
        </view.ExampleList>
      </view.Command>
    )
  }
}

export default NowPlayingView
