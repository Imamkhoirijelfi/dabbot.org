import React, { Component } from 'react';

import { names } from './names';

import './Radios.css';

const mems = names.reduce((tot, n) => {
  const char = n.charAt(0).toLowerCase();
  const existing = tot.find(x => x.id === char);
  if (existing) {
    existing.stations.push(n);
  } else {
    tot.push({id: char, stations: [n]});
  }
  return tot;
}, []);


class RadiosView extends Component {

  constructor(...props) {
    super(...props);
    this.state = { searchQuery: '' };
    this.refs = [];
  }

  handleSearch(input) {
    this.setState(state => { return {...state, searchQuery: input }});
  }

  render() {
    let names = [];
    if(this.state.searchQuery.length === 1) {
      names.push(mems.find(x => x.id === this.state.searchQuery));
    }
    else if(this.state.searchQuery.length > 1) {
      names = mems.map(v => { return {id: v.id, stations: v.stations.filter(s => s.toLowerCase().includes(this.state.searchQuery)) } });
    } else {
      names = mems;
    }
    return (
      <div className="App">
        <header className="App-header">
          <input placeholder="Search radio stations.." onChange={e => this.handleSearch(e.target.value)} value={this.state.searchQuery} />
        </header>
        <div className="index"><h4>jump</h4>
          {names.map((v => { return <a href={`#${v.id}`}>{v.id}</a>}))}
        </div>
        <section>
          {names.map((v, k) => {
            if(v.stations.length === 0) return <div></div>;
            return <div id={v.id} className="name-section"><h2>{v.id}</h2><div className="name-section-inner">{v.stations.map(s => { return <span>{s}</span>})}</div></div>
          })}
          
        </section>
      </div>
    );
  }
}

export default RadiosView;
