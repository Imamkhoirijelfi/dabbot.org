import React, { Component } from 'react'

class Subtitle extends Component {
  render() {
    return (
      <h1 className="subtitle is-2 align-center">
        The Discord Music Bot
        <hr />
        <a className="button is-success is-large" href="https://dabbot.org/invite">
          Add dabBot to your server!
        </a>
      </h1>
    )
  }
}

class Header extends Component {
  render() {
    return (
      <div className="column is-12">
        <h1 className="title is-2 align-center">dabBot</h1>
        <Subtitle />
      </div>
    )
  }
}

export default Header
