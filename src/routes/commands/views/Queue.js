import React, { Component } from 'react'
import * as view from '../View'

class QueueView extends Component {
  render() {
    return (
      <view.Command>
        <view.Header command="Queue">
          <view.Description>Show the current song queue.</view.Description>
        </view.Header>
        <view.UsageList>
          <view.Usage title="Show the current song queue.">
            <code>{"!!!queue"}</code>
          </view.Usage>
          <view.Usage title="Show the current song queue.">
            <code>{"!!!q"}</code>
          </view.Usage>
        </view.UsageList>
        <view.ExampleList>
          <p><code>{"!!!queue"}</code></p>
          <p><code>{"!!!q"}</code></p>
        </view.ExampleList>
      </view.Command>
    )
  }
}

export default QueueView
