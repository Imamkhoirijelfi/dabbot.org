import React, { Component } from 'react'
import * as view from '../View'

class SoundCloudView extends Component {
  render() {
    return (
      <view.Command>
        <view.Header command="SoundCloud">
          <view.Description>Search for a song on SoundCloud.</view.Description>
        </view.Header>
        <view.UsageList>
          <view.Usage title="Searching for a song on SoundCloud.">
            <code>{"!!!soundcloud <song name here>"}</code>
          </view.Usage>
          <view.Usage title="Searching for a song on SoundCloud.">
            <code>{"!!!sc <song name here>"}</code>
          </view.Usage>
        </view.UsageList>
        <view.ExampleList>
          <p><code>{"!!!soundcloud Song Name"}</code> Search for a song on SoundCloud named "Song Name".</p>
          <p><code>{"!!!sc Song Name"}</code> Search for a song on SoundCloud named "Song Name".</p>
        </view.ExampleList>
      </view.Command>
    )
  }
}

export default SoundCloudView
