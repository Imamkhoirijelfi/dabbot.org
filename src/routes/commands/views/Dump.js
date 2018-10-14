import React, { Component } from 'react'
import * as view from '../View'

export default class DumpView extends Component {
  render() {
    return (
      <view.Command>
        <view.Header command="Dump">
          <view.Description>Creates a playlist file of your current queue and gives you a link to use for loading it.</view.Description>
        </view.Header>
        <view.UsageList>
          <view.Usage title="Dump the current queue.">
            <code>{"!!!dump"}</code>
          </view.Usage>
        </view.UsageList>
        <view.ExampleList>
          <p><code>{"!!!dump"}</code> Dump the current queue and get a URL to use with the "load" command.</p>
        </view.ExampleList>
      </view.Command>
    )
  }
}
