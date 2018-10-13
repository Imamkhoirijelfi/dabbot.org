import React, { Component } from 'react'
import * as view from '../View'

class HelpView extends Component {
  render() {
    return (
      <view.Command>
        <view.Header command="Help">
          <view.Description>Links you to the help website</view.Description>
        </view.Header>
        <view.UsageList>
          <view.Usage title="Usage">
            <code>{"!!!help"}</code>
          </view.Usage>
        </view.UsageList>
      </view.Command>
    )
  }
}

export default HelpView
