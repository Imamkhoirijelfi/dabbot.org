import React, { Component } from 'react'
import * as view from '../View'

export default class LoadView extends Component {
  render() {
    return (
      <view.Command>
        <view.Header command="Load">
          <view.Description>Loads a playlist file into the queue.</view.Description>
        </view.Header>
        <view.UsageList>
          <view.Usage title="Load the playlist.">
            <code>{"!!!load <url>"}</code>
          </view.Usage>
        </view.UsageList>
        <view.ExampleList>
          <p><code>{"!!!load https://playlist.dabbot.org/73b74970-62d8-41eb-b3d4-7020e173c7f5"}</code> Load the playlist into the song queue.</p>
        </view.ExampleList>
      </view.Command>
    )
  }
}
