import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Item extends Component {
  render() {
    let href = "/commands";
    if (!this.props.index) {
      href += "/" + this.props.name.toLowerCase();
    }

    return (
      <li>
        <NavLink to={href} exact activeStyle={{ backgroundColor: '#363636', color: 'white' }}>
          {this.props.name}
        </NavLink>
      </li>
    )
  }
}

/*<li><a>{this.props.name}</a></li>*/

class Menu extends Component {
  render() {
    return (
      <aside className="menu">
        <p className="menu-label">
          Information
        </p>
        <ul className="menu-list">
          <Item name="About" />
          <Item name="Help" />
          <Item name="Invite" />
          <Item name="Ping" />
        </ul>
        <p className="menu-label">
          Playing Music
        </p>
        <ul className="menu-list">
          <Item name="Choose" />
          <Item name="DiscordFM" />
          <Item name="Play" />
          <Item name="Radio" />
          <Item name="SoundCloud" />
          <Item name="YouTube" />
        </ul>
        <p className="menu-label">
          Queue
        </p>
        <ul className="menu-list">
          <Item name="Clear" />
          <Item name="NowPlaying" />
          <Item name="Queue" />
          <Item name="Shuffle" />
        </ul>
        <p className="menu-label">
          Controls
        </p>
        <ul className="menu-list">
          <Item name="Pause/Resume" />
          <Item name="Restart" />
          <Item name="Seek" />
          <Item name="Skip" />
          <Item name="Stop" />
          <Item name="Volume" />
        </ul>
        <p className="menu-label">
          Utilities
        </p>
        <ul className="menu-list">
          <Item name="Dump" />
          <Item name="Load" />
        </ul>
      </aside>
    )
  }
}

export default Menu
