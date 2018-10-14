import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Title from '../components/Title'
import Menu from './commands/Menu'
import AboutView from './commands/views/About'
import ChooseView from './commands/views/Choose';
import ClearView from './commands/views/Clear';
import DiscordFMView from './commands/views/DiscordFM';
import DumpView from './commands/views/Dump';
import HelpView from './commands/views/Help';
import InviteView from './commands/views/Invite';
import LoadView from './commands/views/Load';
import NowPlayingView from './commands/views/NowPlaying';
import QueueView from './commands/views/Queue';
import PauseResumeView from './commands/views/PauseResume';
import PlayView from './commands/views/Play';
import PingView from './commands/views/Ping';
import RadioView from './commands/views/Radio';
import RestartView from './commands/views/Restart';
import ShuffleView from './commands/views/Shuffle';
import SoundCloudView from './commands/views/SoundCloud';
import SeekView from './commands/views/Seek';
import SkipView from './commands/views/Skip';
import StopView from './commands/views/Stop';
import VolumeView from './commands/views/Volume';
import YouTubeView from './commands/views/YouTube';

class Commands extends Component {
  render() {
    return (
      <div>
        <Title pathname={this.props.location.pathname} />

        <div className="columns">
          <div className="column is-one-quarter">
            <Menu />
          </div>
          <div className="column">
            <Route path="/commands/about" component={AboutView} />
            <Route path="/commands/choose" component={ChooseView} />
            <Route path="/commands/clear" component={ClearView} />
            <Route path="/commands/discordfm" component={DiscordFMView} />
            <Route path="/commands/dump" component={DumpView} />
            <Route path="/commands/help" component={HelpView} />
            <Route path="/commands/invite" component={InviteView} />
            <Route path="/commands/load" component={LoadView} />
            <Route path="/commands/nowplaying" component={NowPlayingView} />
            <Route path="/commands/pause/resume" component={PauseResumeView} />
            <Route path="/commands/queue" component={QueueView} />
            <Route path="/commands/play" component={PlayView} />
            <Route path="/commands/ping" component={PingView} />
            <Route path="/commands/radio" component={RadioView} />
            <Route path="/commands/restart" component={RestartView} />
            <Route path="/commands/seek" component={SeekView} />
            <Route path="/commands/shuffle" component={ShuffleView} />
            <Route path="/commands/skip" component={SkipView} />
            <Route path="/commands/soundcloud" component={SoundCloudView} />
            <Route path="/commands/stop" component={StopView} />
            <Route path="/commands/volume" component={VolumeView} />
            <Route path="/commands/youtube" component={YouTubeView} />
          </div>
        </div>
      </div>
    )
  }
}

export default Commands
