import React, { Component } from 'react'
import * as view from '../View'

class PlayView extends Component {
  render() {
    return (
      <view.Command>
        <view.Header command="Play">
          <view.Description>Play a song</view.Description>
        </view.Header>
        <view.UsageList>
          <view.Usage title="Finding a minecraft character">
            <code>{"!!!something <character name> [blocks]"}</code>
          </view.Usage>
          <view.Usage title="Finding a minecraft character">
            <code>{"!!!something <character name> <limit> <dabs>"}</code>
          </view.Usage>
        </view.UsageList>
        <view.ExampleList>
          <p>Dab!</p>
          <p>Dab!</p>
          <p>Dab!</p>
          <p>Dab!</p>
          <p>Dab!</p>
        </view.ExampleList>
      </view.Command>
    )
  }
}

export default PlayView
