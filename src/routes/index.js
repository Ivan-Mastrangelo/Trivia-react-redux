import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../pages/Login';
import Settings from '../pages/Settings';
import requestTokenAPI from '../services/requestToken';

class Index extends Component {
  componentDidMount() {
    requestTokenAPI();
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/game" component={ Game } />
        <Route exact path="/settings" component={ Settings } />
      </Switch>
    );
  }
}

export default Index;
