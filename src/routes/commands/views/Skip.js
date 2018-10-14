import React, { Component } from 'react'
import * as view from '../View'

export default class SkipView extends Component {
  render() {
    return (
      <view.Command>
        <view.Header command="Skip">
          <view.Description>Skips the current song and plays the next, if there is another in the queue.</view.Description>
        </view.Header>
        <view.UsageList>
          <view.Usage title="Skips the current song.">
            <code>{"!!!skip"}</code>
          </view.Usage>
          <view.Usage title="Shortcut for skipping the current song.">
            <code>{"!!!s"}</code>
          </view.Usage>
        </view.UsageList>
        <view.ExampleList>
          <p><code>{"!!!skip"}</code> Skips the current song and plays the next.</p>
        </view.ExampleList>
      </view.Command>
    )
  }
}
