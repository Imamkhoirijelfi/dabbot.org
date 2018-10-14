import React, { Component } from 'react'
import * as view from '../View'

export default class AboutView extends Component {
  render() {
    return (
      <view.Command>
        <view.Header command="About">
          <view.Description>Gives you basic information about the bot.</view.Description>
        </view.Header>
        <view.UsageList>
          <view.Usage title="Usage">
            <code>{"!!!about"}</code>
          </view.Usage>
        </view.UsageList>
        <view.ExampleList>
          <img src="https://zeyla.is-a-good-waifu.com/0e1a72.png" />
        </view.ExampleList>
      </view.Command>
    )
  }
}
