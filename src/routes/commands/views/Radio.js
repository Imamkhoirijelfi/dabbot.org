import React, { Component } from 'react'
import * as view from '../View'

class RadioView extends Component {
  render() {
    return (
      <view.Command>
        <view.Header command="Radio">
          <view.Description>Play a radio.</view.Description>
        </view.Header>
        <view.UsageList>
          <view.Usage title="Listing the available radios.">
            <code>{"!!!radio"}</code>
          </view.Usage>
          <view.Usage title="Searching for a radio by name.">
            <code>{"!!!radio <name here>"}</code>
          </view.Usage>
        </view.UsageList>
        <view.ExampleList>
          <p><code>{"!!!radio"}</code> List the available radios.</p>
          <p><code>{"!!!radio Radio Name Here"}</code> Searching for a radio by name.</p>
        </view.ExampleList>
      </view.Command>
    )
  }
}

export default RadioView
