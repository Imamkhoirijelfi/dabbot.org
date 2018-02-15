import React, { Component } from 'react'

const classNames = require('classnames');

class Tile extends Component {
  render() {
    const faName = "fa-" + this.props.icon;
    const iconName = "icon-" + this.props.icon;
    const classes = classNames("fa", faName, iconName);

    return (
      <article className="title is-child notification is-dark">
        <p className="title">
          <i className={classes} aria-hidden="true"></i>
          {" " + this.props.name}
        </p>
      </article>
    )
  }
}

class LeftColumn extends Component {
  render() {
    return (
      <div className="tile is-parent is-vertical">
        <Tile name="1000+ Radio Stations" icon="microphone" />
        <Tile name="SoundCloud" icon="soundcloud" />
        <Tile name="Discord.FM" icon="" />
        <Tile name="Playlist Support" icon="" />
      </div>
    )
  }
}

class RightColumn extends Component {
  render() {
    return (
      <div className="tile is-parent is-vertical">
        <Tile name="YouTube" icon="youtube-play" />
        <Tile name="Twitch.tv" icon="twitch" />
        <Tile name="Listen.moe" icon="" />
        <Tile name="Http/mp3" icon="" />
      </div>
    )
  }
}

class Bottom extends Component {
  render() {
    return (
      <div className="tile is-parent">
        <article className="tile is-child notification is-dark">
          <p className="title">
            <i className="fa fa-list" aria-hidden="true"></i> Much More
          </p>
          <p className="subtitle">
            We are always adding new audio sources!
          </p>
        </article>
      </div>
    )
  }
}

class Features extends Component {
  render() {
    return (
      <div className="column is-12">
        <h3 className="title is-4">Featuring:</h3>
        <div className="title is-ancestor">
          <div className="tile is-vertical is-12">
            <div className="tile">
              <LeftColumn />
              <RightColumn />
            </div>
            <Bottom />
          </div>
        </div>
      </div>
    )
  }
}

export default Features
