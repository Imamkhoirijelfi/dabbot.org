import React, { Component } from 'react'
import * as view from '../View'

export default class SeekView extends Component {
  render() {
    return (
      <view.Command>
        <view.Header command="Seek">
          <view.Description>Moves the position of the song to a specified time.</view.Description>
        </view.Header>
        <view.UsageList>
          <view.Usage title="Move the current position of the song.">
            <code>{"!!!seek <time>"}</code>
          </view.Usage>
          <view.Usage title="Move the current position of the song.">
            <code>{"!!!jump <time>"}</code>
          </view.Usage>
        </view.UsageList>
        <view.ExampleList>
          <p><code>{"!!!seek 50"}</code> Move the current song to 50 seconds in.</p>
        </view.ExampleList>
      </view.Command>
    )
  }
}
