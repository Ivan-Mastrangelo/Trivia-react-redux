import React from 'react';
import Inputs from '../components/form/Inputs';
import Button from '../components/form/Button';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      name: '',
      isDisable: true,
    };
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value }, () => this.enableBtn());
  }

  enableBtn = () => {
    const { email, name } = this.state;
    const zero = 0;
    if (email.length > zero && name.length > zero) {
      this.setState({
        isDisable: false,
      });
    } else {
      this.setState({
        isDisable: true,
      });
    }
  }

  render() {
    const { handleChange } = this;
    const { email, name, isDisable } = this.state;
    return (
      <div>
        <Inputs
          handleChange={ handleChange }
          email={ email }
          name={ name }
        />
        <Button isDisable={ isDisable } />
      </div>
    );
  }
}

export default Login;
