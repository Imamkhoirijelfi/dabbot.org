import React, { Component } from 'react'
import * as view from '../View'

class ChooseView extends Component {
  render() {
    return (
      <view.Command>
        <view.Header command="Choose">
          <view.Description>Pick a song from a selection menu.</view.Description>
        </view.Header>
        <view.UsageList>
          <view.Usage title="Cancelling a selection if none of the options are right">
            <code>{"!!!cancel"}</code>
          </view.Usage>
          <view.Usage title="Picking a song in the selection">
            <code>{"!!!choose <number>"}</code>
          </view.Usage>
        </view.UsageList>
        <view.ExampleList>
          <p><code>{"!!!cancel"}</code></p>
          <p><code>{"!!!choose 2"}</code></p>
        </view.ExampleList>
      </view.Command>
    )
  }
}

export default ChooseView
