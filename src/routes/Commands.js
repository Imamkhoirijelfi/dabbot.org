import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Title from '../components/Title'
import Menu from './commands/Menu'
import AboutView from './commands/views/About'
import HelpView from './commands/views/Help';
import InviteView from './commands/views/Invite';
import ChooseView from './commands/views/Choose';
import PlayView from './commands/views/Play';
import RadioView from './commands/views/Radio';
import SearchView from './commands/views/Search';
import SoundCloudView from './commands/views/SoundCloud';
import NowPlayingView from './commands/views/NowPlaying';
import QueueView from './commands/views/Queue';
import RemoveView from './commands/views/Remove';
import ReorderView from './commands/views/Reorder';
import ShuffleView from './commands/views/Shuffle';
import LoopView from './commands/views/Loop';
import RepeatView from './commands/views/Repeat';
import JumpView from './commands/views/Jump';
import PauseResumeView from './commands/views/PauseResume';

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
            <Route path="/commands/help" component={HelpView} />
            <Route path="/commands/invite" component={InviteView} />
            <Route path="/commands/choose" component={ChooseView} />
            <Route path="/commands/play" component={PlayView} />
            <Route path="/commands/radio" component={RadioView} />
            <Route path="/commands/search" component={SearchView} />
            <Route path="/commands/soundcloud" component={SoundCloudView} />
            <Route path="/commands/nowplaying" component={NowPlayingView} />
            <Route path="/commands/queue" component={QueueView} />
            <Route path="/commands/remove" component={RemoveView} />
            <Route path="/commands/reorder" component={ReorderView} />
            <Route path="/commands/shuffle" component={ShuffleView} />
            <Route path="/commands/loop" component={LoopView} />
            <Route path="/commands/repeat" component={RepeatView} />
            <Route path="/commands/jump" component={JumpView} />
            <Route path="/commands/pauseresume" component={PauseResumeView} />
            <Route path="/commands/remove" component={NowPlayingView} />
            <Route path="/commands/remove" component={NowPlayingView} />
            <Route path="/commands/remove" component={NowPlayingView} />
            <Route path="/commands/remove" component={NowPlayingView} />
            <Route path="/commands/remove" component={NowPlayingView} />
            <Route path="/commands/remove" component={NowPlayingView} />
          </div>
        </div>
      </div>
    )
  }
}

export default Commands
