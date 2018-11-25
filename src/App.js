import React, { Component } from 'react';
import './App.css';
import Main from './components/Main';
import TopNav from './components/TopNav';

class App extends Component {
  render() {
    return (
      <div>
      <TopNav />
      <Main />
      </div>
    );
  }
}

export default App;
