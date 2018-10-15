import React, { Component } from 'react'
import Title from '../components/Title'
import RadiosView from './radios/RadiosView';

class Radios extends Component {
  render() {
    return (
      <div>
        <Title pathname={this.props.location.pathname} />

        <RadiosView />
      </div>
    )
  }
}

export default Radios
