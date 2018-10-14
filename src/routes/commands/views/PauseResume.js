import React, { Component } from 'react'
import * as view from '../View'

class PauseResumeView extends Component {
  render() {
    return (
      <view.Command>
        <view.Header command="Pause/Resume">
          <view.Description>Pause or resume a song.</view.Description>
        </view.Header>
        <view.UsageList>
          <view.Usage title="Pause the song.">
            <code>{"!!!pause"}</code>
          </view.Usage>
          <view.Usage title="Resume the song.">
            <code>{"!!!resume"}</code>
          </view.Usage>
        </view.UsageList>
        <view.ExampleList>
          <p><code>{"!!!pause"}</code> Pause the song.</p>
          <p><code>{"!!!resume"}</code> Resume the song.</p>
        </view.ExampleList>
      </view.Command>
    )
  }
}

export default PauseResumeView
