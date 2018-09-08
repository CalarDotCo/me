import React, { Component } from 'react';
import Header from './components/header';
import Skills from './components/skills';
import Timeline from './components/timeline';
import './css/App.css';

class App extends Component {
  render() {
    return (
  <div className="container-fluid">
      <section className="rect col-12"/>
      <Header/>
      <Skills/>
      <Timeline/>
    </div>
    );
  }
}

export default App;
