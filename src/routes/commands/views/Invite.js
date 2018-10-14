import React, { Component } from 'react'
import * as view from '../View'

class InviteView extends Component {
  render() {
    return (
      <view.Command>
        <view.Header command="Invite">
          <view.Description>Gives the bot's invite link.</view.Description>
        </view.Header>
        <view.UsageList>
          <view.Usage title="Usage">
            <code>{"!!!invite"}</code>
          </view.Usage>
        </view.UsageList>
      </view.Command>
    )
  }
}

export default InviteView
