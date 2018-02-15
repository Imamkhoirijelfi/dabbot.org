import React, { Component } from 'react'
import * as view from '../View'

class GettingStartedView extends Component {
  render() {
    return (
      <view.Command>
        <view.Header command="Getting Started">
          <view.Description>How to get started using dabBot!</view.Description>
        </view.Header>
      </view.Command>
    )
  }
}

export default GettingStartedView
