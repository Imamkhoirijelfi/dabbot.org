import React, { Component } from 'react'
import * as view from '../View'

export default class RestartView extends Component {
  render() {
    return (
      <view.Command>
        <view.Header command="Restart">
          <view.Description>Restarts the current song.</view.Description>
        </view.Header>
        <view.UsageList>
          <view.Usage title="Dump the current song.">
            <code>{"!!!restart"}</code>
          </view.Usage>
        </view.UsageList>
        <view.ExampleList>
          <p><code>{"!!!restart"}</code> Restart the current song.</p>
        </view.ExampleList>
      </view.Command>
    )
  }
}
