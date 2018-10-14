import React, { Component } from 'react'
import * as view from '../View'

export default class VolumeView extends Component {
  render() {
    return (
      <view.Command>
        <view.Header command="Volume">
          <view.Description>
            <p>
              Gets or changes the volume on a scale of 10-150.
              <br />
              <br />
              <strong>This is a patron-only command.</strong>
            </p>
          </view.Description>
        </view.Header>
        <view.UsageList>
          <view.Usage title="Gets the current volume.">
            <code>{"!!!volume"}</code>
          </view.Usage>
          <view.Usage title="Sets the current volume.">
            <code>{"!!!volume <amount 10-150>"}</code>
          </view.Usage>
        </view.UsageList>
        <view.ExampleList>
          <p><code>{"!!!volume"}</code> Get the current volume.</p>
          <p><code>{"!!!volume 50"}</code> Sets the volume to 50%.</p>
        </view.ExampleList>
      </view.Command>
    )
  }
}
