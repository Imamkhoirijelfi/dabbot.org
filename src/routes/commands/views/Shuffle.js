import React, { Component } from 'react'
import * as view from '../View'

class ShuffleView extends Component {
  render() {
    return (
      <view.Command>
        <view.Header command="Shuffle">
          <view.Description>Shuffles the song queue.</view.Description>
        </view.Header>
        <view.UsageList>
          <view.Usage title="Shuffle the song queue.">
            <code>{"!!!shuffle"}</code>
          </view.Usage>
        </view.UsageList>
        <view.ExampleList>
          <p><code>{"!!!shuffle"}</code> Shuffle the song queue.</p>
        </view.ExampleList>
      </view.Command>
    )
  }
}

export default ShuffleView
