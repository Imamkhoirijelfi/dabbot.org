import React, { Component } from 'react'
import * as view from '../View'

export default class DiscordFMView extends Component {
  render() {
    return (
      <view.Command>
        <view.Header command="DiscordFM">
          <view.Description>Plays a radio station from the now-defunct Discord.FM.</view.Description>
        </view.Header>
        <view.UsageList>
          <view.Usage title="Usage">
            <code>{"!!!discordfm"}</code>
          </view.Usage>
          <view.Usage title="Usage">
            <code>{"!!!dfm"}</code>
          </view.Usage>
        </view.UsageList>
        <view.ExampleList>
          <p><code>{"!!!discordfm"}</code> List the available stations.</p>
          <p><code>{"!!!discordfm Chill Corner"}</code> Add a station's songs to your queue.</p>
        </view.ExampleList>
      </view.Command>
    )
  }
}
