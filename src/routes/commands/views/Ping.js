import React, { Component } from 'react'
import * as view from '../View'

export default class PingView extends Component {
  render() {
    return (
      <view.Command>
        <view.Header command="Ping">
          <view.Description>Check to make sure that the bot is still online.</view.Description>
        </view.Header>
        <view.UsageList>
          <view.Usage title="Ping.">
            <code>{"!!!ping"}</code>
          </view.Usage>
        </view.UsageList>
        <view.ExampleList>
          <p><code>{"!!!ping"}</code> Pong!</p>
        </view.ExampleList>
      </view.Command>
    )
  }
}
