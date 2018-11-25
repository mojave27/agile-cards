import React, { Component } from 'react';
import Content from './Content';
import Home from './Home.js';
import { Route } from 'react-router-dom';

class Main extends Component {
  render() {
    return (
      <div>
        <Route path='/' exact component={Home} />
        <Route path='/team-session/:id?' exact component={Content} />
      </div>
    );
  }
}

export default Main;
