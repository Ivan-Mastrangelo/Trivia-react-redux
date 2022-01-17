import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../pages/Login';
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
      </Switch>
    );
  }
}

export default Index;
