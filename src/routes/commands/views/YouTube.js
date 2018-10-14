import React, { Component } from 'react'
import * as view from '../View'

class YouTubeView extends Component {
  render() {
    return (
      <view.Command>
        <view.Header command="YouTube">
          <view.Description>Search for a song on YouTube.</view.Description>
        </view.Header>
        <view.UsageList>
          <view.Usage title="Search for a song on YouTube.">
            <code>{"!!!youtube <song name here>"}</code>
          </view.Usage>
          <view.Usage title="Search for a song on YouTube.">
            <code>{"!!!yt <song name here>"}</code>
          </view.Usage>
        </view.UsageList>
        <view.ExampleList>
          <p><code>{"!!!youtube Song Name"}</code> Search for a song named "Song Name".</p>
          <p><code>{"!!!yt Song Name"}</code> Search for a song named "Song Name".</p>
        </view.ExampleList>
      </view.Command>
    )
  }
}

export default YouTubeView;
