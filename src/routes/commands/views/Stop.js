import React, { Component } from 'react'
import * as view from '../View'

export default class StopView extends Component {
  render() {
    return (
      <view.Command>
        <view.Header command="Stop">
          <view.Description>Stops the music and leaves the voice channel. The rest of your queue will stay.</view.Description>
        </view.Header>
        <view.UsageList>
          <view.Usage title="Stops the current song.">
            <code>{"!!!stop"}</code>
          </view.Usage>
        </view.UsageList>
        <view.ExampleList>
          <p><code>{"!!!stop"}</code> Stops the song and leaves the voice channel.</p>
        </view.ExampleList>
      </view.Command>
    )
  }
}
