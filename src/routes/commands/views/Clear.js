import React, { Component } from 'react'
import * as view from '../View'

export default class ClearView extends Component {
  render() {
    return (
      <view.Command>
        <view.Header command="Clear">
          <view.Description>Clears the existing song queue.</view.Description>
        </view.Header>
        <view.UsageList>
          <view.Usage title="Clear the queue.">
            <code>{"!!!clear"}</code>
          </view.Usage>
        </view.UsageList>
        <view.ExampleList>
          <p><code>{"!!!clear"}</code> Clear the song queue.</p>
        </view.ExampleList>
      </view.Command>
    )
  }
}
