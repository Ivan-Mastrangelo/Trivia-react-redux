import React from 'react';
import Inputs from '../components/form/Inputs';
import Button from '../components/form/Button';
// import PropTypes from 'prop-types';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      name: '',
    };
  }

  render() {
    return (
      <div>
        <Inputs />
        <Button />
      </div>
    );
  }
}

export default Login;