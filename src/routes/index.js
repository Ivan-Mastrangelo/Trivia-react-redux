import React, { Component } from 'react';
// import { Route, Switch } from 'react-router-dom';
import requestTokenAPI from '../services/requestToken';

class Index extends Component {
  componentDidMount() {
    requestTokenAPI();
  }

  render() {
    return (
      // <Switch>
      //   <Route exact path="/" component={ Login } />
      // </Switch>
      <>
        Xablau
      </>
    );
  }
}

export default Index;
