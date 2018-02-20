import React, { Component } from 'react'
import Title from '../components/Title'
import Header from './home/Header'
import Features from './home/Features'
import AdSense from 'react-adsense'

class Home extends Component {
  render() {
    return (
      <div>
        <Title pathname={this.props.location.pathname} />

        <div className="columns is-multiline">
          <Header />

          {/*<AdSense.Google client='ca-pub-6568927978510442'
            slot='3138818756'
            style={{display: "block"}}
            format='auto' />*/}

          <Features />
        </div>
      </div>
    )
  }
}

export default Home
